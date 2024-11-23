export interface IProject {
  title: string;
  description: string;
  url?: string;
}

export const projects: IProject[] = [
  {
    title: "News Website",
    description:
      "A simple news website that uses the GNews API to fetch and display the latest news from various sources. The site features a homepage with current news articles and a search page that allows users to find news based on keywords.",
    url: "https://g-news-theta.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "A clean and professional portfolio site for showcasing work with multiple pages, and animation each section. Built with nextjs, typescript, tailwind css.",
    url: "https://vacronyx.shop/",
  },
  {
    title: "Movie Search Application",
    description:
      "A movie search application that utilizes the TMDB API to fetch and display movie data. Users can view detailed information about each movie, browse movies by category, and search for movies by title. ",
    url: "https://tmdb2-one.vercel.app/",
  },
  {
    title: "Blog Platform with e-commerce intregation",
    description:
      "A blogging platform with content management features. Built with wordpress and elementor pro. Fully responsive, and seo friendly.",
    url: "https://luna.fnespoir.blog/",
  },
  {
    title: "Landing Page",
    description:
      "A high-conversion landing page for product promotions. Responsive design, seo friendly, and modern design.",
    url: "https://vacronyx.shop/",
  },
  {
    title: "Photography Portfolio",
    description:
      "A visually stunning portfolio to showcase photography work with gallery features.",
    url: "https://mia.fnespoir.blog/",
  },
  {
    title: "Life Coaching services website with blog page",
    description:
      "A visually stunning portfolio to showcase life coaching services, work with blog page.",
    url: "https://https://emma.fnespoir.blog/",
  },
];
