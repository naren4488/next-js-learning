import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "About Only",
    default:'About default',
  },
};

export default function About() {
  return <>
  <Link href='/docs' replace>Docs</Link>
  <h1>About page</h1></>
}
