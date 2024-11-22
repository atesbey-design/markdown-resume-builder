import { Card } from "@/components/ui/card";

interface Template {
  name: string;
  markdown: string;
  preview: JSX.Element;
}

const templates: Template[] = [
  {
    name: "Professional",
    markdown: `# John Doe
## Contact
📧 john@example.com | 📱 (555) 123-4567 | 🔗 linkedin.com/in/johndoe | 📍 New York, USA

## Professional Summary
Senior software engineer with 8+ years of experience in full-stack development and team leadership.

## Experience
**Senior Software Engineer | Tech Corp**
*2020 - Present*
- ⭐ Led migration to microservices architecture, improving system performance by 40%
- 👥 Managed team of 10 developers across multiple projects
- 🚀 Developed e-commerce platform that increased annual revenue by 35%`,
    preview: (
      <div className="space-y-4 p-6 bg-white dark:bg-gray-800 rounded-lg">
        <h1 className="text-2xl font-bold">John Doe</h1>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <span>📧 john@example.com</span>
          <span>📱 (555) 123-4567</span>
        </div>
        <div className="border-t pt-4">
          <h2 className="font-semibold mb-2">Experience</h2>
          <div className="text-sm">
            <p className="font-medium">Senior Software Engineer | Tech Corp</p>
            <p className="italic text-gray-600 dark:text-gray-400">2020 - Present</p>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Minimal",
    markdown: `# Sarah Smith
Software Developer

## Skills
JavaScript, React, Node.js, Python

## Experience
### Frontend Developer - WebTech Inc
2019 - Present
- Developed responsive web applications
- Improved site performance by 25%
- Implemented new design system`,
    preview: (
      <div className="space-y-4 p-6 bg-white dark:bg-gray-800 rounded-lg">
        <h1 className="text-2xl font-bold">Sarah Smith</h1>
        <p className="text-gray-600 dark:text-gray-400">Software Developer</p>
        <div className="border-t pt-4">
          <h2 className="font-semibold mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">JavaScript</span>
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">React</span>
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Node.js</span>
          </div>
        </div>
      </div>
    )
  }
];

export default function Templates() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {templates.map((template, index) => (
        <Card key={index} className="p-6">
          <h3 className="text-xl font-semibold mb-4">{template.name} Template</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <h4 className="text-sm font-medium mb-2">Markdown</h4>
              <pre className="text-xs overflow-auto whitespace-pre-wrap">
                {template.markdown}
              </pre>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Preview</h4>
              {template.preview}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

