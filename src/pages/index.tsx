import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Comic_Neue } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";

const comic = Comic_Neue({
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
        className={`relative flex min-h-screen w-full items-center justify-between bg-black text-white ${comic.className}`}
      >
        <div className="relative z-1 mb-12 flex w-full flex-col items-center justify-center">
          <Image
            className="mb-10 rounded-full border-4 border-white"
            src="/1796022.jpeg"
            alt="Jan Kuri"
            width={160}
            height={60}
            priority
          />
          <span className="my-4 font-extrabold text-3xl sm:text-5xl">
            Senior Software Engineer
          </span>
          <span className="font-bold text-xl sm:text-2xl">
            Slovenj Gradec, Slovenia
          </span>
          <div className="mt-12 flex items-center justify-center gap-2 sm:gap-12">
            <Link
              href="https://github.com/jkuri"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button size="lg">
                <GitHubLogoIcon className="mr-2 size-5" />
                <span className="font-bold">GitHub Profile</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/jkuri/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button size="lg">
                <LinkedInLogoIcon className="mr-2 size-5" />
                <span className="font-bold">LinkedIn Profile</span>
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
