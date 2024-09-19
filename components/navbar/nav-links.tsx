"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/home" },
  { name: "Article", href: "/home/article" },
  { name: "FAQ", href: "/home/faq" },
  { name: "Services", href: "/home/services" },
  { name: "About Us", href: "/home/about" },
];

export default function NavList({ isMenuOpen }: { isMenuOpen: boolean }) {
  const pathname = usePathname();

  return (
    <nav
      className={clsx(
        "transition-all duration-500 ease-out", // Tambahkan transisi yang lebih halus
        isMenuOpen
          ? "max-h-screen opacity-100 transform translate-y-0"
          : "max-h-0 opacity-0 transform -translate-y-4", // Transisi dengan transform dan opacity
        "overflow-hidden md:overflow-visible",
      )}
    >
      <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 py-4 md:py-0">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={clsx(
                "block px-4 py-2 transition-colors relative",
                "after:content-[''] after:absolute after:bottom-0 md:after:left-1/2 after:right-3/4 after:w-0 after:h-0.5 after:transition-all after:duration-300",
                pathname === link.href
                  ? "text-primary md:after:w-3/4 md:after:left-[12.5%] after:bg-primary after:w-1/5 after:right-[80%]"
                  : "text-foreground hover:text-primary/80 md:hover:after:w-3/4 md:hover:after:left-[12.5%] hover:after:right-[87.5%] hover:after:w-full hover:after:bg-primary/80",
                "md:inline-block",
              )}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
