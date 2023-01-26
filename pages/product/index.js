import Link from "next/link";
function ProductList({productId = 100}) {
  return (
    <>
      <h2>
        <Link href="/product/1">Product 1</Link>
      </h2>
      <h2>
        <Link href='/product/2' replace>Product 2</Link>
      </h2>
      <h2>
      <Link href={`/product/${productId}`}>Product {productId}</Link>
      </h2>
    </>
  );
}

export default ProductList