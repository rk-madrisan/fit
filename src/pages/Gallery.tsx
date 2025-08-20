import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X, ZoomIn } from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const categories = [
    { id: "all", label: "All" },
    { id: "strength", label: "Strength" },
    { id: "cardio", label: "Cardio" },
    { id: "yoga", label: "Yoga" },
    { id: "hiit", label: "HIIT" },
    { id: "facility", label: "Facility" }
  ];

  const galleryItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
      title: "Deadlift Power",
      category: "strength",
      description: "Maximum strength training with proper form"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      title: "Cardio Intensity",
      category: "cardio", 
      description: "High-energy cardio sessions that burn calories"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
      title: "Yoga Flow",
      category: "yoga",
      description: "Peaceful yoga practice for mind and body balance"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
      title: "HIIT Training",
      category: "hiit",
      description: "High-intensity interval training for maximum results"
    },
    {
      id: 5,
      image: "https://plus.unsplash.com/premium_photo-1661580282598-6883482b4c8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYWwlMjB0cmFpbmVyfGVufDB8fDB8fHww",
      title: "Personal Training",
      category: "strength",
      description: "One-on-one guidance for optimal performance"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop",
      title: "Gym Floor",
      category: "facility",
      description: "State-of-the-art equipment and spacious training areas"
    },
    {
      id: 7,
      image: "https://plus.unsplash.com/premium_photo-1672280783572-4a254a8e71d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFyYmVsbCUyMHRyYWluZXJ8ZW58MHx8MHx8fDA%3D",
      title: "Barbell Training",
      category: "strength",
      description: "Heavy compound movements for serious strength gains"
    },
    {
      id: 8,
      image: "https://plus.unsplash.com/premium_photo-1664299208816-ef56887db111?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyZGlvJTIwem9uZSUyMHdvcmtvdXR8ZW58MHx8MHx8fDA%3D",
      title: "Cardio Zone",
      category: "cardio",
      description: "Modern cardio equipment with entertainment systems"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1615657973599-990d6e05fb8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHlvZ2ElMjBzdHVkaW98ZW58MHx8MHx8fDA%3D",
      title: "Yoga Studio",
      category: "yoga", 
      description: "Serene space designed for mindful movement"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop",
      title: "Battle Ropes",
      category: "hiit",
      description: "Functional training tools for explosive workouts"
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      title: "Free Weights",
      category: "strength",
      description: "Complete selection of dumbbells and barbells"
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1545612036-2872840642dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGd5bSUyMHJlY2VwdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      title: "Reception Area",
      category: "facility",
      description: "Welcome center with modern amenities"
    }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            GALLERY
          </Badge>
          <h1 className="text-5xl md:text-7xl font-display font-bold hero-text mb-6">
            FIT FOR FIGHT Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our world-class facilities, witness the intensity of our training sessions, 
            and see where champions are forged.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "fight" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="transition-all duration-300"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <div className="group relative overflow-hidden rounded-lg fight-glow cursor-pointer hover:shadow-fight-intense transition-all duration-500">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <ZoomIn className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Badge variant="secondary" className="mb-2 text-xs">
                      {categories.find(cat => cat.id === item.category)?.label}
                    </Badge>
                    <h3 className="text-lg font-semibold">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl border-0 bg-transparent p-0">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                    <Badge variant="secondary" className="mb-2">
                      {categories.find(cat => cat.id === item.category)?.label}
                    </Badge>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/80">
                      {item.description}
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 py-16 bg-gradient-subtle rounded-2xl">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold hero-text mb-12">
              By The Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-fight-red mb-2">500+</div>
                <div className="text-muted-foreground">Happy Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-fight-red mb-2">50+</div>
                <div className="text-muted-foreground">Equipment Pieces</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-fight-red mb-2">100+</div>
                <div className="text-muted-foreground">Workout Programs</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-fight-red mb-2">24/7</div>
                <div className="text-muted-foreground">Access Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;