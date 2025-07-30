import { Card } from "@/components/ui/card";
import { Code, Database, Server, Smartphone } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with React, HTML5, CSS3, and modern JavaScript."
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Backend Development", 
      description: "Building robust server-side applications with Node.js, Express.js, and RESTful API design."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database Management",
      description: "Designing and managing databases with MongoDB, implementing efficient data structures and queries."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Full Stack Integration",
      description: "Seamlessly connecting frontend and backend technologies to create complete web applications."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a final-year B.Tech student at Shivalik College of Engineering, specializing in Data Science. I enjoy building responsive web apps using the MERN stack and have a strong interest in AI and data analytics. I'm passionate about clean code, user-centric design, and continuously learning emerging technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
               My journey in tech began with a deep interest in data, which led me to pursue Data Science as a specialization. I've completed certifications from Accenture, IBM, Coursera, and gained hands-on experience during a 1-month offline internship in data analytics where I worked on so many projects.
              </p>
              <p>
                Curious about how web applications work, I started exploring front-end development by learning HTML and CSS through various YouTube channels and documentation. This curiosity quickly turned into passion, leading me to build my own web applications.
              </p>
              <p>
               Later, I joined Explorin Academy, where I mastered the MERN stack and strengthened my JavaScript foundation. Since then, I've developed multiple full-stack projects and completed a 1-month online internship in web development, gaining practical experience in building modern, scalable applications.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-card rounded-lg border">
                <div className="text-2xl font-bold text-primary">35+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <div className="text-primary mb-4">{feature.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;