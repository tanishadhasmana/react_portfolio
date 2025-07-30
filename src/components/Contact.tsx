import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   toast.success("Message sent successfully! I'll get back to you soon.");
  //   setFormData({ name: "", email: "", subject: "", message: "" });
  // };
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      toast.error("Failed to send message.");
    }
  } catch (error) {
    console.error("Error sending message:", error);
    toast.error("Something went wrong!");
  }
};

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "tanishadhasmana2004@gamil.com",
      link: "mailto:your.email@example.com"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Dehradun, Uttarakhand"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-muted-foreground mb-8">
              Feel free to reach out through any of the following channels. I'll do my best to respond within 24 hours.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-4 hover:shadow-elegant transition-all duration-300">
                  <a href={info.link} className="flex items-center space-x-4 group">
                    <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-semibold">{info.title}</div>
                      <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                        {info.value}
                      </div>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/tanishadhasmana" 
                  className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/tanisha-dhasmana-b56369277/" 
                  className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What is this regarding?"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello..."
                    rows={6}
                    required
                  />
                </div>
                
                <Button type="submit" variant="hero" size="lg" className="w-full md:w-auto">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-secondary border-primary/20">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              I'm currently available for freelance work and full-time opportunities. 
              Let's discuss how we can bring your ideas to life with the MERN stack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
  href="https://calendly.com/tanishadhasmana2004/30min"
  target="_blank"
  rel="noopener noreferrer"
>
            <Button variant="hero" size="lg">
                        Schedule a Call
          </Button>
          </a>

              <a
            href="src\assets\Tanisha_Dhasmana_Resume.pdf"
          download
          >
            <Button variant="outline" size="lg">
              View My Resume
            </Button>
          </a>

            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;