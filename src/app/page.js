import Start from "@/components/ui/start.jsx";
import Terminal from "@/components/ui/terminal.jsx";

export default function Home() {
  return (
    <main className="flex flex-col justify-start h-screen px-12 bg-yellow-100 py-36 2xl:px-48 xl:px-36 md:px-24">
      <Terminal>
        <Start />
      </Terminal>
    </main>
  );
}
