"use client";

import Link from "next/link";
import "./styles.css";
import { usePathname } from "next/navigation";



const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot-Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathName.startsWith(link.href);

        return (
          <Link
            href={link.href}
            key={link.name}
            className={`mr-4 ${
              isActive ? "font-bold text-red-500" : "text-blue-500"
            } `}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </>
  );
}
