import Link from 'next/link';
import { getAllBrandBCarts } from '../../lib/brands';

export default async function brandBPage() {
  const carts:any = await getAllBrandBCarts();

  return (
    <main>
      <h1 className="font-mono font-bold p-5">Brand B</h1>
      <h1 className="font-mono p-5">Carts:</h1>
      <section>
        <h1>Carts:</h1>
        <h2>
          <Link href="/" className="text-[#e11d48]">back to home</Link>
        </h2>
        <section>
          {carts.carts.map((cart:any) => (
            <article className="border-2 mt-4">
              <h3>{'Total: ' + cart.total}</h3>
              <h3>{'User Id: ' + cart.userId}</h3>
              <h3>{'Quantity: ' + cart.totalQuantity}</h3>
              <Link href={'/brandB/' + cart.id} key={cart.id} >
                <h3 className="mt-1 text-[#e11d48]">{'go to Cart'}</h3>
              </Link>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}