import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NavOptions } from "./NavOptions";
import { INavbarOptions } from "@/types/interface";

const NavItems = () => {
  return (
    <div className="flex gap-4 items-center">
      <Link href="">Logo</Link>
      <nav className="flex items-center gap-6">
        {NavOptions?.map((item: INavbarOptions) => (
          <Link
            key={item.id}
            className={cn(
              "link-hover flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            )}
            href=""
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default NavItems;
