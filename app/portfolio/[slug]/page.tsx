import { GetStaticPropsContext } from "next";
import { FC } from "react";

import { projectService } from "@/cms";
import { ErrorPage } from "@/components/pages";
import { Breadcrumbs, Svg } from "@/components/ui";

const ProjectPage: FC<GetStaticPropsContext> = ({ params }) => {
  if (!params?.slug) return <ErrorPage message="Project not found" />;

  const { byId, mapTechnologyToSvg } = projectService;
  const project = byId(params.slug.toString());

  const technologies = [
    {
      label: "Frontend",
      tech: project.frontendTech,
    },
    {
      label: "Backend",
      tech: project.backendTech,
    },
    {
      label: "DevOps",
      tech: project.devOpsTech,
    },
  ];

  return (
    <main className="w-full max-w-4xl mx-auto">
      <Breadcrumbs
        activePath={{ href: `/projects/${project.slug}`, name: project.slug }}
        path={[{ href: "/projects", name: "projects" }]}
      />

      <div className="flex justify-between gap-8">
        <div className="flex flex-col gap-4">
          <h1>{project.title}</h1>
          <p className="text-sm text-charcoal-200">
            Fusce dolor tortor, venenatis a nisl vel, viverra auctor urna.
            Aenean vestibulum sagittis orci sit amet fermentum. Cras egestas
            turpis ipsum, a varius massa placerat eu. Phasellus at auctor est.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {technologies.map(({ tech, label }, i) => (
            <div key={i}>
              <h2 className="text-base font-bold text-charcoal-200">{label}</h2>
              <div className="flex gap-4">
                {tech.map(({ value }, j) => {
                  const svgPath = mapTechnologyToSvg(value);
                  if (svgPath)
                    return (
                      <div className="svg-container">
                        <Svg key={j} src={svgPath} />
                      </div>
                    );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
