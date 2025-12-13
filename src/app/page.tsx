import Header from "@/app/Header";
import "@fortawesome/fontawesome-svg-core/styles.css";
import MainContent from "./MainContent";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-stone-300 text-stone-800 dark:bg-stone-800 dark:text-stone-300">
      <Header />
      <MainContent />
    </div>
  );
}
