import {
  TabsContentPrimitive,
  TabsListPrimitive,
  TabsPrimitive,
  TabsTriggerPrimitive,
  useTabs,
} from "@cychien/cotton-ui";
import { useLocation } from "@remix-run/react";
import { motion } from "framer-motion";
import * as React from "react";

import { cn } from "~/components/cotton/utils";

const languages = ["JavaScript", "Java", "Clojure", "Go", "Python"] as const;

function AnimatedTabs() {
  const defaultValue = languages[0];
  const { pathname, search } = useLocation();
  const tabsProps = useTabs({
    id: "animated-tabs",
    url: pathname + search,
    defaultValue,
  });

  return (
    <Tabs {...tabsProps}>
      <TabsList>
        {languages.map((lang) => (
          <TabsTrigger
            key={lang}
            value={lang}
            className="relative text-gray-900"
          >
            {lang}
            {tabsProps.value === lang && (
              <motion.div
                layoutId="pill"
                className="absolute inset-0 z-10 bg-white mix-blend-difference"
                style={{ borderRadius: 9999 }}
                transition={{
                  type: "spring",
                  duration: 0.6,
                  bounce: 0.1,
                }}
              />
            )}
          </TabsTrigger>
        ))}
      </TabsList>
      {languages.map((lang) => (
        <TabsContent key={lang} value={lang} />
      ))}
    </Tabs>
  );
}

interface TabsProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive> {}
type TabsRef = React.ElementRef<typeof TabsPrimitive>;
const Tabs = React.forwardRef<TabsRef, TabsProps>(
  ({ className, ...props }, ref) => {
    return <TabsPrimitive ref={ref} className={className} {...props} />;
  }
);
Tabs.displayName = "Tabs";

interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsListPrimitive> {}
type TabsListRef = React.ElementRef<typeof TabsListPrimitive>;
const TabsList = React.forwardRef<TabsListRef, TabsListProps>(
  ({ className, ...props }, ref) => {
    return (
      <TabsListPrimitive
        ref={ref}
        className={cn("relative flex items-center space-x-2", className)}
        {...props}
      />
    );
  }
);
TabsList.displayName = "TabsList";

interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsTriggerPrimitive> {}
type TabsTriggerRef = React.ElementRef<typeof TabsTriggerPrimitive>;
const TabsTrigger = React.forwardRef<TabsTriggerRef, TabsTriggerProps>(
  ({ className, ...props }, ref) => {
    return (
      <TabsTriggerPrimitive
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center whitespace-nowrap rounded px-3 py-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-200 disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);
TabsTrigger.displayName = "TabsTrigger";

interface TabsContentProps
  extends React.ComponentPropsWithoutRef<typeof TabsContentPrimitive> {}
type TabsContentRef = React.ElementRef<typeof TabsContentPrimitive>;
const TabsContent = React.forwardRef<TabsContentRef, TabsContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <TabsContentPrimitive
        ref={ref}
        className={cn(
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-200 focus-visible:ring-offset-2",
          className
        )}
        {...props}
      />
    );
  }
);
TabsContent.displayName = "TabsContent";

export { AnimatedTabs };
