import { FC } from "react";
import Link from "next/link";

import { DOC_URL, EXTENSION_URL } from "@/app/const/link";
import logo from "@/app/assets/logo.png";

export const Header: FC = () => {
  return (
    <header className="sticky top-0 bg-white shadow dark:bg-gray-950">
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-8">
        <Link className="flex items-center gap-2 font-semibold" href="#">
          <div
            style={{ backgroundImage: `url(${logo.src})` }}
            className="h-[30px] w-[30px] rounded-md bg-cover bg-center"
          ></div>
          <span className="text-[20px]">Mellow</span>
        </Link>
        <nav className="space-x-4">
          <Link className="link" href={DOC_URL} target="mellow_doc">
            Docs
          </Link>
          <Link className="link" href={EXTENSION_URL} target="mellow_extension">
            Extension
          </Link>
        </nav>
      </div>
    </header>
  );
};
