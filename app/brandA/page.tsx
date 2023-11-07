import Link from 'next/link';
import { getAllBrandCollections } from '../../lib/brands';

export default async function BrandA() {
  const collections:any = await getAllBrandCollections();

  return (
    <main>
      <h1 className="font-mono font-bold p-5">Brand A</h1>
      <section>
        <h1 className="font-mono p-5">Collections:</h1>
        <h2>
          <Link href="/" className="text-[#e11d48]">back to home</Link>
        </h2>
        <article>
          {collections.products.map((collection:any) => (
            <article className="border-2 mt-4" key={collection.id}>
              <h3>{'Title: ' + collection.title}</h3>
              <h3>{'Description: ' + collection.description}</h3>
              <h3>{'Price: ' + collection.price}</h3>
              <Link href={'/brandA/' + collection.id}>
                <h3 className="text-[#e11d48]">{'go to ' + collection.brand}</h3>
              </Link>
            </article>
          ))}
        </article>
      </section>
    </main>
  );
}