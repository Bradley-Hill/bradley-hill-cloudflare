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
    liveUrl: "https://plant.bradley-hill.com/",
    image: "/plant-care-assistant-screenshot.png",
    featured: true,
  },
  {
    id: "shopping-cart",
    titleKey: "projects.shoppingCart.title",
    descriptionKey: "projects.shoppingCart.description",
    technologies: ["React", "TypeScript"],
    githubUrl: "https://github.com/Bradley-Hill/TheOdinProject-ShoppingCart",
    liveUrl: "https://bradley-hill.github.io/TheOdinProject-ShoppingCart/",
    image: "/shopping-cart-screenshot.png",
  },
  {
    id: "navigator-battleship",
    titleKey: "projects.navigatorBattleship.title",
    descriptionKey: "projects.navigatorBattleship.description",
    technologies: ["React", "TypeScript","JavaScript", "Jest"],
    githubUrl: "https://github.com/Bradley-Hill/navigator-battleship",
    liveUrl: "",
    image: "/navigator-battleships-screenshot.png",
  },
  {
    id: "knights-travail",
    titleKey: "projects.knightsTravail.title",
    descriptionKey: "projects.knightsTravail.description",
    technologies: ["JavaScript", "TypeScript"],
    githubUrl: "https://github.com/Bradley-Hill/KnightsTravail-Graphs",
    liveUrl: "",
    image: "/knights-travail-screenshot.png",
  },
  {
    id: "binary-search-tree",
    titleKey: "projects.binarySearchTree.title",
    descriptionKey: "projects.binarySearchTree.description",
    technologies: ["TypeScript","JavaScript"],
    githubUrl: "https://github.com/Bradley-Hill/BinarySearchTree-TS",
    liveUrl: "",
    image: "/binary-tree-search-screenshot.png",
  },
  {
    id: "hashmap-implementation",
    titleKey: "projects.hashmapImplementation.title",
    descriptionKey: "projects.hashmapImplementation.description",
    technologies: ["TypeScript"],
    githubUrl: "https://github.com/Bradley-Hill/hashMap",
    liveUrl: "",
    image: "/hash-map-screenshot.png",
  },
  // Example of a project template:
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
