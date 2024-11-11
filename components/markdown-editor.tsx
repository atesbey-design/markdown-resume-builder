"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Bold, Italic, List, Heading } from "lucide-react";

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export function MarkdownEditor({ value, onChange }: MarkdownEditorProps) {
  const insertMarkdown = (prefix: string, suffix: string = "") => {
    const textarea = document.querySelector("textarea");
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    
    const newText = value.substring(0, start) + 
      prefix + selectedText + suffix +
      value.substring(end);
    
    onChange(newText);
    
    // Reset cursor position
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + prefix.length,
        end + prefix.length
      );
    }, 0);
  };

  return (
    <div className="space-y-2 h-full">
      <div className="flex gap-2 pb-2 border-b">
        <Button
          variant="outline"
          size="sm"
          onClick={() => insertMarkdown("**", "**")}
          title="Bold (Ctrl+B)"
        >
          <Bold className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => insertMarkdown("*", "*")}
          title="Italic (Ctrl+I)"
        >
          <Italic className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => insertMarkdown("# ")}
          title="Heading"
        >
          <Heading className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => insertMarkdown("- ")}
          title="List"
        >
          <List className="w-4 h-4" />
        </Button>
      </div>

      <Textarea
      
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-[600px] h-full font-mono text-base leading-relaxed resize-none focus:ring-2 focus:ring-purple-500"
        placeholder="Write your resume in Markdown...

Example:
# John Doe
**Email:** john@example.com
**Phone:** (555) 123-4567

## Experience
**Senior Developer** at TechCorp
*2020 - Present*
- Led development of key features
- Managed team of 5 developers"
      />
    </div>
  );
}