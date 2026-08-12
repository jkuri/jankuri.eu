import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Dribbble, Facebook, Mail } from "lucide-react";
import { Geist } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { MatrixGrid } from "@/components/matrix-grid";

const geist = Geist({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  preload: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Jan Kuri - Mostar, Yugoslavia</title>
      </Head>
      <main
        className={`relative flex min-h-dvh w-full items-center justify-between dark:text-white ${geist.className}`}
      >
        <div className="absolute top-0 right-0 left-0 z-10">
          <Header />
        </div>

        <div className="relative z-20 mx-auto flex flex-col items-center justify-center rounded-xl border-2 border-zinc-500 px-4 py-12 sm:px-16">
          <div className="-z-1 absolute inset-0 rounded-xl bg-white opacity-85 dark:bg-zinc-950" />
          <Image
            className="rounded-full border-2 border-zinc-950 dark:border-white"
            src="/1796022.jpeg"
            alt="Jan Kuri"
            width={120}
            height={40}
            priority
          />
          <span className="pt-6 pb-2 font-bold text-2xl sm:text-4xl">
            Senior Bullshiter
          </span>
          <span className="py-2 font-bold text-xl">
            Mostar, Yugoslavia
          </span>
          <div className="flex items-center justify-center gap-6 pt-8 sm:gap-12 sm:pt-12">
            <Link
              href="https://github.com/jkuri"
              rel="noopener noreferrer"
              target="_blank"
            >
              <GitHubLogoIcon className="size-5 sm:size-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/jkuri/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkedInLogoIcon className="size-5 sm:size-6" />
            </Link>
            <Link
              href="https://www.instagram.com/jankuri_/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <InstagramLogoIcon className="size-5 sm:size-6" />
            </Link>
            <Link
              href="https://dribbble.com/jkuri"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Dribbble className="size-5 sm:size-6" />
            </Link>
            <Link
              href="https://facebook.com/jan.kuri.50/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Facebook className="size-5 sm:size-6" />
            </Link>
            <Link href="mailto:jkuri88@gmail.com">
              <Mail className="size-5 sm:size-6" />
            </Link>
          </div>
        </div>
        <div className="-z-1 absolute inset-0">
          <MatrixGrid />
        </div>
      </main>
    </>
  );
}
