import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const TypingEffect = ({ text, speed = 100, className = "" }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  return <span className={className}>{displayText}</span>;
};

const CharacterSection = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="w-64 h-64 bg-gradient-to-br from-yellow-400 to-green-400 rounded-full flex items-center justify-center shadow-2xl">
        <div className="text-6xl">🎨</div>
      </div>
    </div>
  );
};

const Index = () => {
  const [showCharacter, setShowCharacter] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowContent(true), 300);
    const timer2 = setTimeout(() => setShowCharacter(true), 800);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 bg-gradient-to-br from-yellow-400/5 via-gray-50 to-green-400/10 -z-10" />
      
      {/* Floating decorative elements */}
      <div className="fixed top-20 left-10 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl animate-bounce -z-5" />
      <div className="fixed bottom-20 right-10 w-32 h-32 bg-green-400/10 rounded-full blur-xl animate-bounce -z-5" style={{animationDelay: '1s'}} />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className={`text-center lg:text-left transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="mb-6">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">Hi!</span>
                </h1>
                <div className="text-2xl md:text-3xl text-gray-800 font-medium">
                  <TypingEffect 
                    text="Welcome to my portfolio" 
                    speed={80}
                    className="block"
                  />
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Hope you enjoy my little corner of the internet! :)
              </p>
              
              <Button 
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-yellow-400 to-green-400 text-white hover:from-yellow-500 hover:to-green-500"
              >
                Scroll Down to Learn More
              </Button>
            </div>
            
            <div className={`flex justify-center lg:justify-start transition-all duration-1000 ${showCharacter ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <CharacterSection className="lg:ml-4" />
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate developer who loves creating beautiful and functional web experiences. 
                With a keen eye for design and a strong foundation in modern web technologies, I bring ideas to life through code.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or enjoying a good cup of coffee while brainstorming the next big idea.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {['React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'CSS'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center shadow-xl">
                <div className="text-4xl">👨‍💻</div>
              </div>
            </div>
          </div>
          <Button 
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="mt-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600"
          >
            View My Projects
          </Button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">My Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Portfolio Website", desc: "A modern, responsive portfolio built with React and Tailwind CSS", icon: "🌐" },
              { title: "E-commerce App", desc: "Full-stack shopping application with payment integration", icon: "🛒" },
              { title: "Task Manager", desc: "Productivity app with real-time collaboration features", icon: "✅" },
              { title: "Weather Dashboard", desc: "Interactive weather app with beautiful visualizations", icon: "🌤️" },
              { title: "Chat Application", desc: "Real-time messaging app with modern UI/UX", icon: "💬" },
              { title: "Blog Platform", desc: "Content management system for writers and bloggers", icon: "📝" }
            ].map((project, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-4 text-center">{project.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.desc}</p>
                <Button variant="outline" className="w-full hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white">
                  View Project
                </Button>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Contact Me</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to start your next project? I'd love to hear from you! 
            Let's create something amazing together.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: "📧", title: "Email", info: "hello@example.com" },
              { icon: "📱", title: "Phone", info: "+1 (555) 123-4567" },
              { icon: "📍", title: "Location", info: "New York, NY" }
            ].map((contact, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl mb-3">{contact.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">{contact.title}</h3>
                <p className="text-gray-300">{contact.info}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-6">
            {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
              <Button key={social} variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900">
                {social}
              </Button>
            ))}
          </div>

          <Button 
            onClick={() => document.getElementById('hero').scrollIntoView({ behavior: 'smooth' })}
            className="mt-12 bg-gradient-to-r from-cyan-400 to-blue-400 text-gray-900 hover:from-cyan-500 hover:to-blue-500"
          >
            Back to Top
          </Button>
        </div>
      </section>
      
      {/* Corner character indicator */}
      <div className="fixed bottom-6 right-6 z-20">
        <div className="bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200">
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-green-400 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Index;
