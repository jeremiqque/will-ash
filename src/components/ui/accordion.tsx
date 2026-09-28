"use client";

import { useId, useState } from "react";
import clsx from "clsx";
import { Plus } from "./icons";

type Item = { q: string; a: string };

/** Accessible accordion: buttons with aria-expanded + labelled regions. */
export function Accordion({ items }: { items: readonly Item[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();

  return (
    <div className="border-t border-hairline">
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${id}-btn-${i}`;
        const panelId = `${id}-panel-${i}`;
        return (
          <div key={item.q} className="border-b border-hairline">
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="text-title flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-primary"
              >
                <span>{item.q}</span>
                <Plus
                  className={clsx(
                    "mt-1 size-5 shrink-0 text-primary transition-transform duration-300",
                    isOpen && "rotate-45",
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={clsx(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden" inert={!isOpen}>
                <p className="text-body-md measure pb-6 text-slate">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
