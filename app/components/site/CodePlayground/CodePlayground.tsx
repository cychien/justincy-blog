import type { SandpackPredefinedTemplate } from "@codesandbox/sandpack-react/types";
import { motion } from "framer-motion";
import * as React from "react";

import { cn, useHydrated } from "~/components/cotton/utils";

import { CodePlaygroundClient } from "./CodePlayground.client";

type CodePlaygroundProps = {
  template?: SandpackPredefinedTemplate;
  editorHeight?: number;
  previewHeight?: number;
};

function CodePlayground({
  template,
  editorHeight = 300,
  previewHeight = 300,
}: CodePlaygroundProps) {
  const [isPlaygroundReady, setIsPlaygroundReady] = React.useState(false);
  const isHyrated = useHydrated();
  const handlePlaygroundReady = React.useCallback(() => {
    setIsPlaygroundReady(true);
  }, []);

  return (
    <div style={{ height: `${editorHeight + previewHeight}px` }}>
      <div
        className={cn("h-full pt-4 text-sm font-medium text-gray-500", {
          hidden: isPlaygroundReady,
        })}
      >
        Loading code playground...
      </div>
      {isHyrated && (
        <motion.div
          className={cn({ "sr-only": !isPlaygroundReady })}
          initial={{ opacity: 0 }}
          animate={{ opacity: !isPlaygroundReady ? 0 : 1 }}
          transition={{ ease: "easeOut", duration: 0.3 }}
        >
          <CodePlaygroundClient
            template={template}
            editorHeight={editorHeight}
            previewHeight={previewHeight}
            onReady={handlePlaygroundReady}
          />
        </motion.div>
      )}
    </div>
  );
}

export { CodePlayground };
