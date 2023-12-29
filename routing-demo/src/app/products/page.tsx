import Link from "next/link"

export default function Products() {
  return (
    <>
    <Link href={'/'}>Home</Link>
      <h1>Products page</h1>
      <ul>
        <li>Prod 1</li>
        <li>Prod 2</li>
      </ul>
    </>
  );
}
