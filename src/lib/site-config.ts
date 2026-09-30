export const company = {
  name: "StreetSweeper Bahamas",
  tagline: "Mechanical street sweeping for Nassau properties and work sites.",
  description: "Street sweeping in Nassau and New Providence for commercial properties, construction sites, communities, roads and event areas.",
  url: "https://clearroadbahamas.com",
  phone: "+1 242 000 0000",
  whatsapp: "+1 242 000 0000",
  email: "operations@clearroadbahamas.com",
  address: "Address to be confirmed, Nassau, Bahamas",
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
