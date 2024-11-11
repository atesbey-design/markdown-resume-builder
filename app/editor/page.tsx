"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, FileText, Maximize2 } from "lucide-react";
import { MarkdownEditor } from "@/components/markdown-editor";
import { ResumePreview } from "@/components/resume-preview";
import { themes as resumeThemes } from "@/lib/themes";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const defaultMarkdown = `# John Doe
## Contact
- Email: john@example.com
- Phone: (123) 456-7890
- LinkedIn: linkedin.com/in/johndoe

## Summary
Experienced software developer with a passion for creating efficient and scalable solutions.

## Experience
**Senior Software Engineer at Tech Corp**
*2020 - Present*
- Led development of microservices architecture
- Mentored junior developers
- Improved system performance by 40%

**Software Developer at StartUp Inc**
*2018 - 2020*
- Developed full-stack web applications
- Implemented CI/CD pipelines
- Reduced deployment time by 60%

## Education
**Bachelor of Science in Computer Science**
*University of Technology | 2014 - 2018*
- GPA: 3.8/4.0
- Dean's List: All semesters

## Skills
- Languages: JavaScript, TypeScript, Python
- Frameworks: React, Node.js, Express
- Tools: Git, Docker, AWS
- Soft Skills: Leadership, Communication, Problem-solving`;

export default function EditorPage() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);
  const [selectedTheme, setSelectedTheme] = useState("modern");
  const [isPreviewExpanded, setIsPreviewExpanded] = useState(false);

  const handleExport = async () => {
    const element = document.querySelector('.resume-preview');
    if (!element) return;

    try {
      const canvas = await html2canvas(element as HTMLElement, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width, canvas.height]
      });

      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save('resume.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  const togglePreview = () => {
    setIsPreviewExpanded(!isPreviewExpanded);
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="transition-all duration-300 hover:scale-105">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
              Resume Editor
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Create your professional resume with our beautiful themes
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="relative transition-transform duration-300 hover:scale-105">
              <select
                className="appearance-none bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg pl-4 pr-10 py-2 text-gray-900 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300"
                value={selectedTheme}
                onChange={(e) => setSelectedTheme(e.target.value)}
                style={{
                  WebkitAppearance: "none",
                  MozAppearance: "none"
                }}
              >
                {Object.entries(resumeThemes).map(([id, theme]) => (
                  <option key={id} value={id}>
                    {theme.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <Button 
              onClick={handleExport}
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Download className="w-4 h-4" />
              Export PDF
            </Button>
          </div>
        </div>

        <div className={`grid ${isPreviewExpanded ? '' : 'md:grid-cols-2'} gap-6 transition-all duration-500 ease-in-out`}>
          <div className={`bg-white dark:bg-gray-800 h-full overflow-hidden rounded-lg shadow-lg p-3 ${isPreviewExpanded ? 'hidden' : ''} transition-all duration-300 hover:shadow-xl`}>
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-5 h-5 text-gray-900 dark:text-white transition-transform duration-300 hover:scale-110" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Markdown Editor
              </h2>
            </div>
            <MarkdownEditor value={markdown} onChange={setMarkdown} />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 h-full overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-gray-900 dark:text-white transition-transform duration-300 hover:scale-110" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Preview
                </h2>
              </div>
              <Button 
                variant="ghost"
                onClick={togglePreview}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Maximize2 className="w-4 h-4 mr-2 transition-transform duration-300" />
                {isPreviewExpanded ? 'Küçült' : 'Büyült'}
              </Button>
            </div>
            <div className="flex justify-center w-full h-full resume-preview transition-transform duration-500 ease-in-out">
              <ResumePreview 
                markdown={markdown} 
                theme={resumeThemes[selectedTheme as keyof typeof resumeThemes]}
                className={`${resumeThemes[selectedTheme as keyof typeof resumeThemes].className} transition-all duration-300`}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}