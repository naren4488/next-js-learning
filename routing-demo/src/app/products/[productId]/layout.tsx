// import { Metadata } from "next";

// type Props = {
//   params: {
//     productId: string;
//   };
// };

// export const generateMetadata = ({ params }: Props): Metadata => {
//   return {
//     title: `Product ${params.productId}`,
//   };
// };

export default function productDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <>
        {children}
        <h1>Featured products</h1>
      </>
  );
}
