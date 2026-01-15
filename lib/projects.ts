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
    image: "/placeholder.jpg",
    featured: true,
  },
  {
    id: "shopping-cart",
    title: "Shopping Cart",
    description: "E-commerce shopping cart built as part of The Odin Project",
    technologies: ["React", "TypeScript"],
    githubUrl: "https://github.com/Bradley-Hill/TheOdinProject-ShoppingCart",
    liveUrl: "https://bradley-hill.github.io/TheOdinProject-ShoppingCart/",
    image: "/placeholder.jpg",
  },
  {
    id: "navigator-battleship",
    title: "Battleship Game",
    description:
      "This is a version of the classic board game Battleship, built using TypeScript and Test-Driven Development (TDD).",
    technologies: ["React", "TypeScript", "Jest"],
    githubUrl: "https://github.com/Bradley-Hill/navigator-battleship",
    liveUrl: "",
    image: "/placeholder.jpg",
  },
  {
    id: "knights-travail",
    title: "Knights Travail Solution",
    description:
      "This project is a solution to the Knights Travail problem, implemented using Object-Oriented Programming (OOP) practices in TypeScript. The Knights Travail problem involves finding the shortest path for a knight on a chessboard from one point to another.",
    technologies: ["JavaScript", "TypeScript"],
    githubUrl: "https://github.com/Bradley-Hill/KnightsTravail-Graphs",
    liveUrl: "",
    image: "/placeholder.jpg",
  },
  {
    id: "binary-search-tree",
    title: "Binary Search Tree Implementation",
    description:
      "This project is a simple implementation of a Binary Search Tree (BST) in TypeScript. It includes a BinarySearchTree class and a createTreeNode function for creating nodes.",
    technologies: ["TypeScript"],
    githubUrl: "https://github.com/Bradley-Hill/BinarySearchTree-TS",
    liveUrl: "",
    image: "/placeholder.jpg",
  },
  {
    id: "hashmap-implementation",
    title: "Hashmap Implementation",
    description:
      "This repository contains a simple implementation of a hash map data structure in TypeScript. The hash map uses separate chaining for collision resolution, with each bucket in the hash map being a linked list.",
    technologies: ["TypeScript"],
    githubUrl: "https://github.com/Bradley-Hill/hashMap",
    liveUrl: "",
    image: "/placeholder.jpg",
  },
  // ... other Odin exercises
  //   {
  //     id: "",
  //     title: "",
  //     description: "",
  //     technologies: ["React", "JavaScript"],
  //     githubUrl: "https://github.com/...",
  //     liveUrl: "https://...",
  //     image: "/placeholder.jpg",
  //   },
];
