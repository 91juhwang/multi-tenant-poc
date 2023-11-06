import Link from 'next/link';
import { getAllBrandBCollections } from '../../lib/brands';

export default async function brandA() {
  const collections:any = await getAllBrandBCollections();

  return (
    <main>
      <h1>Brand BBBBBB</h1>
      <h2>
        <Link href="/" className="text-[#e11d48]">back to home</Link>
      </h2>
      <section>
        <h1>Collections</h1>
        <article>
          {collections.map((collection:any) => (
            <Link href={'/brandB/' + collection.content} key={collection.id} >
              <h3 className="border-2 mt-4 text-[#e11d48]">{'go to ' + collection.content}</h3>
            </Link>
          ))}
        </article>
      </section>
    </main>
  );
}