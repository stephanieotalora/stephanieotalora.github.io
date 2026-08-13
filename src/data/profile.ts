export const profile = {
  name: "Stephanie Otálora",
  photo: "/stephanie.png",
  initials: "SO",
  title: "Psicóloga y escritora",
  tagline: "Sigueme en mis redes sociales",
  links: [
    { label: "Blog", href: "/blog", external: false },
    {
      label: "Instagram",
      href: "https://www.instagram.com/stephanie.otalora/",
      external: true,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/Stephanieotalora",
      external: true,
    },
    {
      label: "Substack",
      href: "https://substack.com/@stephanieotalora",
      external: true,
    }
  ],
} as const;
