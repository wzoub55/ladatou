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
  // Côté gauche (logo) — plus dense
  { className: "left-[4%] top-[10%]", label: "2€", size: "text-sm", tone: "bg-[#FF6B35] text-white" },
  { className: "left-[12%] top-[30%]", label: "2€", size: "text-xs", tone: "bg-[#7C3AED] text-white" },
  { className: "left-[8%] bottom-[16%]", label: "2€", size: "text-sm", tone: "bg-[#FF6B35] text-white" },
  { className: "left-[22%] top-[8%]", label: "2€", size: "text-xs", tone: "bg-[#7C3AED] text-white" },
  { className: "left-[18%] bottom-[28%]", label: "2€", size: "text-sm", tone: "bg-[#FF6B35] text-white" },
  { className: "left-[30%] top-[22%]", label: "2€", size: "text-xs", tone: "bg-[#7C3AED] text-white" },
  { className: "left-[36%] bottom-[10%]", label: "2€", size: "text-sm", tone: "bg-[#7C3AED] text-white" },
  { className: "left-[26%] top-[48%]", label: "2€", size: "text-xs", tone: "bg-[#FF6B35] text-white" },
  { className: "left-[40%] top-[12%]", label: "2€", size: "text-sm", tone: "bg-[#FF6B35] text-white" },
  { className: "left-[6%] top-[52%]", label: "2€", size: "text-xs", tone: "bg-[#7C3AED] text-white" },
  // Côté droit (texte) — plus léger
  { className: "right-[8%] top-[10%]", label: "2€", size: "text-xs", tone: "bg-[#FF6B35] text-white" },
  { className: "right-[14%] bottom-[14%]", label: "2€", size: "text-xs", tone: "bg-[#7C3AED] text-white" },
  { className: "right-[4%] bottom-[40%]", label: "2€", size: "text-xs", tone: "bg-[#FF6B35] text-white" },
];
