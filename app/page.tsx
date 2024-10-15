import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1727950183920-654c2feee258?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          filter: "blur(2px) brightness(80%)",
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto text-center">
        <Sparkles className="w-16 h-16 mb-8 text-violet-400 animate-pulse" />
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white animate-fade-in">
          NextJS Templates
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white animate-fade-in-delay">
          Discover a world of endless possibilities and breathtaking designs
        </p>
        <div className="flex gap-2">
          <Link href="/modal" passHref>
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-purple-100 transition-all duration-300 transform hover:scale-105"
            >
              Modal Templates
            </Button>
          </Link>
          <Link href="/login" passHref>
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-purple-100 transition-all duration-300 transform hover:scale-105"
            >
              Login Templates
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.animate-fade-in-delay {
  animation: fadeIn 1s ease-out 0.5s forwards;
  opacity: 0;
}
`;

Component.styles = styles;
