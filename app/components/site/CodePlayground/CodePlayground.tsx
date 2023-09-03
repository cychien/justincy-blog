import type {
  SandpackFiles,
  SandpackInternalOptions,
  SandpackPredefinedTemplate,
  SandpackSetup,
} from "@codesandbox/sandpack-react/types";
import { motion } from "framer-motion";
import * as React from "react";

import { cn, useHydrated } from "~/utils";

import { CodePlaygroundClient } from "./CodePlayground.client";

type CodePlaygroundProps = {
  template?: SandpackPredefinedTemplate;
  customSetup?: SandpackSetup;
  options?: SandpackInternalOptions;
  files?: SandpackFiles;
  editorHeight?: number;
  previewHeight?: number;
};

function CodePlayground({
  template,
  customSetup,
  options,
  files,
  editorHeight = 300,
  previewHeight = 300,
}: CodePlaygroundProps) {
  const [isPlaygroundReady, setIsPlaygroundReady] = React.useState(false);
  const isHyrated = useHydrated();
  const handlePlaygroundReady = React.useCallback(() => {
    setIsPlaygroundReady(true);
  }, []);

  return (
    // plus header, tabs, border etc.
    <div style={{ height: `${editorHeight + previewHeight + 75}px` }}>
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
            customSetup={customSetup}
            options={options}
            files={files}
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
