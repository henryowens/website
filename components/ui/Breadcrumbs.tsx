import Link from "next/link";
import { FC } from "react";

type Route = { name: string; href: string };

const Breadcrumbs: FC<{ path: Route[]; activePath: Route }> = ({
  path,
  activePath,
}) => (
  <div className="text-charcoal-200 text-xs">
    <p>
      /{" "}
      {path.map(({ name, href }, i) => (
        <>
          <Link {...{ href }} key={i} className="hover:underline">
            {name}
          </Link>
          {path.length < i && <span>/</span>}
        </>
      ))}{" "}
      / <span className="font-bold">{activePath.name}</span>
    </p>
  </div>
);

export default Breadcrumbs;
