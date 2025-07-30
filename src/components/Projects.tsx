import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Database, Server, Monitor } from "lucide-react";
import project1Image from "@/assets/project-1.png";
import project2Image from "@/assets/project-2.png";
import project3Image from "@/assets/project-3.png";


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Frontend Netflix Clone",
      description: "A visually appealing, responsive clone of the Netflix landing page, built using HTML, CSS, and vanilla JavaScript. Designed to replicate the look and feel of the official Netflix UI with smooth transitions and mobile responsiveness.",
      image: project1Image,
      technologies: ["HTML5", "CSS3 (Flexbox, Grid, Animations)", "JavaScript"],
      features: ["Fully responsive layout for all screen sizes", "Interactive navigation bar", "Grid-based layout for movie/series thumbnails", "Responsive Design"],
      liveUrl: "file:///C:/Users/User/OneDrive/Desktop/sigmawebdevelopmentcourse/NetflixClone.html",
      githubUrl: "https://github.com/tanishadhasmana/Netflix-Clone",
      category: "Frontend"
    },
    {
      id: 2,
      title: "React Notes App",
      description: "A simple, efficient, and user-friendly Notes application built using React. It allows users to create, view, and delete notes—persisted locally using the browser's LocalStorage—so no data is lost on page refresh.",
      image: project2Image,
      technologies: ["React",  "LocalStorage API", "Tailwind CSS"],
      features: ["Create, edit, and delete notes", "Persistent data using LocalStorage", "Easy-to-use note management", "Live character count"],
      liveUrl: "https://react-notes-app-17xy.vercel.app/",
      githubUrl: "https://github.com/tanishadhasmana/ReactNotesApp",
      category: "Web Application"
    },
    {
      id: 3,
      title: " Analyst Dashboard",
      description: "A clean and interactive data analyst dashboard designed with a pixel-perfect approach using HTML and CSS. Focused on data visualization and user-friendly design, the dashboard leverages CSS Grid and Flexbox for a fully responsive and well-structured layout..",
      image: project3Image,
      technologies: ["HTML5", "CSS3 (Flexbox & Grid)", "Responsive Design Principles"],
      features: ["Pixel-perfect layout with attention to detail", "Mastery of CSS Grid and Flexbox", "Data visualization elements for better insights", "Strengthened UI/UX thinking by focusing on small design edges"],
      liveUrl: "https://tanishadhasmana.github.io/analyst-dashboard/",
      githubUrl: "https://github.com/tanishadhasmana/analyst-dashboard",
      category: "Productivity"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in development using the MERN stack.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card key={project.id} className={`overflow-hidden hover:shadow-elegant transition-all duration-300 ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            }`}>
              <div className="lg:flex">
                {/* Project Image */}
                <div className="lg:w-1/2">
                  <div className="relative group overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3 flex items-center">
                      <Server className="h-4 w-4 mr-2" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3 flex items-center">
                      <Monitor className="h-4 w-4 mr-2" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button variant="default" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto p-8 bg-gradient-primary text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">Want to See More?</h3>
            <p className="mb-6 opacity-90">
              I have many more projects in my portfolio. Check out my GitHub for a complete overview of my work.
            </p>
            {/* <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </Button> */}
            <a
  href="https://github.com/tanishadhasmana"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    variant="outline"
    size="lg"
    className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
  >
    <Github className="h-5 w-5 mr-2" />
    View All Projects on GitHub
  </Button>
</a>

          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;