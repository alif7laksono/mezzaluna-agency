export interface Blog {
  id: number;
  title: string;
  slug: string; // SEO-friendly URL
  description: string; 
  author: string; 
  publishedDate: string;
  tags: string[];
  category: string;
}

export const blogData: Blog[] = [
  {
    id: 1,
    title: "The Future of Web Development",
    slug: "future-of-web-development",
    description:
      "Explore the latest trends and technologies shaping the web development industry.",
    author: "John Doe",
    publishedDate: "2024-11-01",
    tags: ["Web Development", "Next.js", "TailwindCSS"],
    category: "Technology",
  },
  {
    id: 2,
    title: "Designing Responsive Websites",
    slug: "designing-responsive-websites",
    description:
      "Learn best practices for creating stunning and responsive web designs.",
    author: "Jane Smith",
    publishedDate: "2024-10-20",
    tags: ["Design", "CSS", "UX"],
    category: "Design",
  },
  {
    id: 3,
    title: "Understanding TypeScript in 2024",
    slug: "understanding-typescript-2024",
    description:
      "A beginner-friendly guide to mastering TypeScript for modern web projects.",
    author: "Alex Johnson",
    publishedDate: "2024-10-10",
    tags: ["TypeScript", "JavaScript", "Programming"],
    category: "Programming",
  },
  {
    id: 4,
    title: "Mastering SEO for Modern Websites",
    slug: "mastering-seo-modern-websites",
    description:
      "Discover the latest SEO strategies to boost your website's visibility and traffic.",
    author: "Emily Davis",
    publishedDate: "2024-09-30",
    tags: ["SEO", "Digital Marketing", "Web Traffic"],
    category: "Marketing",
  },
  {
    id: 5,
    title: "Beginner's Guide to React",
    slug: "beginners-guide-to-react",
    description:
      "An essential guide to understanding and building applications with React.js.",
    author: "Michael Brown",
    publishedDate: "2024-08-25",
    tags: ["React", "JavaScript", "Frontend"],
    category: "Programming",
  },
  {
    id: 6,
    title: "The Importance of Accessibility in Design",
    slug: "importance-of-accessibility-in-design",
    description:
      "Why accessibility matters in design and how to implement it in your projects.",
    author: "Laura Wilson",
    publishedDate: "2024-07-15",
    tags: ["Accessibility", "Design", "UX"],
    category: "Design",
  },
  {
    id: 7,
    title: "Optimizing Web Performance",
    slug: "optimizing-web-performance",
    description:
      "Techniques and tools to ensure your website loads faster and performs better.",
    author: "Chris Lee",
    publishedDate: "2024-06-05",
    tags: ["Performance", "Optimization", "Web Development"],
    category: "Technology",
  },
  {
    id: 8,
    title: "Building Scalable Applications",
    slug: "building-scalable-applications",
    description:
      "Explore how to design and build applications that grow with your user base.",
    author: "Sarah Johnson",
    publishedDate: "2024-05-10",
    tags: ["Scalability", "Software Architecture", "Development"],
    category: "Programming",
  },
];
