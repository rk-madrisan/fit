import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Dumbbell, 
  Heart, 
  Target, 
  Users, 
  Trophy, 
  Zap,
  ArrowRight,
  Play
} from "lucide-react";
import heroImage from "@/assets/hero-fitness.jpg";
import strengthImage from "@/assets/strength-training.jpg";
import cardioImage from "@/assets/cardio-workout.jpg";
import yogaImage from "@/assets/yoga-practice.jpg";

const Home = () => {
  const features = [
    {
      icon: Dumbbell,
      title: "Strength Training",
      description: "Build muscle and increase power with our comprehensive strength programs.",
    },
    {
      icon: Heart,
      title: "Cardio Workouts",
      description: "Improve endurance and burn calories with high-energy cardio sessions.",
    },
    {
      icon: Target,
      title: "Personal Goals",
      description: "Set and achieve your fitness goals with personalized training plans.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Join a community of fighters dedicated to transformation.",
    },
  ];

  const stats = [
    { number: "10K+", label: "Active Members" },
    { number: "500+", label: "Workouts" },
    { number: "98%", label: "Success Rate" },
    { number: "24/7", label: "Support" },
  ];

  const workoutTypes = [
    {
      title: "Strength",
      image: strengthImage,
      description: "Build raw power",
      color: "from-fight-red to-fight-red-dark"
    },
    {
      title: "Cardio",
      image: cardioImage,
      description: "Enhance endurance",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Yoga",
      image: yogaImage,
      description: "Find balance",
      color: "from-purple-500 to-pink-500"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent z-10" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold">
                <span className="hero-text">FIT FOR</span>{" "}
                <span className="text-white">FIGHT</span>
              </h1>
              <p className="text-xl md:text-2xl text-fight-red-light font-semibold">
                POWERHOUSE
              </p>
            </div>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Transform your body, mind, and spirit. Join the ultimate fitness revolution 
              where power meets dedication and strength conquers all.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/signup">
                <Button variant="fight" size="lg" className="fight-glow-intense text-lg px-8 py-6 h-auto">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="fight-outline" size="lg" className="text-lg px-8 py-6 h-auto">
                <Play className="mr-2 h-5 w-5" />
                <a href="https://youtu.be/wkTFd3QZSP00" target="_blank" rel="noopener noreferrer">
                Watch Demo
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-fight-red rounded-full flex justify-center">
            <div className="w-1 h-3 bg-fight-red rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-fight-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-scale" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-3xl md:text-4xl font-display font-bold hero-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold hero-text mb-4">
              Why Choose FIT FOR FIGHT?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Power. Strength. Dedication. These aren't just words - they're our foundation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="fight-card group cursor-pointer animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-fight-red to-fight-red-dark flex items-center justify-center group-hover:fight-glow transition-all duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workout Types Section */}
      <section className="py-20 bg-fight-dark-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Choose Your <span className="hero-text">Battle</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every warrior chooses their path. What's yours?
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workoutTypes.map((workout, index) => (
              <div key={index} className="group cursor-pointer animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative overflow-hidden rounded-2xl fight-card h-80">
                  <img 
                    src={workout.image} 
                    alt={workout.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${workout.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />
                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-2xl font-display font-bold mb-2">
                        {workout.title}
                      </h3>
                      <p className="text-white/90">
                        {workout.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/workouts">
              <Button variant="fight" size="lg" className="fight-glow">
                Explore All Workouts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 fight-gradient opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              Ready to <span className="hero-text">Transform</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of fighters who've already started their journey to greatness.
              Your transformation starts now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button variant="fight" size="lg" className="fight-glow-intense text-lg px-8 py-6 h-auto">
                  <Trophy className="mr-2 h-5 w-5" />
                  Join the Fight
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="fight-outline" size="lg" className="text-lg px-8 py-6 h-auto">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;