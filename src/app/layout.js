import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('valence-theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark' || (!stored && prefersDark)) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[#F8FAFC] text-[#0B0F19] dark:bg-[#080B11] dark:text-[#F8FAFC] antialiased selection:bg-black selection:text-white dark:selection:bg-cyan-400 dark:selection:text-black transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
