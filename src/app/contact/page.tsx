"use client";

// Hooks
import { useLogEvent } from "@/hooks";

export default function Contact() {
  useLogEvent("page_view", { page: "Contact", route: "/contact" });

  return <div>Contato</div>;
}
