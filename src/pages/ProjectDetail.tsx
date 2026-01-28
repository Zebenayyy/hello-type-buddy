import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, Github, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import TopNav from '@/components/TopNav';
import Olympet from '@/components/Screenshot 2025-09-15 152846.png';
import NSBE_Website from '@/components/Screenshot 2025-09-15 153000.png';
import Hidden from '@/assets/hidden-guide-app.png';
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
    // UX Storytelling: Problem → Goal → Outcome
    problem: 'NSBE members struggled to find events, resources, and chapter information. The old system relied on scattered Google Docs and group chats, causing members to miss important deadlines and opportunities.',
    goal: 'Create a centralized, accessible digital hub that serves 100+ members across desktop and mobile, reducing information fragmentation and improving member engagement.',
    outcome: 'Reduced navigation depth from 4 clicks to 2. Improved mobile usability with responsive design. Created a single source of truth for all chapter activities.',
    metrics: ['100+ active members', '4→2 click navigation', 'Mobile-first design', '8 user interviews conducted'],
    longDescription: 'Designed and developed a modern, fully responsive website for the University of Virginia\'s National Society of Black Engineers (NSBE) chapter, serving over 100 active members. The website acts as a central hub for chapter information, event management, member resources, and community engagement.',
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
      'Conducted 8 user interviews with NSBE leadership and members to identify pain points',
      'Created user personas representing different member types (new students, seniors, alumni)',
      'Mapped user journeys to understand how members search for events and resources',
      'Designed wireframes in Figma, iterated based on leadership feedback',
      'Built high-fidelity prototypes for desktop and mobile views',
      'Developed component library with shadcn-ui for consistent design language',
      'Implemented responsive layouts with mobile-first approach',
      'Conducted usability testing with 5 members, refined navigation based on feedback',
      'Added WCAG 2.1 accessibility: 4.5:1 contrast ratios, keyboard navigation, ARIA labels',
      'Deployed with continuous integration for rapid iteration'
    ],
    challenges: [
      'Balancing information density: solved by progressive disclosure and clear visual hierarchy',
      'Mobile navigation complexity: created simplified mobile menu with priority-based ordering',
      'Content management: designed admin interface for non-technical leadership to update content',
      'Accessibility compliance: tested with VoiceOver and keyboard-only navigation'
    ]
  },
  'olympet-ai-educational-travel-buddy': {
    title: 'Olympet: AI Educational Travel Buddy',
    description: 'AI-powered educational travel companion with dual-interface system for children and parents, featuring high-fidelity prototypes.',
    // UX Storytelling: Problem → Goal → Outcome
    problem: 'Parents struggle to keep children engaged during travel while also wanting educational value. Existing travel apps are either too complex for kids or lack meaningful learning outcomes.',
    goal: 'Design an AI companion that makes learning fun during travel, with separate but connected interfaces for children (gamified) and parents (planning tools).',
    outcome: 'Created high-fidelity prototypes tested with 6 families. Achieved positive feedback on engagement and ease of use. Dual-interface approach validated through usability testing.',
    metrics: ['6 family user tests', 'Dual-interface system', 'High-fidelity prototypes', 'ProtoPie interactions'],
    longDescription: 'Olympet is an innovative AI-powered educational travel companion designed to enhance family travel experiences. The app features a dual-interface system - one designed for children with gamified learning elements, and another for parents with comprehensive planning tools.',
    technologies: ['Figma', 'ProtoPie', 'User Research', 'AI Design'],
    status: 'Completed',
    image: Olympet,
    demoUrl: 'https://sites.google.com/view/olympet/home',
    hasDemo: true,
    hasGithub: false,
    developmentProcess: [
      'Interviewed 6 families to understand travel pain points and learning goals',
      'Created parent and child personas with distinct needs and behaviors',
      'Mapped dual user journeys: parent planning flow and child exploration flow',
      'Sketched low-fidelity wireframes, tested concepts with parents',
      'Designed child interface with age-appropriate visuals and gamification',
      'Built interactive prototypes in ProtoPie with AI conversation simulations',
      'Conducted usability testing with children aged 6-12',
      'Iterated on feedback: simplified navigation, added visual rewards'
    ],
    challenges: [
      'Age-appropriate design: used larger touch targets, visual cues, and minimal text for children',
      'Balancing education and fun: gamified learning with collectibles and achievements',
      'Parent-child handoff: designed seamless mode switching with parental controls'
    ]
  },
  'hidden-guide-location-based-mobile-app': {
    title: 'Hidden Guide: Location-Based Mobile App',
    description: 'React Native mobile app with Firebase integration for real-time data storage, authentication, and push notifications.',
    // UX Storytelling: Problem → Goal → Outcome
    problem: 'Travelers and locals miss out on unique, off-the-beaten-path locations because mainstream apps prioritize popular tourist spots. There\'s no community-driven way to discover and share hidden gems.',
    goal: 'Build a cross-platform mobile app that enables users to discover, share, and get notified about hidden local attractions through community contributions and location-based alerts.',
    outcome: 'Developed functional React Native app with real-time sync, geofencing, and community features. Implemented offline-first architecture for reliable use in areas with poor connectivity.',
    metrics: ['Cross-platform (iOS + Android)', 'Real-time sync', 'Geofencing alerts', 'Offline-first design'],
    longDescription: 'Hidden Guide is an innovative location-based mobile application designed to help users discover hidden gems, local attractions, and off-the-beaten-path destinations. Built with React Native for cross-platform compatibility, the app leverages Firebase for real-time data synchronization, secure authentication, and push notifications.',
    technologies: ['React Native', 'Firebase', 'Firebase Authentication', 'Firestore', 'Cloud Messaging', 'React Navigation', 'Google Maps API'],
    status: 'In Progress',
    image: Hidden,
    githubUrl: 'https://github.com/Zebenayyy/HIDDEN_GUIDE3',
    figmaUrl: 'https://www.figma.com/design/NJwrDmzwIFqrR5n5MKEd00/Hack-Downtown?node-id=0-1&t=wYdVjIRvzk4ZAnm4-1',
    hasDemo: false,
    hasGithub: true,
    hasFigma: true,
    developmentProcess: [
      'Conducted market analysis to identify gaps in existing location discovery apps',
      'Defined user personas: tourists, local explorers, and content contributors',
      'Mapped core user flows: discover, contribute, and navigate to locations',
      'Architected modular React Native structure for maintainability',
      'Implemented Firebase Authentication with secure registration flow',
      'Built real-time location feed with Firestore for instant updates',
      'Integrated Google Maps API with custom markers and clustering',
      'Developed geofencing with battery-optimized location tracking',
      'Created offline-first architecture with local caching and background sync',
      'Tested on iOS and Android devices for cross-platform consistency'
    ],
    challenges: [
      'Battery optimization: implemented adaptive location tracking based on user activity',
      'Offline reliability: designed local-first data layer with conflict resolution',
      'Map performance: used marker clustering for smooth rendering with 100+ locations',
      'Cross-platform parity: ensured consistent UX across iOS and Android'
    ]
  },
  'cura-ai-image-processing-platform': {
    title: 'Cura: AI Image Processing Platform',
    description: 'Web application for image processing and AI model training with custom LLM using 1000+ image dataset.',
    // UX Storytelling: Problem → Goal → Outcome
    problem: 'Training custom image classification models typically requires significant ML expertise and complex tooling, making it inaccessible to non-technical users who need image analysis capabilities.',
    goal: 'Create an accessible web platform that allows users to upload images, train custom AI models, and get real-time analysis results without needing deep ML knowledge.',
    outcome: 'Built functional platform processing 1000+ images. Integrated Nyckel for accessible model training. Created intuitive upload-and-analyze workflow for non-technical users.',
    metrics: ['1000+ images processed', 'Custom ML model training', 'Real-time analysis', 'Python Flask backend'],
    longDescription: 'Cura is a comprehensive AI image processing platform that combines traditional image processing techniques with modern machine learning. The platform processes over 1000 images to train custom models and provides an intuitive web interface for AI-powered image analysis.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'OpenCV', 'Nyckel'],
    status: 'Completed',
    image: Cura,
    githubUrl: 'https://github.com/Zebenayyy/Cura',
    hasDemo: false,
    hasGithub: true,
    developmentProcess: [
      'Defined user requirements for accessible image analysis workflow',
      'Designed simple upload-train-analyze user flow',
      'Built responsive web interface with clear feedback states',
      'Developed Flask backend API for image handling and processing',
      'Integrated OpenCV for pre-processing and feature extraction',
      'Implemented Nyckel API for no-code model training',
      'Created dataset pipeline for processing and labeling 1000+ images',
      'Optimized inference speed for near real-time results'
    ],
    challenges: [
      'Large dataset handling: implemented chunked uploads and background processing',
      'API integration: created unified interface across OpenCV and Nyckel services',
      'Performance optimization: added caching and lazy loading for faster response times'
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

        {/* UX Storytelling: Problem → Goal → Outcome */}
        {'problem' in project && (
          <section className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-foreground">The Story</h2>
              <p className="text-muted-foreground">Understanding the problem and designing the solution</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Problem */}
              <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 backdrop-blur-sm rounded-2xl border border-red-500/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center">
                    <Target className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Problem</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">{project.problem}</p>
              </div>
              
              {/* Goal */}
              <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm rounded-2xl border border-yellow-500/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-yellow-500" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Goal</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">{project.goal}</p>
              </div>
              
              {/* Outcome */}
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 backdrop-blur-sm rounded-2xl border border-green-500/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Outcome</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">{project.outcome}</p>
              </div>
            </div>

            {/* Metrics */}
            {'metrics' in project && (
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                {(project.metrics as string[]).map((metric, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            )}
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