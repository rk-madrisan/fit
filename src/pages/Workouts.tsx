import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Dumbbell, 
  Heart, 
  Flower, 
  Zap, 
  Move,
  User,
  UserX,
  Filter,
  Clock,
  Target,
  TrendingUp
} from "lucide-react";
import strengthImage from "@/assets/strength-training.jpg";
import cardioImage from "@/assets/cardio-workout.jpg";
import yogaImage from "@/assets/yoga-practice.jpg";
import hiitImage from "@/assets/hiit-training.jpg";
import flexibilityImage from "@/assets/flexibility-stretch.jpg";

const Workouts = () => {
  const [selectedGender, setSelectedGender] = useState<"male" | "female">("male");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const workoutCategories = [
    {
      id: "strength",
      name: "Strength",
      icon: Dumbbell,
      image: strengthImage,
      description: "Build muscle and raw power",
      color: "from-fight-red to-fight-red-dark",
      workouts: {
        male: [
          { name: "Beast Mode Lifting", duration: "45 min", difficulty: "Advanced", calories: "400-500", link: "https://youtu.be/uTo2m16eJqI?feature=shared"},
          { name: "Iron Warrior", duration: "60 min", difficulty: "Expert", calories: "500-600" , link: "https://youtu.be/bcMRQCDrEN4?feature=shared"},
          { name: "Power Builder", duration: "40 min", difficulty: "Intermediate", calories: "350-450", link: "https://youtu.be/B12MXF0bSFo?feature=shared" }
        ],
        female: [
          { name: "Strong Goddess", duration: "40 min", difficulty: "Intermediate", calories: "300-400", link: "https://youtu.be/uTo2m16eJqI?feature=shared" },
          { name: "Amazonian Power", duration: "45 min", difficulty: "Advanced", calories: "350-450", link: "https://youtu.be/bcMRQCDrEN4?feature=shared" },
          { name: "Warrior Princess", duration: "35 min", difficulty: "Beginner", calories: "250-350", link: "https://youtu.be/B12MXF0bSFo?feature=shared" }
        ]
      }
    },
    {
      id: "cardio",
      name: "Cardio",
      icon: Heart,
      image: cardioImage,
      description: "Enhance endurance and burn calories",
      color: "from-orange-500 to-red-600",
      workouts: {
        male: [
          { name: "Thunderstorm Sprint", duration: "30 min", difficulty: "Advanced", calories: "450-550", link: "https://youtu.be/79cx5vmf3Qg?feature=shared" },
          { name: "Endurance Fighter", duration: "50 min", difficulty: "Intermediate", calories: "400-500", link: "https://youtu.be/edIK5SZYMZo?feature=shared" },
          { name: "Cardio Crusher", duration: "25 min", difficulty: "Beginner", calories: "300-400", link: "https://youtu.be/ofTiKY3hYdE?feature=shared" }
        ],
        female: [
          { name: "Phoenix Fire", duration: "35 min", difficulty: "Advanced", calories: "400-500", link: "https://youtu.be/79cx5vmf3Qg?feature=shared" },
          { name: "Rhythm Warrior", duration: "40 min", difficulty: "Intermediate", calories: "350-450", link: "https://youtu.be/edIK5SZYMZo?feature=shared" },
          { name: "Dance Fighter", duration: "30 min", difficulty: "Beginner", calories: "250-350", link: "https://youtu.be/ofTiKY3hYdE?feature=shared" }
        ]
      }
    },
    {
      id: "yoga",
      name: "Yoga",
      icon: Flower,
      image: yogaImage,
      description: "Find balance and inner strength",
      color: "from-purple-500 to-pink-500",
      workouts: {
        male: [
          { name: "Warrior's Flow", duration: "60 min", difficulty: "Intermediate", calories: "200-300", link: "https://youtu.be/Grr9HCCQghk?feature=shared" },
          { name: "Power Vinyasa", duration: "45 min", difficulty: "Advanced", calories: "250-350", link: "https://youtu.be/hKsAjoj4UK4?feature=shared" },
          { name: "Zen Fighter", duration: "30 min", difficulty: "Beginner", calories: "150-250", link: "https://youtu.be/3X0hEHop8ec?feature=shared" }
        ],
        female: [
          { name: "Goddess Flow", duration: "55 min", difficulty: "Intermediate", calories: "180-280", link: "https://youtu.be/Grr9HCCQghk?feature=shared" },
          { name: "Lunar Power", duration: "50 min", difficulty: "Advanced", calories: "220-320", link: "https://youtu.be/hKsAjoj4UK4?feature=shared" },
          { name: "Peaceful Warrior", duration: "40 min", difficulty: "Beginner", calories: "140-240", link: "https://youtu.be/3X0hEHop8ec?feature=shared" }
        ]
      }
    },
    {
      id: "hiit",
      name: "HIIT",
      icon: Zap,
      image: hiitImage,
      description: "High-intensity transformation",
      color: "from-yellow-500 to-orange-600",
      workouts: {
        male: [
          { name: "Inferno Blast", duration: "20 min", difficulty: "Expert", calories: "350-450", link: "https://youtu.be/-hSma-BRzoo?feature=shared" },
          { name: "Lightning Strike", duration: "25 min", difficulty: "Advanced", calories: "300-400", link: "https://youtu.be/e3-zpBc_hg8?feature=shared" },
          { name: "Thunder Punch", duration: "15 min", difficulty: "Intermediate", calories: "250-350", link: "https://youtu.be/Ij2NtOL66rU?feature=shared" }
        ],
        female: [
          { name: "Fire Storm", duration: "25 min", difficulty: "Advanced", calories: "300-400", link: "https://youtu.be/-hSma-BRzoo?feature=shared" },
          { name: "Electric Pulse", duration: "20 min", difficulty: "Intermediate", calories: "250-350", link: "https://youtu.be/e3-zpBc_hg8?feature=shared" },
          { name: "Power Surge", duration: "18 min", difficulty: "Beginner", calories: "200-300", link: "https://youtu.be/Ij2NtOL66rU?feature=shared" }
        ]
      }
    },
    {
      id: "flexibility",
      name: "Flexibility",
      icon: Move,
      image: flexibilityImage,
      description: "Improve mobility and recovery",
      color: "from-green-500 to-teal-500",
      workouts: {
        male: [
          { name: "Mobility Master", duration: "35 min", difficulty: "Intermediate", calories: "100-200", link: "https://youtu.be/KsVwAs9LriQ?feature=shared" },
          { name: "Flex Warrior", duration: "40 min", difficulty: "Advanced", calories: "120-220", link: "https://youtu.be/g9h6anH7n0U?feature=shared" },
          { name: "Recovery Flow", duration: "25 min", difficulty: "Beginner", calories: "80-180", link: "https://youtu.be/lxuTCHJSers?feature=shared" }
        ],
        female: [
          { name: "Grace & Flow", duration: "45 min", difficulty: "Intermediate", calories: "110-210", link: "https://youtu.be/KsVwAs9LriQ?feature=shared" },
          { name: "Elegant Stretch", duration: "50 min", difficulty: "Advanced", calories: "130-230", link: "https://youtu.be/g9h6anH7n0U?feature=shared" },
          { name: "Gentle Motion", duration: "30 min", difficulty: "Beginner", calories: "90-190", link: "https://youtu.be/lxuTCHJSers?feature=shared" }
        ]
      }
    }
  ];

  const filteredCategories = selectedCategory === "all" 
    ? workoutCategories 
    : workoutCategories.filter(cat => cat.id === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-500/20 text-green-400";
      case "Intermediate": return "bg-yellow-500/20 text-yellow-400";
      case "Advanced": return "bg-orange-500/20 text-orange-400";
      case "Expert": return "bg-red-500/20 text-red-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold hero-text mb-4">
            Choose Your Battle
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every warrior needs the right training. Select your path to greatness.
          </p>
        </div>

        {/* Gender Toggle */}
        <div className="flex justify-center mb-8">
          <div className="fight-card p-2 rounded-full">
            <div className="flex">
              <Button
                variant={selectedGender === "male" ? "fight" : "ghost"}
                onClick={() => setSelectedGender("male")}
                className="rounded-full px-6"
              >
                <User className="mr-2 h-4 w-4" />
                Men
              </Button>
              <Button
                variant={selectedGender === "female" ? "fight" : "ghost"}
                onClick={() => setSelectedGender("female")}
                className="rounded-full px-6"
              >
                <UserX className="mr-2 h-4 w-4" />
                Women
              </Button>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Button
            variant={selectedCategory === "all" ? "fight" : "fight-ghost"}
            onClick={() => setSelectedCategory("all")}
            size="sm"
          >
            <Filter className="mr-2 h-4 w-4" />
            All Categories
          </Button>
          {workoutCategories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "fight" : "fight-ghost"}
              onClick={() => setSelectedCategory(category.id)}
              size="sm"
            >
              <category.icon className="mr-2 h-4 w-4" />
              {category.name}
            </Button>
          ))}
        </div>

        {/* Workout Categories */}
        <div className="space-y-16">
          {filteredCategories.map((category, categoryIndex) => (
            <div key={category.id} className="animate-slide-up" style={{animationDelay: `${categoryIndex * 0.1}s`}}>
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className="flex items-center space-x-4 flex-1">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center fight-glow`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
                      {category.name}
                    </h2>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>
                <div className="hidden md:block">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-24 h-24 object-cover rounded-xl opacity-60"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.workouts[selectedGender].map((workout, index) => (
                  <Card key={index} className="fight-card group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {/* Workout Header */}
                        <div className="flex items-start justify-between">
                          <h3 className="text-xl font-display font-semibold text-white group-hover:text-fight-red-light transition-colors">
                            {workout.name}
                          </h3>
                          <Badge className={getDifficultyColor(workout.difficulty)}>
                            {workout.difficulty}
                          </Badge>
                        </div>

                        {/* Workout Stats */}
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{workout.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <TrendingUp className="h-4 w-4" />
                            <span>{workout.calories} cal</span>
                          </div>
                        </div>

                        {/* Action Button */}
                        <Button 
                          variant="fight-outline" 
                          className="w-full group-hover:variant-fight group-hover:fight-glow transition-all duration-300"
                        >
                          <a href={workout.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
                          <Target className="mr-2 h-4 w-4" />
                          Start Workout
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20 p-12 fight-card rounded-2xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            Ready to Start Your <span className="hero-text">Transformation</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of fighters who have already transformed their lives. 
            Your journey to greatness starts with a single workout.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="fight" size="lg" className="fight-glow-intense">
              Create Your Profile
            </Button>
            <Button variant="fight-outline" size="lg">
              Browse All Programs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workouts;