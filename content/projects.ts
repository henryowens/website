const projects = [
  {
    name: "Casa De Henry",
    url: "https://pinterest.com/casadehenryprints",
  },
  {
    name: "wensowenso.com",
    url: "https://wensowenso.com",
  },
  {
    name: "eucoincollector.com",
    url: "https://eucoincollector.com",
  },
];

export default projects;

export type Project = (typeof projects)[number];
