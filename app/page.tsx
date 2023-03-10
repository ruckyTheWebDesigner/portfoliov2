import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

import HomePage from "@/components/HomePage/HomePage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
