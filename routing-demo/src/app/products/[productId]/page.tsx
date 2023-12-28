export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>Details for product {params.productId}</h1>;
}
