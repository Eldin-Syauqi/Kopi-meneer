export interface User {
  objectId: string;
  email: string;
  name?: string;
}

export interface BlogPost {
  objectId: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  tags: string[];
  created: number;
}

export interface NewBlogInput {
  title: string;
  content: string;
  tags: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  email: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  serviceId?: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface CompanyValue {
  title: string;
  description: string;
}
