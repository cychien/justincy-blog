import * as React from "react";

import {
  TabsContentPrimitive,
  TabsListPrimitive,
  TabsPrimitive,
  TabsTriggerPrimitive,
} from "~/components/cotton/tabs/TabsPrimitive";
import type { CottonComponent } from "~/components/cotton/types";
import { cn } from "~/components/cotton/utils";

interface TabsProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive>,
    CottonComponent {}
type TabsRef = React.ElementRef<typeof TabsPrimitive>;

const Tabs = React.forwardRef<TabsRef, TabsProps>(
  ({ className, ...props }, ref) => {
    return <TabsPrimitive ref={ref} className={className} {...props} />;
  }
);
Tabs.displayName = "Tabs";

interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsListPrimitive>,
    CottonComponent {}
type TabsListRef = React.ElementRef<typeof TabsListPrimitive>;

const TabsList = React.forwardRef<TabsListRef, TabsListProps>(
  ({ className, ...props }, ref) => {
    return (
      <TabsListPrimitive
        ref={ref}
        className={cn("inline-flex items-center space-x-2", className)}
        {...props}
      />
    );
  }
);
TabsList.displayName = "TabsList";

interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsTriggerPrimitive>,
    CottonComponent {}
type TabsTriggerRef = React.ElementRef<typeof TabsTriggerPrimitive>;

const TabsTrigger = React.forwardRef<TabsTriggerRef, TabsTriggerProps>(
  ({ className, ...props }, ref) => {
    return (
      <TabsTriggerPrimitive
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded px-3 py-2 text-sm font-medium text-gray-500 transition-all hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-200 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-gray-100 data-[state=active]:text-gray-700",
          className
        )}
        {...props}
      />
    );
  }
);
TabsTrigger.displayName = "TabsTrigger";

interface TabsContentProps
  extends React.ComponentPropsWithoutRef<typeof TabsContentPrimitive>,
    CottonComponent {}
type TabsContentRef = React.ElementRef<typeof TabsContentPrimitive>;

const TabsContent = React.forwardRef<TabsContentRef, TabsContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <TabsContentPrimitive
        ref={ref}
        className={cn(
          "mt-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-200 focus-visible:ring-offset-2",
          className
        )}
        {...props}
      />
    );
  }
);
TabsContent.displayName = "TabsContent";

export { Tabs, TabsContent, TabsList, TabsTrigger };
