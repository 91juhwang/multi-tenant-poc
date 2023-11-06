import { getSingleBrandCollection } from '../../../lib/brands';
import Link from 'next/link';

export default async function Page({ params }: { params: { collectionId: string } }) {
  const collection:any = await getSingleBrandCollection(params.collectionId);

  return (
    <article>
      <h3>{collection.id}</h3>
      <h3>{collection.content}</h3>
      <Link href={'/brandA'}>
         <h3 className="border-2 mt-4 text-[#e11d48]">Back to BrandA</h3>
      </Link>
    </article>
  );
}
