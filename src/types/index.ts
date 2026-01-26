export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface BlogPost {
  title: string;
  pubDate: string;
  link: string;
  thumbnail?: string;
  description: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface MvpProject {
  id: string;
  title: string;
  tagline: string;
  description: string;
  heroMedia: string; // Image or video URL
  mediaType: 'image' | 'video';
  techStack: string[];
  metrics: {
    label: string;
    value: string;
    icon?: string;
  }[];
  launchDate: string;
  status: 'launched' | 'beta' | 'building';
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
}
