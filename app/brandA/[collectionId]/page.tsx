import { getSingleBrandCollection, getAllBrandCollections } from '../../../lib/brands';
import Link from 'next/link';

export async function generateStaticParams() {
  const rows = await getAllBrandCollections();

  return rows.products.map((row:any) => ({
    collectionId: row.id.toString(),
  }));
}

export default async function Page({ params }: { params: { collectionId: string } }) {
  console.log(params.collectionId)
  const collection:any = await getSingleBrandCollection(params.collectionId);

  return (
    <section>
    <article>
      <h3>{collection.id}</h3>
      <h3>{'Title: ' + collection.title}</h3>
      <h3>{'Description: ' + collection.description}</h3>
      <h3>{'Category: ' + collection.category}</h3>
      <h3>{'Price: ' + collection.price}</h3>
    </article>
      <Link href={'/brandA'}>
        <h3 className="border-2 mt-4 text-[#e11d48]">Back to BrandA</h3>
      </Link>
    </section>
  );
}
