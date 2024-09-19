"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/dashboard/home" },
  { name: "Article", href: "/dashboard/article" },
  { name: "FAQ", href: "/dashboard/faq" },
  { name: "Services", href: "/dashboard/services" },
  { name: "About Us", href: "/dashboard/about" },
];

interface NavListProps {
  isMenuOpen: boolean;
}

export default function NavList({ isMenuOpen }: NavListProps) {
  const pathname = usePathname();

  return (
    <nav
      className={clsx(
        "transition-all duration-500 ease-in-out overflow-hidden md:overflow-visible",
        isMenuOpen
          ? "max-h-screen opacity-100 transform translate-y-0 border-t border-gray-200 mt-4"
          : "max-h-0 opacity-0 transform -translate-y-4 md:max-h-screen md:opacity-100 md:transform-none",
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
                {
                  "text-primary md:after:w-3/4 md:after:left-[12.5%] after:bg-primary after:w-full after:right-[87.5%]":
                    pathname === link.href,
                  "text-foreground hover:text-primary/80 md:hover:after:w-3/4 md:hover:after:left-[12.5%] hover:after:right-[87.5%] hover:after:w-full hover:after:bg-primary/80":
                    pathname !== link.href,
                },
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
