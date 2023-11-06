import Link from 'next/link';
import { getAllBrandCollections } from '../../lib/brands';

export default async function brandA() {
  const collections:any = await getAllBrandCollections();

  return (
    <main>
      <h1>Brand AAAA</h1>
      <h2>
        <Link href="/" className="text-[#e11d48]">back to home</Link>
      </h2>
      <section>
        <h1>Collections</h1>
        <article>
          {collections.map((collection:any) => (
            <Link href={'/brandA/' + collection.id} key={collection.id} >
              <h3 className="border-2 mt-4 text-[#e11d48]">{'go to ' + collection.content}</h3>
            </Link>
          ))}
        </article>
      </section>
    </main>
  );
}