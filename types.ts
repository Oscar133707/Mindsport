export interface NavItem {
  label: string;
  path: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image?: string;
}

export interface VideoTestimonial {
  id: number;
  name: string;
  role: string;
  videoPath: string;
  posterPath?: string;
  description?: string;
}

export interface Partner {
  name: string;
  url: string;
  logoAlt: string;
  logo?: string;
}

export interface Lecture {
  id: number;
  title: string;
  date: string;
  description: string;
  duration: string;
}