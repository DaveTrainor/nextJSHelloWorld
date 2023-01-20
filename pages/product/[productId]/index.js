import { useRouter } from "next/router";

function ProductDetail() {
  const router = useRouter();
  const productId = router.query.productId;
  return <h1>Details about Product (fromproductId folder): {productId}</h1>;
}

export default ProductDetail;


