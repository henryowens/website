const socials = [
  {
    icon: "uil:github",
    url: "https://www.github.com/henryowens",
  },
  {
    icon: "uil:linkedin",
    url: "https://www.linkedin.com/in/henrytomowens",
  },
];

export default socials;

export type Social = (typeof socials)[number];
