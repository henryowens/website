const projects = [
  {
    name: "Casa De Henry",
    url: "https://nl.pinterest.com/casadehenryprints/_pins/",
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
