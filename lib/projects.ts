export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "rncp-project",
    title: "Plant care Assisstant",
    description:
      "A web app to help users take care of their plants, built as part of my RNCP diploma",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Docker",
      "Supabase",
      "Prisma",
      "Jest",
      "Playwright",
    ],
    githubUrl: "https://github.com/Bradley-Hill/PlantCareAssistant",
    liveUrl: "",
    image: "../public/placeholder.jpg",
    featured: true,
  },
  {
    id: "shopping-cart",
    title: "Shopping Cart",
    description: "E-commerce shopping cart built as part of The Odin Project",
    technologies: ["React", "TypeScript"],
    githubUrl: "https://github.com/Bradley-Hill/TheOdinProject-ShoppingCart",
    liveUrl: "https://bradley-hill.github.io/TheOdinProject-ShoppingCart/",
    image: "../public/placeholder.jpg",
  },
  {
    id: "navigator-battleship",
    title: "Battleship Game",
    description: "",
    technologies: ["React", "TypeScript", "Jest"],
    githubUrl: "https://github.com/Bradley-Hill/navigator-battleship",
    liveUrl: "",
    image: "../public/placeholder.jpg",
  },
  {
    id: "knights-travail",
    title: "Knights Travail Solution",
    description: "Solution to the Knight Travail problem using OOP principles",
    technologies: ["JavaScript", "TypeScript"],
    githubUrl: "https://github.com/Bradley-Hill/KnightsTravail-Graphs",
    liveUrl: "",
    image: "../public/placeholder.jpg",
  },
  {
    id: "binary-search-tree",
    title: "Binary Search Tree Implementation",
    description: "This project is a simple implementation of a Binary Search Tree (BST) in TypeScript.",
    technologies: ["TypeScript"],
    githubUrl: "https://github.com/Bradley-Hill/BinarySearchTree-TS",
    liveUrl: "",
    image: "../public/placeholder.jpg",
  },
  {
    id: "hashmap-implementation",
    title: "Hashmap Implementation",
    description: "This project is a simple implementation of a Hashmap in TypeScript.",
    technologies: ["TypeScript"],
    githubUrl: "https://github.com/Bradley-Hill/hashMap",
    liveUrl: "",
    image: "../public/placeholder.jpg",
  },
  // ... other Odin exercises
  //   {
  //     id: "",
  //     title: "",
  //     description: "",
  //     technologies: ["React", "JavaScript"],
  //     githubUrl: "https://github.com/...",
  //     liveUrl: "https://...",
  //     image: "/images/placeholder.jpg",
  //   },
];
