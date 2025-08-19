export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/classes", label: "Classes" },
  { href: "/showcases", label: "Student showcases" },
  { href: "/self-tapes", label: "Self-tapes" },
  { href: "/building-your-brand", label: "Building your brand" },
  { href: "/public-speaking", label: "Public speaking" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export const footerLinks: NavLink[] = [];
