export interface Theme {
  name: string;
  className: string;
  headingClass: string;
  subHeadingClass: string;
  textClass: string;
  accentColor?: string;
  sectionClass?: string;
  listClass?: string;
  dateClass?: string;
  contactClass?: string;
}

export const themes: Record<string, Theme> = {
  classic: {
    name: "Classic",
    className: "max-w-3xl mx-auto p-8 bg-white",
    headingClass: "text-3xl font-serif text-gray-900 mb-4",
    subHeadingClass: "text-xl font-medium text-gray-800 mb-3",
    textClass: "text-gray-700 leading-relaxed",
    sectionClass: "mb-8 border-b border-gray-200 pb-6",
    listClass: "list-disc list-inside space-y-2",
    dateClass: "text-sm italic text-gray-600",
    contactClass: "flex flex-col gap-2 text-gray-700"
  },
  professional: {
    name: "Professional",
    className: "max-w-3xl mx-auto p-8 bg-slate-50",
    headingClass: "text-3xl font-sans font-bold text-slate-900 mb-4",
    subHeadingClass: "text-xl font-semibold text-slate-800 mb-3",
    textClass: "text-slate-700 leading-relaxed",
    sectionClass: "mb-8 border-b border-slate-200 pb-6",
    listClass: "list-disc list-inside space-y-2",
    dateClass: "text-sm font-medium text-slate-600",
    contactClass: "flex flex-col gap-2 text-slate-700"
  },
  elegant: {
    name: "Elegant",
    className: "max-w-3xl mx-auto p-8 bg-neutral-50",
    headingClass: "text-4xl font-playfair text-neutral-900 mb-6",
    subHeadingClass: "text-xl font-light text-neutral-800 mb-4",
    textClass: "text-neutral-700 leading-loose",
    sectionClass: "mb-10 border-b border-neutral-200 pb-8",
    listClass: "list-disc list-inside space-y-3",
    dateClass: "text-sm italic text-neutral-600",
    contactClass: "flex flex-col gap-3 text-neutral-700"
  },
  simple: {
    name: "Simple",
    className: "max-w-3xl mx-auto p-8 bg-zinc-50",
    headingClass: "text-2xl font-mono font-bold text-zinc-900 mb-4 tracking-tight",
    subHeadingClass: "text-lg font-mono text-zinc-800 mb-3",
    textClass: "text-zinc-700 leading-relaxed font-mono",
    sectionClass: "mb-6 border-b border-zinc-200 pb-4",
    listClass: "list-disc list-inside space-y-1",
    dateClass: "text-sm text-zinc-600 font-mono",
    contactClass: "flex flex-col gap-2 text-zinc-700"
  },
  modern: {
    name: "Modern",
    className: "max-w-3xl mx-auto p-8 bg-gradient-to-br from-white to-gray-50",
    headingClass: "text-4xl font-sans font-black text-gray-900 mb-6 tracking-tight",
    subHeadingClass: "text-xl font-bold text-gray-800 mb-4",
    textClass: "text-gray-700 leading-relaxed",
    sectionClass: "mb-8 border-b border-gray-200 pb-6",
    listClass: "list-disc list-inside space-y-2",
    dateClass: "text-sm font-medium text-gray-600",
    contactClass: "flex flex-col gap-2 text-gray-700"
  }
};