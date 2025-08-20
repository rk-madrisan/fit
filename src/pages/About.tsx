import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Award, Dumbbell, Heart, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Power",
      description: "Unleash your inner strength and push beyond your limits"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Strength", 
      description: "Build physical and mental resilience that lasts"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Dedication",
      description: "Commit to excellence in every workout and every rep"
    }
  ];

  const team = [
    {
      name: "MOHAN RAJ",
      role: "Head Trainer",
      speciality: "Strength & Conditioning",
      image: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww"
    },
    {
      name: "SAMEER", 
      role: "Yoga Instructor",
      speciality: "Flexibility & Mindfulness",
      image: "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fHww"
    },
    {
      name: "NIHAAL",
      role: "HIIT Specialist", 
      speciality: "High-Intensity Training",
      image: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-fight-red/90 to-fight-red-dark/90" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop')] bg-cover bg-center" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 hero-text">
            About FIT FOR FIGHT
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            Empowering warriors to achieve their ultimate fitness potential through dedication, strength, and unwavering commitment.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-sm font-medium">
              OUR MISSION
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold hero-text mb-6">
              Power, Strength, Dedication
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              At FIT FOR FIGHT, we believe every individual has the potential to become their strongest self. 
              Our philosophy centers on three core principles that drive everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {values.map((value, index) => (
              <Card key={index} className="fight-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="fight-glow rounded-full p-4 bg-fight-red w-fit mx-auto mb-6 group-hover:shadow-fight-intense transition-all duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-sm font-medium">
              GALLERY
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold hero-text mb-6">
              Where Champions Are Made
            </h2>
            <p className="text-xl text-muted-foreground">
              Step inside our world-class facilities and witness the transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
                title: "Strength Training Zone",
                category: "Equipment"
              },
              {
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop", 
                title: "Cardio Studio",
                category: "Cardio"
              },
              {
                image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
                title: "Yoga & Flexibility Space",
                category: "Wellness"
              },
              {
                image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
                title: "Group Classes",
                category: "Community"
              },
              {
                image: "https://plus.unsplash.com/premium_photo-1663050901483-ee8703cc8372?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhaW5lcnxlbnwwfHwwfHx8MA%3D%3D",
                title: "Personal Training",
                category: "1-on-1"
              },
              {
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
                title: "Recovery Area", 
                category: "Wellness"
              }
            ].map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg fight-glow hover:shadow-fight-intense transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Badge variant="secondary" className="mb-2 text-xs">
                    {item.category}
                  </Badge>
                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-sm font-medium">
              OUR TEAM
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold hero-text mb-6">
              Expert Trainers
            </h2>
            <p className="text-xl text-muted-foreground">
              Meet the professionals who will guide you on your fitness journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="fight-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden fight-glow group-hover:shadow-fight-intense transition-all duration-300">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2 text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-fight-red font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.speciality}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
