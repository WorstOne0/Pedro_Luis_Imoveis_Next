"use client";

// Hooks
import { useLogEvent } from "@/hooks";

export default function About() {
  useLogEvent("page_view", { page: "About", route: "/about" });

  return <div>Sobre</div>;
}
