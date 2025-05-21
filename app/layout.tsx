import AppWrapper from "@/components/AppWrapper";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Idea Journal",
  description: "Your space for ideas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppWrapper>{children}</AppWrapper>;
}
