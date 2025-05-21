"use client";
import { Inter, Space_Grotesk } from "next/font/google";
import { useIdeaStore } from "@/lib/store";

const inter = Inter({ subsets: ["latin"] });
const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { darkMode, toggleDarkMode, ideas } = useIdeaStore((state) => state);

  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col ${darkMode ? "dark" : ""}`}
      >
        <header className="sticky z-10 bg-header-light dark:bg-header-dark top-0 py-2 md:py-1.5 md:text-xl text-lg border-b-2 border-divider-light flex items-center justify-between md:justify-around">
          <h1
            className={`${space_grotesk.className} text-text-light dark:text-text-dark`}
          >
            💡 Idea Journal
          </h1>
          <div
            onClick={toggleDarkMode}
            style={{ transitionDuration: "2ms" }}
            className="shadow-xl active:scale-75 transition ease-in border-divider-light cursor-pointer"
          >
            <span>{darkMode ? "🌞" : "🌖"}</span>
          </div>
        </header>
        {children}
        {ideas.length === 0 ? (
          <footer
            className={` pl-2 text-text-light dark:text-text-dark md:text-xl text-lg border-t-2 border-divider-light  py-1 md:py-1.5 sticky bottom-0 z-10 bg-footer-light dark:bg-footer-dark`}
          >
            No ideas yet — start creating your first one!💡
          </footer>
        ) : (
          <footer
            className={` pl-2 text-text-light dark:text-text-dark md:text-xl text-lg border-t-2 border-divider-light  py-1 md:py-1.5 sticky bottom-0 z-10 bg-footer-light dark:bg-footer-dark`}
          >
            You&apos;ve saved <strong>{ideas.length}</strong>{" "}
            {ideas.length > 1 ? "ideas" : "idea"} Keep going! 💡
          </footer>
        )}
      </body>
    </html>
  );
}
