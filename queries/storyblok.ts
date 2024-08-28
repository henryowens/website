import { createQueryKeys } from "@lukemorales/query-key-factory";
import type { ISbStoriesParams } from "storyblok-js-client";

export type ISbStoriesParamsGeneric<C extends string> = {
  content_type?: C;
} & ISbStoriesParams;

export default createQueryKeys("storyblok", {
  story: <C extends string = string>(
    slug: MaybeRef<string>,
    params: MaybeRef<ISbStoriesParamsGeneric<C>>
  ) => {
    const storyblokApiInstance = useStoryblokApi();

    return {
      queryKey: ["story", slug, params],
      queryFn: async () => {
        const { data } = await storyblokApiInstance.get(
          `cdn/stories/${unref(slug)}`,
          unref(params),
        );

        return data.stories[0];
      },
    };
  },
});
