import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <p className="font-mono font-bold flex w-full justify-center border-b border-white-700 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-500 lg:p-4 lg:dark:bg-zinc-800/30">
          Hello World My Name is James
        </p>
      </div>
      <section className="flex flex-col justify-center pt-12">
        <Link href="/" className="text-[#e11d48]">Brand A page</Link>
        <Link href="https://test-app-olive-pi.vercel.app/" className="text-[#e11d48]">brand B page</Link>
      </section>
    </main>
  )
}
