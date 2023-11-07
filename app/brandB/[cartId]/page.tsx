import { getSingleBrandBCart, getAllBrandBCarts } from '../../../lib/brands';
import Link from 'next/link';

export async function generateStaticParams() {
  const rows = await getAllBrandBCarts();

  return rows.carts.map((row:any) => ({
    cartId: row.id.toString(),
  }));
}

export default async function CartPage({ params }: { params: { cartId: string } }) {
  const cart:any = await getSingleBrandBCart(params.cartId);

  return (
    <article>
      <h3>{'Total: ' + cart.total}</h3>
      <h3>{'User Id: ' + cart.userId}</h3>
      <h3>{'Quantity: ' + cart.totalQuantity}</h3>
      <Link href={'/brandB'}>
         <h3 className="border-2 mt-4 text-[#e11d48]">Back to Brand B Carts</h3>
      </Link>
    </article>
  );
}
