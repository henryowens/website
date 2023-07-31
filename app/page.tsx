import { Svg } from "@/components/ui";
import Link from "next/link";
import { FC } from "react";

import "@/styles/pages/IndexPage.scss";
import { PageWrapper } from "@/components/ui/page-wrapper";

const links = [
  // {
  //   name: "posts",
  //   href: "/posts",
  // },
  {
    name: "portfolio",
    href: "/portfolio",
  },
  {
    name: "contact",
    href: "/contact",
  },
];

const technologies = [
  "vuejs",
  "react",
  "tailwind",
  "nodejs",
  "graphql",
  "mongodb",
];

const socials = [
  { name: "github", link: "https://www.github.com/henryowens" },
  { name: "linkedin", link: "https://www.linkedin.com/in/henrytomowens" },
];

const HomePage: FC = () => (
  <PageWrapper className="index-page">
    <div className="content-container">
      <div className="heading">
        <div>
          <h1 className="title">Henry Owens</h1>
          <h2 className="subtitle">Web Developer</h2>
        </div>
        <div className="technologies">
          {technologies.map((tech, key) => (
            <Svg key={key} src={`/icons/${tech}.svg`} width={"28px"} />
          ))}
        </div>
      </div>
      <div className="links">
        {links.map(({ href, name }, k) => (
          <Link key={k} className="link" href={href}>
            {name}
          </Link>
        ))}
      </div>
      <div className="socials" style={{ minHeight: "130px" }}>
        {socials.map((social, key) => (
          <a href={social.link} key={key} target="_blank">
            <Svg
              className="social"
              src={`/icons/${social.name}.svg`}
              width={"20px"}
            />
          </a>
        ))}
      </div>
    </div>
  </PageWrapper>
);

export default HomePage;
