import Header from "@/components/Header";
import Home from "@/components/Home";

export default function Page() {
  return (
    <div className="min-h-screen min-w-screen bg-background text-foreground px-10">
      <Header />
      <Home />
    </div>
  );
}
