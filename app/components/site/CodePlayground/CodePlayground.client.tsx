import type {
  SandpackFiles,
  SandpackInternalOptions,
  SandpackPredefinedTemplate,
  SandpackSetup,
} from "@codesandbox/sandpack-react";
import {
  SandpackCodeEditor,
  SandpackConsole,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  useSandpack,
} from "@codesandbox/sandpack-react";
import * as React from "react";

import { cn } from "~/components/cotton/utils";

type CodePlaygroundClientProps = {
  template?: SandpackPredefinedTemplate;
  customSetup?: SandpackSetup;
  options?: SandpackInternalOptions;
  files?: SandpackFiles;
  editorHeight: number;
  previewHeight: number;
  onReady?: () => void;
};

function CodePlaygroundClient({
  template,
  customSetup,
  options,
  files,
  editorHeight,
  previewHeight,
  onReady,
}: CodePlaygroundClientProps) {
  return (
    <SandpackProvider
      template={template}
      customSetup={customSetup}
      options={options}
      files={files}
      theme={{
        colors: {
          surface1: "#1B2B34",
          surface2: "#343D46",
          surface3: "#4F5B66",
          clickable: "#ffffff",
          base: "#D8DEE9",
          disabled: "#A7ADBA",
          hover: "#D8DEE9",
          accent: "#61AFEF",
          error: "#EC5f67",
          errorSurface: "#343D46",
        },
        syntax: {
          plain: "#D8DEE9",
          comment: {
            color: "#65737E",
            fontStyle: "italic",
          },
          keyword: "#C594C5",
          tag: "#EC5f67",
          punctuation: "#65737E",
          definition: "#61AFEF",
          property: "#99C794",
          static: "#A7ADBA",
          string: "#A3BE8C",
        },
        font: {
          body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          mono: '"Operator Mono", "Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
          size: "14px",
          lineHeight: "24px",
        },
      }}
    >
      <CodePlaygroundClientContent
        editorHeight={editorHeight}
        previewHeight={previewHeight}
        onReady={onReady}
      />
    </SandpackProvider>
  );
}

type CodePlaygroundClientContentProps = {
  editorHeight: number;
  previewHeight: number;
  onReady?: () => void;
};

function CodePlaygroundClientContent({
  editorHeight,
  previewHeight,
  onReady,
}: CodePlaygroundClientContentProps) {
  const { listen } = useSandpack();
  const [display, setDisplay] = React.useState("result");

  React.useEffect(() => {
    const stopListening = listen((msg) => {
      if (msg.type === "done") {
        if (onReady) {
          onReady();
        }
      }
    });

    return () => {
      stopListening();
    };
  }, [listen, onReady]);

  return (
    <SandpackLayout className="!block !rounded-lg">
      <div className="border border-[#343D46]">
        <header className="bg-[#343D46] px-3 py-2 text-[#e8ecf1]">
          Code Playground
        </header>
        <SandpackCodeEditor style={{ height: `${editorHeight}px` }} />
        <div>
          <div className="flex space-x-4 border-b border-t border-[#404a54] bg-[#1B2B34] px-4 py-2.5">
            <button
              className={cn(
                display === "result" ? "text-white" : "text-[#717681]"
              )}
              onClick={() => {
                setDisplay("result");
              }}
            >
              Result
            </button>
            <button
              className={cn(
                display === "console" ? "text-white" : "text-[#717681]"
              )}
              onClick={() => {
                setDisplay("console");
              }}
            >
              Console
            </button>
          </div>
          <SandpackPreview
            className={cn("p-4 [&>*]:rounded-md", {
              "!hidden": display !== "result",
            })}
            style={{ height: `${previewHeight}px` }}
            showOpenInCodeSandbox={false}
          />
          <SandpackConsole
            style={{ height: `${previewHeight}px` }}
            className={cn("p-4 [&>*]:rounded-md", {
              "!hidden": display !== "console",
            })}
          />
        </div>
      </div>
    </SandpackLayout>
  );
}

export { CodePlaygroundClient };
