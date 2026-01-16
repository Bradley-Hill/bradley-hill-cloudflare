export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "rncp-project",
    titleKey: "projects.rncp.title",
    descriptionKey: "projects.rncp.description",
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
    titleKey: "projects.shoppingCart.title",
    descriptionKey: "projects.shoppingCart.description",
    technologies: ["React", "TypeScript"],
    githubUrl: "https://github.com/Bradley-Hill/TheOdinProject-ShoppingCart",
    liveUrl: "https://bradley-hill.github.io/TheOdinProject-ShoppingCart/",
    image: "/placeholder.jpg",
  },
  {
    id: "navigator-battleship",
    titleKey: "projects.navigatorBattleship.title",
    descriptionKey: "projects.navigatorBattleship.description",
    technologies: ["React", "TypeScript", "Jest"],
    githubUrl: "https://github.com/Bradley-Hill/navigator-battleship",
    liveUrl: "",
    image: "/placeholder.jpg",
  },
  {
    id: "knights-travail",
    titleKey: "projects.knightsTravail.title",
    descriptionKey: "projects.knightsTravail.description",
    technologies: ["JavaScript", "TypeScript"],
    githubUrl: "https://github.com/Bradley-Hill/KnightsTravail-Graphs",
    liveUrl: "",
    image: "/placeholder.jpg",
  },
  {
    id: "binary-search-tree",
    titleKey: "projects.binarySearchTree.title",
    descriptionKey: "projects.binarySearchTree.description",
    technologies: ["TypeScript"],
    githubUrl: "https://github.com/Bradley-Hill/BinarySearchTree-TS",
    liveUrl: "",
    image: "/placeholder.jpg",
  },
  {
    id: "hashmap-implementation",
    titleKey: "projects.hashmapImplementation.title",
    descriptionKey: "projects.hashmapImplementation.description",
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
