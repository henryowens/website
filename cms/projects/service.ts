import { getDocumentBySlug } from "outstatic/server";
import { Project } from "./models";
import { BASE_SVG_PATH, TECHNOLOGY_SVG_MAP } from "./constants";

const projectService = {
  byId: (slug: string) => {
    const result: any = getDocumentBySlug("projects", slug, [
      "title",
      "slug",
      "coverImage",
      "author",
      "content",
      "publishedAt",
      "frontendTech",
      "backendTech",
      "devOpsTech",
    ]);

    return result as Project;
  },
  mapTechnologyToSvg: (technology: string) =>
    technology in TECHNOLOGY_SVG_MAP
      ? `${BASE_SVG_PATH}${TECHNOLOGY_SVG_MAP[technology]}`
      : undefined,
};

export default projectService;
