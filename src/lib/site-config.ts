export const company = {
  name: "StreetSweeper Bahamas",
  tagline: "Mechanical street sweeping for Nassau properties and work sites.",
  description: "Street sweeping in Nassau and New Providence for commercial properties, construction sites, communities, roads and event areas.",
  url: "https://streetsweep.pages.dev",
  phone: "",
  whatsapp: "",
  email: "",
  address: "Nassau, New Providence, Bahamas",
  serviceArea: "Nassau and New Providence, Bahamas",
  social: { linkedin: "#", instagram: "#" },
};

export const siteConfig = {
  ...company,
  nav: [
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Equipment", href: "/equipment" },
    { label: "About", href: "/about" },
  ],
};