import { getSingleBrandBCollection } from '../../../lib/brands';
import Link from 'next/link';

export default async function Page({ params }: { params: { content: string } }) {
  const collection:any = await getSingleBrandBCollection(params.content);

  return (
    <article>
      <h3>{collection.id}</h3>
      <h3>{collection.content}</h3>
      <Link href={'/brandB'}>
         <h3 className="border-2 mt-4 text-[#e11d48]">Back to Brand B</h3>
      </Link>
    </article>
  );
}
