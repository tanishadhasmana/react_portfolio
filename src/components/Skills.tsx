import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React.js", level: 75 },
        { name: "JavaScript (ES6+)", level: 80 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Tailwind CSS", level: 78 },
        { name: "TypeScript", level: 65 },
      ]
    },
    {
      title: "Backend Technologies", 
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 80 },
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "Mongoose ", level: 85 },
        { name: "Git & GitHub", level: 92 },
        { name: "Postman", level: 85 },
      ]
    }
  ];

  const technologies = [
    "React", "Node.js", "Express", "MongoDB", "JavaScript", "TypeScript", 
    "HTML5", "CSS3", "Tailwind", "Git", "Postman","Github", "Google Colab", "My Sql", "PowerBI"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here's an overview of my technical expertise and the technologies I work with to build amazing web applications.
          </p>
        </div>

        {/* Skills Progress Bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="p-6 hover:shadow-elegant transition-all duration-300">
              <h3 className="text-xl font-bold mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Technology Tags */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* MERN Stack Highlight */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-secondary border-primary/20">
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">MERN Stack</span> Specialist
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              I specialize in the complete MERN stack ecosystem, creating seamless full-stack applications 
              from database design to user interface implementation.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl font-bold text-primary">M</span>
                </div>
                <div className="font-semibold">MongoDB</div>
                <div className="text-sm text-muted-foreground">Database</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl font-bold text-primary">E</span>
                </div>
                <div className="font-semibold">Express.js</div>
                <div className="text-sm text-muted-foreground">Backend</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl font-bold text-primary">R</span>
                </div>
                <div className="font-semibold">React</div>
                <div className="text-sm text-muted-foreground">Frontend</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl font-bold text-primary">N</span>
                </div>
                <div className="font-semibold">Node.js</div>
                <div className="text-sm text-muted-foreground">Runtime</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;