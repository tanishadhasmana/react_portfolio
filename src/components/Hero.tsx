import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium mb-4">
              👋 Hello, I'm
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">

            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Tanisha Dhasmana
            </span>
          </h1>
          
          {/* Title */}
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
             MERN Stack Developer
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            I build modern, responsive web apps using HTML, CSS, JavaScript, Tailwind CSS, MongoDB, Express.js, React, and Node.js. I'm passionate about creating user-friendly, visually appealing interfaces, with a growing interest in AI and data analytics.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            {/* <Button variant="outline" size="lg">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button> */}
            <a href="src\assets\Tanisha_Dhasmana_Resume.pdf" download>
            <Button variant="outline" size="lg">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </a>

          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/tanishadhasmana" 
              className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/tanisha-dhasmana-b56369277/" 
              className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="tanishadhasmana2004@gmail.com" 
              className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;