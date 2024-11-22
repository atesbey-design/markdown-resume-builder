"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Bold, Italic, List, Heading, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, Star, Code, FileText, Download, Maximize2, Linkedin } from "lucide-react";
import { useState } from "react";

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export function MarkdownEditor({ value, onChange }: MarkdownEditorProps) {
  const [showIconsDropdown, setShowIconsDropdown] = useState(false);

  const icons = {
    mail: Mail,
    phone: Phone,
    mapPin: MapPin,
    briefcase: Briefcase,
    graduationCap: GraduationCap,
    award: Award,
    star: Star,
    code: Code,
    fileText: FileText,
    download: Download,
    maximize2: Maximize2,
    linkedin: Linkedin,
    bold: Bold,
    italic: Italic,
    list: List,
    heading: Heading
  };

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

  const insertIcon = (iconName: string) => {
    insertMarkdown(`${iconName} `);
    setShowIconsDropdown(false);
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

        <div className="relative">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowIconsDropdown(!showIconsDropdown)}
            title="Insert Icon"
          >
            <FileText className="w-4 h-4" />
          </Button>
          
          {showIconsDropdown && (
            <div className="absolute z-10 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="p-2 grid grid-cols-3 gap-1">
                {Object.entries(icons).map(([name, IconComponent]) => (
                  <button
                    key={name}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md flex items-center justify-center"
                    onClick={() => insertIcon(`📎`)}
                    title={name}
                  >
                    <IconComponent className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
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