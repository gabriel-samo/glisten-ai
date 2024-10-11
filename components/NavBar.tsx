"use client";
import Link from "next/link";

import { links } from "@/utils/links";
import ButtonLink from "@/components/ButtonLink";
import WordMark from "@/components/svg/WordMark";

export default function NavBar() {
  return (
    <nav className="px-4 py-1 md:px-6 md:py-2" aria-label="Main Navigation">
      <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center">
        <Link href="/">
          <WordMark />
          <span className="sr-only">Glisten.ai Home Page</span>
        </Link>
        <ul className="flex gap-6">
          {links.map((item) => {
            if (item.cta_button) {
              return (
                <li key={item.label}>
                  <ButtonLink link={item.link}>{item.label}</ButtonLink>
                </li>
              );
            }

            return (
              <li key={item.label}>
                <Link
                  href={item.link}
                  className="inline-flex min-h-11 items-center"
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
