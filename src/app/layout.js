import "./globals.css";

export const metadata = {
  title: "VALENCE — Enterprise Software Architecture, AI & Cloud Engineering",
  description:
    "Valence delivers end-to-end software engineering, autonomous AI systems, and high-performance cloud architectures that accelerate scale and define modern digital capability.",
  keywords: [
    "Enterprise Software",
    "Cloud Architecture",
    "Autonomous AI",
    "Next.js Development",
    "Scalable SaaS",
    "Distributed Systems",
  ],
  authors: [{ name: "Valence Technologies" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-[#F8FAFC] text-[#0B0F19] antialiased selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
