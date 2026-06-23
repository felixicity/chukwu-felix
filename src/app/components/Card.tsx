import Link from "next/link";
import { ReactNode } from "react";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

interface CardProps {
      title: string;
      icon?: string;
      href: string;
      children: ReactNode;
}

export function Card({ title, icon, href, children }: CardProps) {
      const Icon = icon ? (Icons[icon as keyof typeof Icons] as LucideIcon) : null;

      return (
            <Link
                  href={href}
                  className=" group block rounded-xl p-5 border border-zinc-300 dark:border-zinc-700 hover:ring-1 hover:ring-zinc-400 dark:hover:ring-2 dark:hover:ring-white transition-all "
            >
                  <div className="flex gap-3">
                        {Icon && <Icon className="h-5 w-5 shrink-0 mt-1 text-zinc-500" />}

                        <div>
                              <h3 className="font-semibold">{title}</h3>
                              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{children}</p>
                        </div>
                  </div>
            </Link>
      );
}
