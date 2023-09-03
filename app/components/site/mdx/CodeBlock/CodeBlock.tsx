import type { Language } from "prism-react-renderer";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/oceanicNext";

import { cn } from "~/utils";

type addPrefix<TKey, TPrefix extends string> = TKey extends Language
  ? `${TPrefix}${TKey}`
  : never;

export default function CodeBlock(preProps: {
  children: {
    props: {
      children: {
        props: {
          children: string;
          className: addPrefix<Language, "language-">;
          line: string;
        };
      };
    };
  };
}) {
  const { children, className } = preProps.children.props.children.props;

  const language =
    (className?.replace(/language-/, "") as Language) ?? "plain text";

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.trim()}
      language={language}
    >
      {({ className, style, tokens, getTokenProps }) => (
        <pre
          className={cn("rounded-lg font-mono font-medium", className)}
          style={style}
        >
          <code className="inline-block text-[1em]">
            {tokens.map((line, i) => {
              return (
                <div key={i}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              );
            })}
          </code>
        </pre>
      )}
    </Highlight>
  );
}
