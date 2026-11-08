"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
const links = [
  ["Work", "/#work"],
  ["Experience", "/#experience"],
  ["About", "/#about"],
  ["Writing", "/blog"],
  ["Contact", "/#contact"],
];
export default function Navigation() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="shell nav-row">
        <Link href="/" className="brand-note" aria-label="Pawan Sargar home">
          My corner of the internet.
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        <nav
          id="site-nav"
          aria-label="Main navigation"
          className={open ? "navigation is-open" : "navigation"}
        >
          {links.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className={label === "Contact" ? "nav-contact" : ""}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
