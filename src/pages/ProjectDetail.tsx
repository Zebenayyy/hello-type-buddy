import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import TopNav from '@/components/TopNav';
import Olympet from '@/components/Screenshot 2025-09-15 152846.png';
import NSBE_Website from '@/components/Screenshot 2025-09-15 153000.png';
import Hidden from '@/components/Screenshot 2025-09-15 152922.png';
import Cura from '@/components/Screenshot 2025-09-15 153032.png';

const projectDetails = {
  'nsbe-uva-website': {
    title: 'NSBE UVA Chapter Website',
    description: 'Comprehensive website for 100+ NSBE members built with modern web technologies and responsive design.',
    longDescription: 'This project involved creating a modern, responsive website for the University of Virginia\'s National Society of Black Engineers chapter. The website serves over 100 members and provides essential information about events, leadership, and chapter activities.',
    technologies: ['Vite', 'TypeScript', 'React', 'shadcn-ui', 'Tailwind CSS'],
    status: 'In Progress',
    image: NSBE_Website,
    demoUrl: 'https://uvansbe.com',
    hasDemo: true,
    hasGithub: false,
    developmentProcess: [
      'Conducted user research with NSBE members to understand needs',
      'Designed responsive layouts using Figma prototypes',
      'Built component library using shadcn-ui and Tailwind CSS',
      'Implemented TypeScript for type safety and better development experience',
      'Created responsive navigation and member directory features',
      'Optimized performance and accessibility standards'
    ],
    challenges: [
      'Managing content for 100+ members with dynamic updates',
      'Ensuring accessibility compliance for all users',
      'Creating mobile-first responsive design'
    ]
  },
  'olympet-ai-educational-travel-buddy': {
    title: 'Olympet: AI Educational Travel Buddy',
    description: 'AI-powered educational travel companion with dual-interface system for children and parents, featuring high-fidelity prototypes.',
    longDescription: 'Olympet is an innovative AI-powered educational travel companion designed to enhance family travel experiences. The app features a dual-interface system - one designed for children with gamified learning elements, and another for parents with comprehensive planning tools.',
    technologies: ['Figma', 'ProtoPie', 'User Research', 'AI Design'],
    status: 'Completed',
    image: Olympet,
    demoUrl: 'https://sites.google.com/view/olympet/home',
    hasDemo: true,
    hasGithub: false,
    developmentProcess: [
      'Conducted extensive user research with families and children',
      'Created user personas and journey mapping',
      'Designed dual-interface system in Figma with child and parent views',
      'Built interactive prototypes using ProtoPie',
      'Implemented AI conversation flows for educational content',
      'Tested usability with target demographic'
    ],
    challenges: [
      'Designing age-appropriate interfaces for children',
      'Balancing educational content with entertainment',
      'Creating seamless parent-child interaction workflows'
    ]
  },
  'hidden-guide-location-based-app': {
    title: 'Hidden Guide: Location-Based App',
    description: 'React Native mobile app with Firebase integration for real-time data storage, authentication, and push notifications.',
    longDescription: 'Hidden Guide is a location-based mobile application that helps users discover hidden gems and local attractions. Built with React Native and Firebase, it provides real-time data synchronization, user authentication, and push notifications for location-based alerts.',
    technologies: ['React Native', 'Firebase', 'Real-time Database', 'Push Notifications'],
    status: 'In Progress',
    image: Hidden,
    githubUrl: 'https://github.com/Zebenayyy/HIDDEN_GUIDE3',
    hasDemo: false,
    hasGithub: true,
    developmentProcess: [
      'Set up React Native development environment',
      'Integrated Firebase for backend services',
      'Implemented user authentication and profile management',
      'Built location services and mapping functionality',
      'Created real-time data synchronization for user-generated content',
      'Added push notification system for location alerts'
    ],
    challenges: [
      'Handling location permissions across different platforms',
      'Optimizing real-time data synchronization for performance',
      'Managing offline functionality and data caching'
    ]
  },
  'cura-ai-image-processing-platform': {
    title: 'Cura: AI Image Processing Platform',
    description: 'Web application for image processing and AI model training with custom LLM using 1000+ image dataset.',
    longDescription: 'Cura is a comprehensive AI image processing platform that combines traditional image processing techniques with modern machine learning. The platform processes over 1000 images to train custom models and provides an intuitive web interface for users to interact with AI-powered image analysis tools.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'OpenCV', 'Nyckel'],
    status: 'Completed',
    image: Cura,
    githubUrl: 'https://github.com/Zebenayyy/Cura',
    hasDemo: false,
    hasGithub: true,
    developmentProcess: [
      'Researched various image processing algorithms and AI models',
      'Built web interface using HTML, CSS, and JavaScript',
      'Developed backend API using Python Flask framework',
      'Integrated OpenCV for computer vision processing',
      'Implemented Nyckel for custom machine learning model training',
      'Processed and labeled 1000+ image dataset for model training',
      'Optimized model performance and accuracy through testing'
    ],
    challenges: [
      'Managing large dataset processing and storage efficiently',
      'Integrating multiple AI services and APIs seamlessly',
      'Optimizing image processing performance for real-time results'
    ]
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projectDetails[projectId as keyof typeof projectDetails] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <TopNav />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10" />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back button */}
        <Link to="/projects" className="inline-block mb-6">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </Link>

        {/* Project header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient">{project.title}</h1>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              project.status === 'Live' ? 'bg-green-500 text-white' :
              project.status === 'In Progress' ? 'bg-yellow-500 text-white' :
              'bg-primary/20 text-primary'
            }`}>
              {project.status}
            </span>
          </div>
          <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
          
          {/* Action buttons */}
          <div className="flex gap-4">
            {project.hasGithub && 'githubUrl' in project && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">
                  <Github className="w-5 h-5 mr-2" />
                  View Code
                </Button>
              </a>
            )}
            {project.hasDemo && 'demoUrl' in project && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Link
                </Button>
              </a>
            )}
          </div>
        </div>

        {/* Project image */}
        <div className="mb-8">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Technologies used */}
          <Card>
            <CardHeader>
              <CardTitle>Technologies Used</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Project overview */}
          <Card>
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Development process */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Development Process</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {project.developmentProcess.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground">{step}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Challenges */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Key Challenges</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-3"></span>
                  <span className="text-muted-foreground">{challenge}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Call to action */}
        <div className="text-center mt-12 pt-8 border-t">
          <p className="text-muted-foreground mb-6">Interested in working together?</p>
          <Link to="/contact">
            <Button size="lg" variant="outline">
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;