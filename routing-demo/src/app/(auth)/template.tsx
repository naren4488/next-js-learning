"use client";

import Link from "next/link";
import "./styles.css";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const [input, setInput] = useState("");

  return (
    <>
      <input
      className="border-2"
        value={input}
        type="text"
        placeholder="enter text here"
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
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
