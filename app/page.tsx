import Image from 'next/image'
import Link from 'next/link';
import BrandA from './brandA/page';


export default function Home() {
  const flag = true;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <p className="font-mono font-bold flex w-full justify-center border-b border-white-700 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-500 lg:p-4 lg:dark:bg-zinc-800/30">
          Hello World My Name is James
        </p>
      </div>
      <h2 className="flex justify-center pt-12">
        <Link href="/brandA" className="text-[#e11d48]">Brand A page</Link>
      </h2>
      <h2 className="flex justify-center">
        <Link href="/brandB" className="text-[#e11d48]">brand B page</Link>
      </h2>

      {flag ? <BrandA /> : 'flag off'}
    </main>
  )
}
