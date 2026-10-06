import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doctor Login | Sutra Health",
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
