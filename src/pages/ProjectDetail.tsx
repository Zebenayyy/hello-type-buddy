import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import TopNav from '@/components/TopNav';
import Olympet from '@/components/Screenshot 2025-09-15 152846.png';
import NSBE_Website from '@/components/Screenshot 2025-09-15 153000.png';
import Hidden from '@/components/Screenshot 2025-09-15 152922.png';
import Cura from '@/components/Screenshot 2025-09-15 153032.png';

const projectDetails = {
  'nsbe-uva-chapter-website': {
    title: 'NSBE UVA Chapter Website',
    description: 'Comprehensive website for 100+ NSBE members built with modern web technologies and responsive design.',
    longDescription: 'Designed and developed a modern, fully responsive website for the University of Virginia\'s National Society of Black Engineers (NSBE) chapter, serving over 100 active members. The website acts as a central hub for chapter information, event management, member resources, and community engagement.',
    technologies: ['Vite', 'TypeScript', 'React', 'shadcn-ui', 'Tailwind CSS', 'React Router'],
    status: 'In Progress',
    image: NSBE_Website,
    demoUrl: 'https://uvansbe.com',
    figmaUrl: 'https://www.figma.com/design/8XyCKe5AlRjkTl18mDxXhw/NSBE-Website?node-id=0-1&t=kDYG3gqUxI3o5hOd-1',
    hasDemo: true,
    hasGithub: false,
    hasFigma: true,
    developmentProcess: [
      'Conducted interviews with NSBE leadership to define requirements and key features',
      'Performed user research with chapter members to understand their needs and pain points',
      'Created wireframes and high-fidelity prototypes in Figma for desktop and mobile views',
      'Architected component structure using React with TypeScript for type safety',
      'Built reusable UI component library using shadcn-ui and Tailwind CSS',
      'Implemented dynamic event calendar and member directory features',
      'Integrated contact forms for prospective members and recruitment',
      'Optimized site performance with lazy loading and code splitting',
      'Ensured WCAG 2.1 accessibility compliance throughout the site',
      'Deployed using modern CI/CD practices with version control'
    ],
    challenges: [
      'Balancing aesthetic design with information density for 100+ members',
      'Creating an intuitive navigation system for diverse content types',
      'Managing dynamic content updates for events and member information',
      'Ensuring fast load times while maintaining visual quality',
      'Making the site fully accessible to users with disabilities',
      'Implementing a mobile-first responsive design that works across all devices'
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
  'hidden-guide-location-based-mobile-app': {
    title: 'Hidden Guide: Location-Based Mobile App',
    description: 'React Native mobile app with Firebase integration for real-time data storage, authentication, and push notifications.',
    longDescription: 'Hidden Guide is an innovative location-based mobile application designed to help users discover hidden gems, local attractions, and off-the-beaten-path destinations in their area.',
    technologies: ['React Native', 'Firebase', 'Firebase Authentication', 'Firestore', 'Cloud Messaging', 'React Navigation', 'Google Maps API'],
    status: 'In Progress',
    image: Hidden,
    githubUrl: 'https://github.com/Zebenayyy/HIDDEN_GUIDE3',
    hasDemo: false,
    hasGithub: true,
    developmentProcess: [
      'Researched location-based app requirements and user needs through market analysis',
      'Set up React Native development environment for iOS and Android',
      'Architected app structure with modular component design and navigation flow',
      'Integrated Firebase Authentication for secure user registration and login',
      'Configured Firestore for real-time database to store locations and user data',
      'Implemented Google Maps API for interactive map views and location markers',
      'Built location services using device GPS for real-time position tracking',
      'Created user profile management with photo uploads and preferences',
      'Developed location discovery feed with filtering and search capabilities',
      'Integrated Firebase Cloud Messaging for push notifications',
      'Implemented geofencing to trigger alerts when users enter specific areas',
      'Added offline functionality with local data caching and sync',
      'Optimized performance for smooth animations and map interactions',
      'Tested extensively on both iOS and Android devices for cross-platform compatibility'
    ],
    challenges: [
      'Handling location permissions and privacy concerns across iOS and Android platforms',
      'Optimizing real-time data synchronization to minimize battery drain',
      'Managing offline functionality with seamless sync when connection is restored',
      'Implementing accurate geofencing without excessive battery usage',
      'Ensuring smooth map performance with hundreds of location markers',
      'Balancing data storage between local cache and cloud database',
      'Creating an intuitive UX for discovering new locations while navigating'
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
        <div className="pt-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold text-3xl mb-4">Project Not Found</h1>
            <Link to="/projects">
              <Button className="rounded-full">Back to Projects</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Back button */}
          <Link to="/projects">
            <Button variant="ghost" className="mb-8 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>

          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight">
                {project.title}
              </h1>
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                project.status === 'Completed' ? 'bg-primary text-primary-foreground' :
                'bg-accent text-accent-foreground'
              }`}>
                {project.status}
              </span>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl">{project.description}</p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            {project.hasGithub && 'githubUrl' in project && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="rounded-full px-6">
                  <Github className="w-5 h-5 mr-2" />
                  View Code
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            )}
            {project.hasDemo && 'demoUrl' in project && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <Button className="rounded-full bg-primary hover:bg-primary/90 px-6">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Website
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            )}
            {'hasFigma' in project && project.hasFigma && 'figmaUrl' in project && (
              <a href={project.figmaUrl as string} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="rounded-full px-6">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Figma
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            )}
          </div>

          {/* Project image */}
          <div className="mb-12">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 md:h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Content grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Technologies */}
            <div className="bg-card rounded-3xl p-8 shadow-lg">
              <h2 className="font-display font-bold text-xl mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Overview */}
            <div className="bg-card rounded-3xl p-8 shadow-lg">
              <h2 className="font-display font-bold text-xl mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>
            </div>
          </div>

          {/* Development process */}
          <div className="bg-card rounded-3xl p-8 shadow-lg mb-6">
            <h2 className="font-display font-bold text-xl mb-6">Development Process</h2>
            <div className="space-y-4">
              {project.developmentProcess.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground pt-1">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div className="bg-foreground text-background rounded-3xl p-8 mb-12">
            <h2 className="font-display font-bold text-xl mb-6">Key Challenges</h2>
            <div className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2.5"></span>
                  <span className="opacity-80">{challenge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="bg-card rounded-3xl p-8 md:p-12 text-center shadow-lg">
            <h2 className="font-display font-bold text-3xl mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's create something amazing together!
            </p>
            <Link to="/#contact">
              <Button className="rounded-full bg-primary hover:bg-primary/90 px-8">
                Get In Touch
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
