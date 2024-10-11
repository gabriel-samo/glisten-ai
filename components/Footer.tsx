import Link from "next/link";

import { links } from "@/utils/links";
import WordMark from "@/components/icons/WordMark";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-6 border-t border-slate-600 px-8 py-7 md:flex-row">
      <Link href="/">
        <WordMark />
        <span className="sr-only">Glisten.ai Home Page</span>
      </Link>
      <nav aria-label="Footer">
        <ul className="flex gap-6">
          {links.map((item) => (
            <li key={item.label}>
              <Link
                href={item.link}
                className="inline-flex min-h-11 items-center"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
