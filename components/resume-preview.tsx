"use client";

import { Theme } from "@/lib/themes";
import { ReactNode } from "react";
import ReactMarkdown, { Components } from "react-markdown";
import { HTMLProps } from "react";

interface ResumePreviewProps {
  markdown: string;
  theme: Theme;
  className?: string;
}

export function ResumePreview({ markdown, theme, className }: ResumePreviewProps) {
  const components: Partial<Components> = {
    h1: ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => (
      <h1 {...props} className={`${theme.headingClass} ${theme.sectionClass} text-left`}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => (
      <h2 {...props} className={`${theme.subHeadingClass} ${theme.sectionClass} text-left`}>
        {children}
      </h2>
    ),
    p: ({ children, ...props }: HTMLProps<HTMLParagraphElement>) => (
      <p {...props} className={`${theme.textClass} text-left`}>
        {children}
      </p>
    ),
    ul: ({ children, ...props }: HTMLProps<HTMLUListElement>) => (
      <ul {...props} className={`${theme.listClass} text-left`}>
        {children}
      </ul>
    ),
    li: ({ children, ...props }: HTMLProps<HTMLLIElement>) => (
      <li {...props} className={`${theme.textClass} text-left`}>
        {children}
      </li>
    ),
    strong: ({ children, ...props }: HTMLProps<HTMLElement>) => (
      <strong {...props} className="font-bold text-left">
        {children}
      </strong>
    ),
    em: ({ children, ...props }: HTMLProps<HTMLElement>) => (
      <em {...props} className={`${theme.dateClass} text-left`}>
        {children}
      </em>
    ),
  };

  return (
    <div className={`w-full min-h-[600px] h-full  rounded-lg shadow-lg overflow-auto ${className || theme.className}`}>
      <div className="prose prose-sm w-full h-full text-left">
        <ReactMarkdown components={components}>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}