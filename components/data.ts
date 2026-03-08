import {
  Gift,
  Home,
  ChefHat,
  Baby,
  NotebookPen,
  Palette,
  Sparkles,
  Star,
  type LucideIcon,
} from "lucide-react";

export const navItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "Concept", href: "#concept" },
  { label: "Catégories", href: "#categories" },
  { label: "Le magasin", href: "#magasin" },
  { label: "Infos pratiques", href: "#infos" },
  { label: "Contact", href: "/contact" },
];

export const conceptCards: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Tout à 2€",
    text: "Chez LADATOU, tous les articles sont vendus à seulement 2€.",
    icon: Sparkles,
  },
  {
    title: "Pour toute la famille",
    text: "Maison, cuisine, enfants, décoration et cadeaux.",
    icon: Gift,
  },
  {
    title: "Des nouveautés régulières",
    text: "Le magasin se renouvelle souvent.",
    icon: Star,
  },
];

export const categories: {
  title: string;
  description: string;
  icon: LucideIcon;
  cardClass: string;
}[] = [
  {
    title: "Maison",
    description: "Découvrez notre sélection d'articles pour la maison",
    icon: Home,
    cardClass: "bg-[#FF6B35] text-white",
  },
  {
    title: "Cuisine",
    description: "Ustensiles et accessoires de cuisine",
    icon: ChefHat,
    cardClass: "bg-[linear-gradient(135deg,#7C3AED_0%,#8B5CF6_100%)] text-white",
  },
  {
    title: "Enfants",
    description: "Jouets et articles pour les petits",
    icon: Baby,
    cardClass: "bg-[#FF6B35] text-white",
  },
  {
    title: "Fournitures scolaires",
    description: "Tout pour la rentrée des classes",
    icon: NotebookPen,
    cardClass: "bg-[linear-gradient(135deg,#7C3AED_0%,#8B5CF6_100%)] text-white",
  },
  {
    title: "Décoration",
    description: "Embellissez votre intérieur",
    icon: Palette,
    cardClass: "bg-[#FF6B35] text-white",
  },
  {
    title: "Cadeaux",
    description: "Trouvez le cadeau parfait",
    icon: Gift,
    cardClass: "bg-[linear-gradient(135deg,#7C3AED_0%,#8B5CF6_100%)] text-white",
  },
];

export const floatingItems = [
  { className: "left-[6%] top-[14%]", label: "2€", size: "text-sm", tone: "bg-[#FF6B35] text-white" },
  { className: "left-[14%] top-[34%]", label: "2€", size: "text-xs", tone: "bg-[#7C3AED] text-white" },
  { className: "left-[10%] bottom-[18%]", label: "2€", size: "text-sm", tone: "bg-[#FF6B35] text-white" },
  { className: "left-[34%] top-[10%]", label: "2€", size: "text-xs", tone: "bg-[#7C3AED] text-white" },
  { className: "left-[42%] bottom-[22%]", label: "2€", size: "text-sm", tone: "bg-[#7C3AED] text-white" },
  { className: "left-[52%] top-[18%]", label: "2€", size: "text-xs", tone: "bg-[#FF6B35] text-white" },
  { className: "right-[8%] top-[12%]", label: "2€", size: "text-sm", tone: "bg-[#FF6B35] text-white" },
  { className: "right-[18%] top-[28%]", label: "2€", size: "text-xs", tone: "bg-[#7C3AED] text-white" },
  { className: "right-[12%] bottom-[18%]", label: "2€", size: "text-sm", tone: "bg-[#7C3AED] text-white" },
  { className: "right-[30%] bottom-[12%]", label: "2€", size: "text-xs", tone: "bg-[#FF6B35] text-white" },
  { className: "right-[36%] top-[42%]", label: "2€", size: "text-sm", tone: "bg-[#FF6B35] text-white" },
  { className: "left-[62%] top-[6%]", label: "2€", size: "text-xs", tone: "bg-[#7C3AED] text-white" },
];
