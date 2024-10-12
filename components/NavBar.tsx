"use client";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { MdMenu, MdClose } from "react-icons/md";

import { links } from "@/utils/links";
import ButtonLink from "@/components/ButtonLink";
import WordMark from "@/components/svg/WordMark";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="md-:py-6 px-4 py-4 md:px-6" aria-label="Main Navigation">
      <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center">
        <div className="flex items-center justify-between">
          <Link href="/" className="z-50" onClick={() => setIsOpen(false)}>
            <WordMark />
            <span className="sr-only">Glisten.ai Home Page</span>
          </Link>
          <button
            type="button"
            className="block p-2 text-3xl text-white md:hidden"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(true)}
          >
            <MdMenu />
            <span className="sr-only">Open menu</span>
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={clsx(
            "fixed bottom-0 left-0 right-0 top-0 z-40 flex flex-col items-end gap-4 bg-[#070815] pr-4 pt-14 transition-transform duration-300 ease-in-out motion-reduce:transition-none md:hidden",
            isOpen ? "translate-x-0" : "translate-x-[100%]",
          )}
        >
          <button
            type="button"
            className="fixed right-4 top-4 mb-4 block p-2 text-3xl text-white md:hidden"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(false)}
          >
            <MdClose />
            <span className="sr-only">Close menu</span>
          </button>
          <div className="grid justify-items-end gap-8">
            {links.map((item) => {
              if (item.cta_button) {
                return (
                  <ButtonLink
                    key={item.label}
                    link={item.link}
                    onClick={() => setIsOpen(false)}
                    aria-current={
                      pathname.includes(item.link) ? "page" : undefined
                    }
                  >
                    {item.label}
                  </ButtonLink>
                );
              }
              return (
                <Link
                  key={item.label}
                  href={item.link}
                  className="block px-3 text-3xl first:mt-8"
                  onClick={() => setIsOpen(false)}
                  aria-current={
                    pathname.includes(item.link) ? "page" : undefined
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden gap-6 md:flex">
          {links.map((item) => {
            if (item.cta_button) {
              return (
                <li key={item.label}>
                  <ButtonLink
                    link={item.link}
                    aria-current={
                      pathname.includes(item.link) ? "page" : undefined
                    }
                  >
                    {item.label}
                  </ButtonLink>
                </li>
              );
            }

            return (
              <li key={item.label}>
                <Link
                  href={item.link}
                  className="inline-flex min-h-11 items-center"
                  aria-current={
                    pathname.includes(item.link) ? "page" : undefined
                  }
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
