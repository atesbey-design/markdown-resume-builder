"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, FileText, Maximize2, Briefcase, GraduationCap, Code, Mail, Phone, Linkedin, MapPin, Award, Star } from "lucide-react";
import { MarkdownEditor } from "@/components/markdown-editor";
import { ResumePreview } from "@/components/resume-preview";
import { themes as resumeThemes } from "@/lib/themes";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const defaultMarkdown = `# 👨‍💻 John Doe

## 📱 Contact
- 📧 Email: john@example.com  
- 📞 Phone: (123) 456-7890
- 🔗 LinkedIn: linkedin.com/in/johndoe
- 📍 Location: New York, NY

## ✨ Summary
Passionate and innovative software developer with expertise in creating efficient and scalable solutions. Strong problem-solving abilities and a track record of delivering high-impact projects.

## 💼 Experience
**🚀 Senior Software Engineer at Tech Corp**
*2020 - Present*
- 🎯 Led development of cutting-edge microservices architecture
- 👥 Mentored junior developers and fostered team growth
- 📈 Improved system performance by 40% through optimization

**💻 Software Developer at StartUp Inc**
*2018 - 2020*
- ⚡ Developed robust full-stack web applications
- 🔄 Implemented automated CI/CD pipelines
- ⚙️ Reduced deployment time by 60% through process improvements

## 🎓 Education
**🏛️ Bachelor of Science in Computer Science**
*University of Technology | 2014 - 2018*
- 🏆 GPA: 3.8/4.0
- 🌟 Dean's List: All semesters
- 📚 Research Assistant in AI Lab

## 🛠️ Skills
- 💻 Languages: JavaScript, TypeScript, Python
- ⚛️ Frameworks: React, Node.js, Express
- 🔧 Tools: Git, Docker, AWS, Kubernetes
- 🤝 Soft Skills: Leadership, Communication, Problem-solving

## 🏆 Achievements
- 🥇 Best Innovation Award 2022
- 📜 AWS Certified Solutions Architect
- 🌟 3x Employee of the Month`;

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
    <main className="min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="transition-all duration-300 ">
            <div className="flex items-center gap-3 mb-2">
              <Star className="w-8 h-8 text-black dark:text-white" />
              <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
                Resume Editor
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
              <Award className="w-5 h-5 text-black dark:text-white" />
              Create your professional resume with our beautiful themes
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="relative transition-transform duration-300 ">
              <select
                className="appearance-none bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg pl-4 pr-10 py-2 text-black dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
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
                <svg className="h-4 w-4 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <Button 
              onClick={handleExport}
              className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 "
            >
              <Download className="w-4 h-4" />
              Export PDF
            </Button>
          </div>
        </div>

        <div className={`grid ${isPreviewExpanded ? '' : 'md:grid-cols-2'} gap-6 transition-all duration-500 ease-in-out`}>
          <div className={`bg-white dark:bg-black h-full overflow-hidden rounded-lg shadow-lg p-6 ${isPreviewExpanded ? 'hidden' : ''} transition-all duration-300 hover:shadow-xl border border-gray-200 dark:border-gray-800`}>
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-6 h-6 text-black dark:text-white" />
              <h2 className="text-xl font-semibold text-black dark:text-white">
                Markdown Editor
              </h2>
            </div>
            <MarkdownEditor value={markdown} onChange={setMarkdown} />
          </div>

          <div className="bg-white dark:bg-black rounded-lg shadow-lg p-6 h-full overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-black dark:text-white" />
                <h2 className="text-xl font-semibold text-black dark:text-white">
                  Preview
                </h2>
              </div>
              <Button 
                variant="ghost"
                onClick={togglePreview}
                className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-300 hover:scale-110"
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