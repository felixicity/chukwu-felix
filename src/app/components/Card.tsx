import Link from "next/link";
import { ReactNode } from "react";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";
import { ComponentType } from "react";
interface CardProps {
      title: string;
      icon?: string;
      href: string;
      children: ReactNode;
}

type IconType = ComponentType<LucideProps>;

function resolveIcon(name?: string): IconType | null {
      if (!name) return null;

      const pascal = name
            .split("-")
            .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
            .join("");

      const Icon = (Icons as any)[pascal] as IconType | undefined;

      return Icon ?? null;
}

export function Card({ title, icon, href, children }: CardProps) {
      const Icon = resolveIcon(icon);

      return (
            <Link
                  href={href}
                  className="group block no-underlinerounded-xl p-5border border-zinc-300 dark:border-zinc-700hover:border-zinc-400 dark:hover:border-whitehover:ring-1 hover:ring-zinc-400 dark:hover:ring-whitetransition-all duration-200"
            >
                  <div className="flex gap-3">
                        {Icon && <Icon className="h-5 w-5 mt-1 text-zinc-500" />}

                        <div className="">
                              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{title}</h3>

                              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{children}</p>
                        </div>
                  </div>
            </Link>
      );
}
