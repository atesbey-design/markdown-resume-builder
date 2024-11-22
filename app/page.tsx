"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Edit, Download, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

function HeroSection() {
  const [text, setText] = useState("");
  const words = ["minutes", "markdown"];
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(200);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, isDeleting, wordIndex]);

  const tick = () => {
    let currentWord = words[wordIndex];
    let updatedText = isDeleting 
      ? currentWord.substring(0, text.length - 1)
      : currentWord.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === currentWord) {
      setIsDeleting(true);
      setDelta(200);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      setDelta(300);
    }
  };

  return (
    <div className="text-center mb-20">
      <span className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium mb-6 inline-block shadow-lg hover:shadow-xl transition-shadow">
        ✨ Markdown Resume Builder
      </span>
      <h1 className="text-7xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        Create Your Resume in {text}
        <span className="text-purple-600 dark:text-purple-400">.</span>
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
        Transform your career story into a professional resume using our
        intuitive Markdown editor. No complex formatting needed.
      </p>
      <Link href="/editor">
        <Button
          size="lg"
          className="gap-3 text-lg px-10 py-7 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          <Edit className="w-6 h-6" />
          Create Resume
          <ArrowRight className="w-6 h-6" />
        </Button>
      </Link>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  gradient,
  border,
}: {
  icon: any;
  title: string;
  description: string;
  gradient: string;
  border: string;
}) {
  return (
    <Card
      className={`
        p-12 
        hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] 
        dark:hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.1)]
        transition-all duration-500 ease-in-out
        hover:-translate-y-2 hover:scale-[1.02]
        bg-white/90 dark:bg-gray-800/90 
        backdrop-blur-lg
        border ${border}
        rounded-3xl
        group
      `}
    >
      <div
        className={`
          bg-gradient-to-br ${gradient}
          w-24 h-24
          rounded-2xl
          flex items-center justify-center 
          mb-8
          shadow-xl
          group-hover:shadow-2xl
          group-hover:scale-110
          transition-all duration-500
          transform-gpu
        `}
      >
        <Icon className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-500" />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
        {description}
      </p>
    </Card>
  );
}

function MarkdownPreview() {
  const markdownExample = `# Tuncer Bağçabaşı
## İletişim Bilgileri
- 📧 tuncer@example.com
- 📱 (555) 123-4567
- 🔗 tuncerbagcabasi
- 📍 İstanbul, Türkiye

## Profesyonel Özet
10+ yıllık deneyime sahip yazılım geliştirici. Yenilikçi çözümler üretme ve ekip liderliği konularında uzman.

## İş Deneyimi
**Kıdemli Yazılım Mühendisi | Tech Innovators A.Ş.**
*2020 - Günümüz*
- ⭐ Mikroservis mimarisine geçişi yönetti, sistem performansını %60 artırdı
- 👥 15 kişilik geliştirici ekibine liderlik etti
- 🚀 Yıllık geliri %40 artıran e-ticaret platformunu geliştirdi

## Eğitim
**Bilgisayar Mühendisliği Yüksek Lisans**
*İstanbul Teknik Üniversitesi | 2015-2017*
- 📊 GPA: 3.92/4.00
- 🏆 TÜBİTAK Bursu`;

  return (
    <div className="max-w-5xl mx-auto bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-indigo-100 dark:border-indigo-900">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-4 h-4 rounded-full bg-rose-500 shadow-lg"></div>
        <div className="w-4 h-4 rounded-full bg-amber-500 shadow-lg"></div>
        <div className="w-4 h-4 rounded-full bg-emerald-500 shadow-lg"></div>
      </div>
      <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">
        Markdown Preview
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h3 className="font-semibold text-2xl mb-4 text-gray-800 dark:text-white">
            Write in Markdown
          </h3>
          <pre className="bg-gray-100 dark:bg-gray-900 p-8 rounded-2xl text-sm font-mono shadow-inner overflow-x-auto whitespace-pre-wrap break-words">
            {markdownExample}
          </pre>
        </div>
        <div className="space-y-6">
          <h3 className="font-semibold text-2xl mb-4 text-gray-800 dark:text-white">
            See Live Preview
          </h3>
          <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-2xl text-sm shadow-inner overflow-x-auto">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Tuncer Bağçabaşı
            </h1>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-6">
              <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2">
                İletişim Bilgileri
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <span>📧</span> tuncer@example.com
                </div>
                <div className="flex items-center gap-2">
                  <span>📱</span> (555) 123-4567
                </div>
                <div className="flex items-center gap-2">
                  <span>🔗</span> tuncerbagcabasi
                </div>
                <div className="flex items-center gap-2">
                  <span>📍</span> İstanbul, Türkiye
                </div>
              </div>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">
                Profesyonel Özet
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed break-words">
                10+ yıllık deneyime sahip yazılım geliştirici. Yenilikçi
                çözümler üretme ve ekip liderliği konularında uzman.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                İş Deneyimi
              </h2>
              <div className="bg-gradient-to-r from-purple-50 to-transparent dark:from-purple-900/30 p-4 rounded-lg">
                <div className="font-bold text-gray-800 dark:text-white break-words">
                  Kıdemli Yazılım Mühendisi | Tech Innovators A.Ş.
                </div>
                <div className="italic text-purple-600 dark:text-purple-400 mb-2">
                  2020 - Günümüz
                </div>
                <ul className="list-none space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0">⭐</span>
                    <span className="break-words">
                      Mikroservis mimarisine geçişi yönetti, sistem
                      performansını %60 artırdı
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0">👥</span>
                    <span className="break-words">
                      15 kişilik geliştirici ekibine liderlik etti
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0">🚀</span>
                    <span className="break-words">
                      Yıllık geliri %40 artıran e-ticaret platformunu geliştirdi
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const features = [
    {
      icon: FileText,
      title: "Simple Markdown",
      description:
        "Focus on your content with our intuitive Markdown editor. See changes instantly.",
      gradient: "from-indigo-500 to-purple-500",
      border: "border-indigo-100 dark:border-indigo-900",
    },
    {
      icon: Download,
      title: "Quick Export",
      description:
        "Generate professional PDFs instantly. Ready to send to employers.",
      gradient: "from-purple-500 to-pink-500",
      border: "border-purple-100 dark:border-purple-900",
    },
    {
      icon: Edit,
      title: "Custom Themes",
      description:
        "Stand out with our professionally designed themes and templates.",
      gradient: "from-pink-500 to-rose-500",
      border: "border-pink-100 dark:border-pink-900",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950 dark:via-purple-950 dark:to-pink-950">
      <div className="container mx-auto px-4 py-24">
        <HeroSection />

        <div className="grid md:grid-cols-3 gap-10 mb-24">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <MarkdownPreview />
      </div>
    </main>
  );
}
