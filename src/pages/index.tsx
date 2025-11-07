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

const geist = Geist({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  preload: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Jan Kuri - Slovenj Gradec, Slovenia</title>
      </Head>
      <main
        className={`relative flex min-h-dvh w-full items-center justify-between dark:bg-black dark:text-white ${geist.className}`}
      >
        <div className="absolute top-0 right-0 left-0">
          <Header />
        </div>

        <div className="flex w-full flex-col items-center justify-center">
          <Image
            className="rounded-full border-4 border-black dark:border-white"
            src="/1796022.jpeg"
            alt="Jan Kuri"
            width={160}
            height={60}
            priority
          />
          <span className="pt-6 pb-2 font-bold text-3xl sm:text-5xl">
            Senior Software Engineer
          </span>
          <span className="py-2 font-bold text-xl sm:text-2xl">
            Slovenj Gradec, Slovenia
          </span>
          <div className="flex items-center justify-center gap-6 pt-8 sm:gap-12 sm:pt-12">
            <Link
              href="https://github.com/jkuri"
              rel="noopener noreferrer"
              target="_blank"
            >
              <GitHubLogoIcon className="size-5 sm:size-10" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/jkuri/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkedInLogoIcon className="size-5 sm:size-10" />
            </Link>
            <Link
              href="https://www.instagram.com/jankuri_/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <InstagramLogoIcon className="size-5 sm:size-10" />
            </Link>
            <Link
              href="https://dribbble.com/jkuri"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Dribbble className="size-5 sm:size-10" />
            </Link>
            <Link
              href="https://facebook.com/jan.kuri.50/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Facebook className="size-5 sm:size-10" />
            </Link>
            <Link href="mailto:jkuri88@gmail.com">
              <Mail className="size-5 sm:size-10" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
