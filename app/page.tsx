import Dashboard from "@/components/Dashboard";
import dynamic from "next/dynamic";
import Image from "next/image";
import 'mapbox-gl/dist/mapbox-gl.css';
// import "@/styles/mapbox.css"

export default function Home() {
  return (
    <main className="w-full h-[100vh]">
      <Dashboard />
    </main>
  );
}
