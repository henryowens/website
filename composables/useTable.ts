export default <D extends Record<string, any>>(
  config: MaybeRefOrGetter<{
    data: D[];
    columns: {
      key: string;
      label: string;
    }[];
  }>
) => config;
