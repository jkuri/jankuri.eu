import { Button } from '@/components/button';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { Selection, easeLinear, scaleLinear, select } from 'd3';
import { Lato } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef } from 'react';

const lato = Lato({ weight: ['300', '400', '700', '900'], subsets: ['latin'], preload: false });

export default function Home() {
  const bgElement = useRef<HTMLDivElement>(null);
  const gElement = useRef<Selection<SVGGElement, unknown, null, undefined> | null>(null);
  const w = useRef<number>(0);
  const h = useRef<number>(0);
  const x = useRef<number>(0);

  const getRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const render = useCallback((el: HTMLDivElement) => {
    w.current = el.clientWidth;
    h.current = el.clientHeight;
    select(el).select('svg').remove();

    const svg = select(el).append('svg').attr('width', w.current).attr('height', h.current);
    let g = svg.append('g');

    let data = [
      20, 24, 20, 20, 25, 27, 26, 20, 21, 22, 24, 20, 28, 20, 28, 26, 25, 28, 22, 24, 29, 21, 30, 21, 27, 22, 23, 28,
      30, 24
    ];
    const x = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, w.current]);
    const y = scaleLinear().domain([0, 150]).range([h.current, 0]);

    gElement.current = svg.append('g');

    gElement.current
      .selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('r', () => getRandomInt(w.current < 500 ? 5 : 10, w.current < 500 ? 10 : 30))
      .attr('cx', (_: any, i: number) => (w.current / data.length) * i)
      .attr('cy', () => getRandomInt(0, w.current))
      .attr('fill', `rgba(255, 255, 255, 0.1)`);

    g.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('r', (_: any, i: number) => 105)
      .attr('cx', (_: any, i: number) => x(i))
      .attr('cy', (d: any) => y(d))
      .attr('fill', `rgba(255, 255, 255, 0.4)`)
      .attr('stroke', 'none');

    data = [
      12, 14, 12, 17, 12, 14, 19, 13, 16, 17, 17, 14, 10, 19, 18, 16, 10, 11, 10, 12, 17, 14, 14, 13, 14, 13, 12, 10, 19
    ];
    g = svg.append('g');

    g.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('r', () => 145)
      .attr('cx', (_: any, i: number) => x(i))
      .attr('cy', (d: any) => y(d))
      .attr('fill', `rgba(255, 255, 255, 0.6)`)
      .attr('stroke', 'none');

    data = [1, 2, 0, 2, 7, 1, 0, 6, 6, 6, 1, 4, 8, 10, 7, 8, 9, 4, 7, 2, 4, 2, 4, 9, 2, 7, 2, 10, 2, 10];
    g = svg.append('g');

    g.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('r', () => 185)
      .attr('cx', (_: any, i: number) => x(i))
      .attr('cy', (d: any) => y(d))
      .attr('fill', `rgba(255, 255, 255, 0.8)`)
      .attr('stroke', 'none');
  }, []);

  const animate = useCallback((g: Selection<SVGGElement, unknown, null, undefined>) => {
    x.current = x.current < 30 ? (x.current += 1) : 0;
    g.selectAll('circle')
      .transition()
      .duration(5000)
      .ease(easeLinear)
      .attr('cx', (_: any, i: number) => {
        const move = (w.current / 30) * i + (w.current / 30) * x.current;
        return move > w.current ? move - w.current : move;
      })
      .on('end', (_: any, size: number) => {
        if (size === 29) {
          animate(g);
        }
      });
  }, []);

  const init = useCallback(() => {
    render(bgElement.current!);

    if (!gElement.current) {
      return;
    }

    x.current = 0;

    animate(gElement.current);
  }, [render, animate]);

  useEffect(() => {
    init();

    const onResize = () => {
      init();
    };

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, [init]);

  return (
    <>
      <Head>
        <title>Jan Kuri - Slovenj Gradec, Slovenia</title>
      </Head>
      <main
        className={`relative flex min-h-screen w-full items-center justify-between bg-black text-white ${lato.className}`}
      >
        <div className="absolute inset-0 h-full w-full overflow-hidden" ref={bgElement} />
        <div className="z-1 relative mb-12 flex w-full flex-col items-center justify-center">
          <Image
            className="mb-10 rounded-full border-4 border-white"
            src="/1796022.jpeg"
            alt="Jan Kuri"
            width={160}
            height={60}
            priority
          />
          <span className="my-4 text-3xl font-bold sm:text-5xl">Senior Software Engineer</span>
          <span className="text-xl font-medium sm:text-2xl">Slovenj Gradec, Slovenia</span>
          <div className="mt-12 flex items-center justify-center gap-2 sm:gap-12">
            <Link href="https://github.com/jkuri" rel="noopener noreferrer" target="_blank">
              <Button size="lg">
                <GitHubLogoIcon className="mr-2" />
                <span>GitHub Profile</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/jkuri/" rel="noopener noreferrer" target="_blank">
              <Button size="lg">
                <LinkedInLogoIcon className="mr-2" />
                LinkedIn Profile
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
