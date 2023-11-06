import Link from 'next/link';

export default function brandA() {
  return (
    <main>
      <h1>Brand AAAA</h1>
      <h2>
        <Link href="/" className="text-[#e11d48]">back to home</Link>
      </h2>
    </main>
  );
}