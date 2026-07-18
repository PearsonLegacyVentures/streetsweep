export const company = {
  name: "ClearRoad Bahamas",
  tagline: "Clean roads. Clear sites. Verified service.",
  description: "Professional street sweeping for roads, commercial properties, construction sites and public spaces across New Providence.",
  url: "https://clearroadbahamas.com",
  phone: "+1 242 000 0000",
  whatsapp: "+1 242 000 0000",
  email: "operations@clearroadbahamas.com",
  address: "Address to be confirmed, Nassau, Bahamas",
  serviceArea: "New Providence, Bahamas",
  social: { linkedin: "#", instagram: "#" },
};

export const siteConfig = {
  ...company,
  nav: [
    { label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Industries", href: "/industries" },
    { label: "Equipment", href: "/equipment" }, { label: "How It Works", href: "/how-it-works" }, { label: "Track Record", href: "/track-record" },
    { label: "Procurement", href: "/procurement" }, { label: "About", href: "/about" },
  ],
};
