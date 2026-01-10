export interface Experience {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  video?: string;
  images: Image[];
  technologies: string[];
  category: string;
  featured: boolean;
  links: {
    demo: string;
    github: string | null;
  };
  highlights: string[];
}

interface Image {
  src: string;
  title: string;
  description?: string;
}
