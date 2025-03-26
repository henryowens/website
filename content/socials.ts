const socials = [
  {
    icon: "pixelarticons:github",
    url: "https://www.github.com/henryowens",
    label: "A link to my GitHub profile",
  },
  {
    icon: "pixelarticons:briefcase-account",
    url: "https://www.linkedin.com/in/henrytomowens",
    label: "A link to my LinkedIn profile",
  },
];

export default socials;

export type Social = (typeof socials)[number];
