/**
 * Site-wide content. Every editable fact lives here so it can later be
 * moved into a CMS (e.g. Sanity) without touching components.
 *
 * Items marked TODO need confirmation from the firm before launch.
 */

export const site = {
  name: "Will & Ash",
  legalName: "Will & Ash", // TODO: confirm registered name
  tagline: "Where legal mastery meets strategic innovation",
  description:
    "Will & Ash is a modern commercial law firm advising governments, financial institutions, corporations, entrepreneurs and private clients across Africa and beyond.",
  founded: 2019,
  url: "https://willandash.com", // TODO: confirm production domain
  email: "willandash@outlook.com",
  phone: null as string | null, // optional: set e.g. "+234 800 000 0000" to show it on Contact and in the footer
  hours: "Monday to Friday, 8:00 to 20:00",
  hoursShort: "Mon to Fri, 8:00 to 20:00",
  social: {
    instagram: "https://www.instagram.com/willandashllp/",
    google: "https://share.google/iZT9iTfrw6z0YhomY", // Google Business Profile
  },
  offices: [
    {
      city: "Lagos",
      address: ["MKO Abiola Gardens", "Alausa, Ikeja", "Lagos, Nigeria"],
      mapUrl: "https://maps.google.com/?q=MKO+Abiola+Gardens+Alausa+Ikeja+Lagos",
    },
    {
      city: "Abuja",
      address: ["Federal Housing Authority (FHA) Estate", "Guzape", "Abuja, Nigeria"],
      mapUrl: "https://maps.google.com/?q=FHA+Estate+Guzape+Abuja",
    },
  ],
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Contact", href: "/contact" },
] as const;

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Cookie Notice", href: "/cookies" },
] as const;

export const consultationHref = "/book";

/**
 * Online booking link (e.g. "https://cal.com/willandash/consultation").
 * Paste the firm's Cal.com link here and a "Choose a time" button appears on
 * the Book page. Leave it empty to show no button.
 */
export const bookingUrl = "";

/** Thin strip above the navigation bar. Keep it to one short line. */
export const announcement = {
  text: "Your first consultation is free and confidential. Book a time",
  href: "/book",
};
