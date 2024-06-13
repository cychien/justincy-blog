/** @type {import('@remix-run/dev').AppConfig} */
export default {
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: ["**/.*"],
  server: "./server.ts",
  serverBuildPath: "functions/[[path]].js",
  serverConditions: ["worker"],
  serverDependenciesToBundle: "all",
  serverMainFields: ["browser", "module", "main"],
  serverMinify: true,
  serverModuleFormat: "esm",
  serverPlatform: "neutral",
  tailwind: true,
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  future: {
    v2_dev: true,
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
  mdx: async () => {
    const [rehypeSlug, rehypeAutolinkHeadings, rehypeWrap] = await Promise.all([
      import("rehype-slug").then((mod) => mod.default),
      import("rehype-autolink-headings").then((mod) => mod.default),
      import("rehype-wrap").then((mod) => mod.default),
    ]);

    const rehypeMdxCodeMeta = async () => {
      const { visit } = await import("unist-util-visit");

      return () => {
        return (tree) => {
          visit(tree, "element", visitor);
        };

        function visitor(node) {
          if (node.tagName === "code" && node.data && node.data.meta) {
            const blocks = node.data.meta.split(" ");

            node.properties = blocks.reduce((props, block) => {
              const [prop, value] = block.split("=");

              if (typeof value === "undefined") {
                props.line = prop;

                return props;
              }

              props[prop] = value;

              return props;
            }, node.properties);
          }
        }
      };
    };

    return {
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
        await rehypeMdxCodeMeta(),
        [rehypeWrap, { wrapper: "div.main-content" }],
      ],
    };
  },
};
