
export async function getAllBrandCollections() {
  const res:any = await fetch('https://dummyjson.com/products')
  return res.json()
}

export async function getSingleBrandCollection(id:string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return res.json()
}

export async function getAllBrandBCarts() {
  const res:any = await fetch('https://dummyjson.com/carts')
  return res.json()
}

export async function getSingleBrandBCart(id:string) {
  const res = await fetch(`https://dummyjson.com/carts/${id}`);
  return res.json()
}
