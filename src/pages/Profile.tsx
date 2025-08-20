import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { User, Target, Activity, Heart, Save, User as UserIcon } from "lucide-react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    height: "",
    weight: "",
    gender: "",
    health_issues: "",
    activity_level: "",
    goal: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

  const workoutRecommendations = {
    weight_loss: {
      primary: ["Cardio", "HIIT"],
      secondary: ["Strength"],
      description: "Focus on high-intensity cardio and strength training to maximize calorie burn"
    },
    weight_gain: {
      primary: ["Strength"],
      secondary: ["HIIT", "Flexibility"],
      description: "Emphasize strength training with adequate recovery for muscle building"
    },
    muscle_gain: {
      primary: ["Strength"],
      secondary: ["HIIT"],
      description: "Heavy resistance training with compound movements for maximum muscle growth"
    },
    maintenance: {
      primary: ["Strength", "Cardio"],
      secondary: ["Yoga", "Flexibility"],
      description: "Balanced approach combining all workout types for overall fitness"
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
        await fetchProfile(user.id);
      }
    };
    getUser();
  }, []);

  const fetchProfile = async (userId) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle();

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      if (data) {
        setProfile({
          name: data.name || "",
          age: data.age?.toString() || "",
          height: data.height?.toString() || "",
          weight: data.weight?.toString() || "",
          gender: data.gender || "",
          health_issues: data.health_issues || "",
          activity_level: data.activity_level || "",
          goal: data.goal || ""
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load profile data",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;

    setIsSaving(true);
    try {
      const profileData = {
        user_id: user.id,
        name: profile.name,
        age: profile.age ? parseInt(profile.age) : null,
        height: profile.height ? parseFloat(profile.height) : null,
        weight: profile.weight ? parseFloat(profile.weight) : null,
        gender: profile.gender,
        health_issues: profile.health_issues,
        activity_level: profile.activity_level,
        goal: profile.goal
      };

      const { error } = await supabase
        .from('profiles')
        .upsert(profileData, { onConflict: 'user_id' });

      if (error) throw error;

      toast({
        title: "Profile Updated!",
        description: "Your personal information has been saved successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save profile. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSaving(false);
    }
  };

  const currentRecommendation = workoutRecommendations[profile.goal];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-fight-red mx-auto mb-4"></div>
          <p>Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            PERSONAL PROFILE
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold hero-text mb-4">
            Your Fitness Profile
          </h1>
          <p className="text-lg text-muted-foreground">
            Help us personalize your workout experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Form */}
          <div className="lg:col-span-2">
            <Card className="fight-card shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-display font-bold hero-text flex items-center">
                  <UserIcon className="mr-3 h-6 w-6" />
                  Personal Information
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out your details to get personalized workout recommendations
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        value={profile.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="bg-background/50 border-border focus:border-fight-red focus:ring-fight-red/20"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age" className="text-foreground font-medium">
                        Age *
                      </Label>
                      <Input
                        id="age"
                        type="number"
                        placeholder="25"
                        value={profile.age}
                        onChange={(e) => handleInputChange('age', e.target.value)}
                        className="bg-background/50 border-border focus:border-fight-red focus:ring-fight-red/20"
                        min="13"
                        max="100"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="height" className="text-foreground font-medium">
                        Height (cm) *
                      </Label>
                      <Input
                        id="height"
                        type="number"
                        placeholder="170"
                        value={profile.height}
                        onChange={(e) => handleInputChange('height', e.target.value)}
                        className="bg-background/50 border-border focus:border-fight-red focus:ring-fight-red/20"
                        min="100"
                        max="250"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="weight" className="text-foreground font-medium">
                        Weight (kg) *
                      </Label>
                      <Input
                        id="weight"
                        type="number"
                        placeholder="70"
                        value={profile.weight}
                        onChange={(e) => handleInputChange('weight', e.target.value)}
                        className="bg-background/50 border-border focus:border-fight-red focus:ring-fight-red/20"
                        min="30"
                        max="300"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-foreground font-medium">
                        Gender *
                      </Label>
                      <Select value={profile.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                        <SelectTrigger className="bg-background/50 border-border focus:border-fight-red focus:ring-fight-red/20">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-foreground font-medium">
                        Activity Level *
                      </Label>
                      <Select value={profile.activity_level} onValueChange={(value) => handleInputChange('activity_level', value)}>
                        <SelectTrigger className="bg-background/50 border-border focus:border-fight-red focus:ring-fight-red/20">
                          <SelectValue placeholder="Select activity level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sedentary">Sedentary</SelectItem>
                          <SelectItem value="lightly_active">Lightly Active</SelectItem>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="very_active">Very Active</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-foreground font-medium">
                      Fitness Goal *
                    </Label>
                    <Select value={profile.goal} onValueChange={(value) => handleInputChange('goal', value)}>
                      <SelectTrigger className="bg-background/50 border-border focus:border-fight-red focus:ring-fight-red/20">
                        <SelectValue placeholder="Select your goal" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weight_loss">Weight Loss</SelectItem>
                        <SelectItem value="weight_gain">Weight Gain</SelectItem>
                        <SelectItem value="muscle_gain">Muscle Gain</SelectItem>
                        <SelectItem value="maintenance">Maintenance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="health_issues" className="text-foreground font-medium">
                      Health Issues / Medical Conditions
                    </Label>
                    <Textarea
                      id="health_issues"
                      placeholder="List any health conditions, injuries, or medical concerns..."
                      value={profile.health_issues}
                      onChange={(e) => handleInputChange('health_issues', e.target.value)}
                      className="bg-background/50 border-border focus:border-fight-red focus:ring-fight-red/20 min-h-[100px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="fight"
                    className="w-full fight-glow-intense"
                    disabled={isSaving}
                  >
                    {isSaving ? (
                      "Saving..."
                    ) : (
                      <>
                        <Save className="mr-2 h-4 w-4" />
                        Save Profile
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Workout Recommendations */}
          <div className="space-y-6">
            {currentRecommendation && (
              <Card className="fight-card">
                <CardHeader>
                  <CardTitle className="text-xl font-display font-bold hero-text flex items-center">
                    <Target className="mr-3 h-5 w-5" />
                    Recommended Workouts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {currentRecommendation.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-fight-red mb-2 flex items-center">
                      <Activity className="mr-2 h-4 w-4" />
                      Primary Focus
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentRecommendation.primary.map((workout) => (
                        <Badge key={workout} variant="default" className="bg-fight-red">
                          {workout}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-muted-foreground mb-2 flex items-center">
                      <Heart className="mr-2 h-4 w-4" />
                      Secondary
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentRecommendation.secondary.map((workout) => (
                        <Badge key={workout} variant="secondary">
                          {workout}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* BMI Calculator */}
            {profile.height && profile.weight && (
              <Card className="fight-card">
                <CardHeader>
                  <CardTitle className="text-xl font-display font-bold hero-text">
                    Your BMI
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {(() => {
                    const heightM = parseFloat(profile.height) / 100;
                    const weightKg = parseFloat(profile.weight);
                    const bmi = (weightKg / (heightM * heightM)).toFixed(1);
                    const bmiNum = parseFloat(bmi);
                    
                    let category = "";
                    let color = "";
                    if (bmiNum < 18.5) {
                      category = "Underweight";
                      color = "text-blue-500";
                    } else if (bmiNum < 25) {
                      category = "Normal";
                      color = "text-green-500";
                    } else if (bmiNum < 30) {
                      category = "Overweight";
                      color = "text-yellow-500";
                    } else {
                      category = "Obese";
                      color = "text-red-500";
                    }

                    return (
                      <div className="text-center">
                        <div className="text-3xl font-bold text-fight-red mb-2">
                          {bmi}
                        </div>
                        <div className={`text-sm font-medium ${color}`}>
                          {category}
                        </div>
                      </div>
                    );
                  })()}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;