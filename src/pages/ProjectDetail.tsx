import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import TopNav from '@/components/TopNav';
import Olympet from '@/components/Screenshot 2025-09-15 152846.png';
import NSBE_Website from '@/components/Screenshot 2025-09-15 153000.png';
import Hidden from '@/components/Screenshot 2025-09-15 152922.png';
import Cura from '@/components/Screenshot 2025-09-15 153032.png';

// NSBE Website screenshots
import NSBEHomeHero from '@/assets/nsbe-home-hero.png';
import NSBEHomeCards from '@/assets/nsbe-home-cards.png';
import NSBEHomeCommunity from '@/assets/nsbe-home-community.png';
import NSBEAbout from '@/assets/nsbe-about.png';
import NSBESponsorship from '@/assets/nsbe-sponsorship.png';
import NSBEAlumni from '@/assets/nsbe-alumni.png';
import NSBEMembership from '@/assets/nsbe-membership.png';
import NSBEMembershipBenefits from '@/assets/nsbe-membership-benefits.png';
import NSBEAdmin from '@/assets/nsbe-admin.png';
const projectDetails = {
  'nsbe-uva-chapter-website': {
    title: 'NSBE UVA Chapter Website',
    description: 'Comprehensive website for 100+ NSBE members built with modern web technologies and responsive design.',
    longDescription: 'Designed and developed a modern, fully responsive website for the University of Virginia\'s National Society of Black Engineers (NSBE) chapter, serving over 100 active members. The website acts as a central hub for chapter information, event management, member resources, and community engagement. Built with React and TypeScript, it features a clean, professional interface that showcases the organization\'s mission, leadership team, upcoming events, and opportunities for students interested in engineering and technology.',
    technologies: ['Vite', 'TypeScript', 'React', 'shadcn-ui', 'Tailwind CSS', 'React Router'],
    status: 'In Progress',
    image: NSBE_Website,
    demoUrl: 'https://uvansbe.com',
    figmaUrl: 'https://www.figma.com/design/8XyCKe5AlRjkTl18mDxXhw/NSBE-Website?node-id=0-1&t=kDYG3gqUxI3o5hOd-1',
    hasDemo: true,
    hasGithub: false,
    hasFigma: true,
    galleryImages: [
      { src: NSBEHomeHero, label: 'Home - Hero Section' },
      { src: NSBEHomeCards, label: 'Home - Feature Cards' },
      { src: NSBEHomeCommunity, label: 'Home - Community & Contact' },
      { src: NSBEAbout, label: 'About Page' },
      { src: NSBESponsorship, label: 'Sponsorship Page' },
      { src: NSBEAlumni, label: 'Alumni Page' },
      { src: NSBEMembership, label: 'Membership Page' },
      { src: NSBEMembershipBenefits, label: 'Membership Benefits' },
      { src: NSBEAdmin, label: 'Admin Page' },
    ],
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
    longDescription: 'Hidden Guide is an innovative location-based mobile application designed to help users discover hidden gems, local attractions, and off-the-beaten-path destinations in their area. Built with React Native for cross-platform compatibility, the app leverages Firebase for real-time data synchronization, secure user authentication, and instant push notifications. Users can share their own discoveries, view curated recommendations, and receive location-based alerts when they\'re near interesting places. The app creates a community-driven platform for explorers and locals to share unique experiences.',
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
      
      {/* Hero section with gradient background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        
        <div className="relative max-w-6xl mx-auto px-4 pt-8 pb-12">
          {/* Back button */}
          <Link to="/projects" className="inline-block mb-8">
            <Button variant="ghost" size="sm" className="hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>

          {/* Project header with better layout */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold ${
                  project.status === 'Live' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                  project.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                  'bg-primary/20 text-primary border border-primary/30'
                }`}>
                  {project.status}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient leading-tight">
                  {project.title}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              {/* Action buttons */}
              <div className="flex flex-wrap gap-3">
                {project.hasGithub && 'githubUrl' in project && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="border-2 hover:bg-primary/10">
                      <Github className="w-5 h-5 mr-2" />
                      View Code
                    </Button>
                  </a>
                )}
                {project.hasDemo && 'demoUrl' in project && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="shadow-lg shadow-primary/25">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      View Live Site
                    </Button>
                  </a>
                )}
                {'hasFigma' in project && project.hasFigma && 'figmaUrl' in project && (
                  <a href={project.figmaUrl as string} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="border-2 hover:bg-primary/10">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Figma Design
                    </Button>
                  </a>
                )}
              </div>

              {/* Tech stack pills */}
              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-3 font-medium">Built with</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1.5 bg-secondary/80 text-secondary-foreground rounded-lg text-sm font-medium backdrop-blur-sm border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <img 
                src={project.image} 
                alt={project.title}
                className="relative w-full h-[300px] md:h-[400px] object-cover rounded-xl shadow-2xl border border-border/50"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        {/* Project Gallery Carousel */}
        {'galleryImages' in project && project.galleryImages && (
          <section className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-foreground">Website Pages</h2>
              <p className="text-muted-foreground">Browse through the different pages and sections</p>
            </div>
            <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-6 md:p-8">
              <Carousel className="w-full max-w-4xl mx-auto">
                <CarouselContent>
                  {(project.galleryImages as { src: string; label: string }[]).map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="space-y-4">
                        <div className="relative overflow-hidden rounded-xl border border-border/50 shadow-lg">
                          <img 
                            src={image.src} 
                            alt={image.label}
                            className="w-full h-[350px] md:h-[450px] object-cover object-top"
                          />
                        </div>
                        <p className="text-center text-muted-foreground font-medium">{image.label}</p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 md:-left-4 bg-background/80 backdrop-blur-sm" />
                <CarouselNext className="right-2 md:-right-4 bg-background/80 backdrop-blur-sm" />
              </Carousel>
            </div>
          </section>
        )}

        {/* Project Overview */}
        <section className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">About This Project</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {project.longDescription}
          </p>
        </section>

        {/* Development Process & Challenges Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Development process */}
          <section className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Development Process</h2>
            <div className="space-y-4">
              {project.developmentProcess.map((step, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <span className="w-8 h-8 bg-primary/20 text-primary rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground pt-1 leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Challenges */}
          <section className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Key Challenges</h2>
            <div className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2.5"></span>
                  <span className="text-muted-foreground leading-relaxed">{challenge}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Call to action */}
        <section className="text-center py-12 border-t border-border/50">
          <h3 className="text-2xl font-bold text-foreground mb-3">Interested in working together?</h3>
          <p className="text-muted-foreground mb-6">Let's discuss your next project</p>
          <Link to="/#contact">
            <Button size="lg" className="shadow-lg shadow-primary/25">
              Get In Touch
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;