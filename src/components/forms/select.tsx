"use client";

import { useEffect, useId, useRef, useState } from "react";
import clsx from "clsx";
import { Bullet, ChevronDown } from "@/components/ui/icons";

type Option = { value: string; label: string };

/**
 * Accessible custom select (WAI-ARIA "select-only combobox" pattern).
 * Always opens downward, matches the brand styling, and submits its value
 * through a hidden input so it works with the server action like a native field.
 *
 * Keyboard: Enter/Space/↓ opens · ↑↓ Home End move · Enter selects · Esc closes · type to jump.
 */
export function Select({
  id,
  name,
  options,
  placeholder = "Select an option",
  defaultValue = "",
  invalid,
  describedBy,
}: {
  id: string;
  name: string;
  options: Option[];
  placeholder?: string;
  defaultValue?: string;
  invalid?: boolean;
  describedBy?: string;
}) {
  const [value, setValue] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const typed = useRef({ text: "", at: 0 });
  const listId = useId();
  const optionId = (i: number) => `${listId}-opt-${i}`;

  const selectedIndex = options.findIndex((o) => o.value === value);
  const selected = selectedIndex >= 0 ? options[selectedIndex] : null;

  const openList = (index = selectedIndex >= 0 ? selectedIndex : 0) => {
    setActive(index);
    setOpen(true);
  };
  const choose = (i: number) => {
    setValue(options[i].value);
    setOpen(false);
    buttonRef.current?.focus();
  };

  // Close on outside click.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  // Keep the active option visible, and bring the whole list into view when it opens.
  useEffect(() => {
    if (!open) return;
    listRef.current?.querySelector<HTMLElement>(`#${CSS.escape(optionId(active))}`)?.scrollIntoView({ block: "nearest" });
  }, [open, active]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (open) listRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [open]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const last = options.length - 1;
    if (!open) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
        e.preventDefault();
        openList(e.key === "ArrowUp" ? Math.max(selectedIndex, 0) : undefined);
      }
      return;
    }
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActive((a) => Math.min(a + 1, last));
        break;
      case "ArrowUp":
        e.preventDefault();
        setActive((a) => Math.max(a - 1, 0));
        break;
      case "Home":
        e.preventDefault();
        setActive(0);
        break;
      case "End":
        e.preventDefault();
        setActive(last);
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        choose(active);
        break;
      case "Escape":
        e.preventDefault();
        setOpen(false);
        break;
      case "Tab":
        setOpen(false);
        break;
      default:
        if (e.key.length === 1) {
          const now = Date.now();
          typed.current.text = (now - typed.current.at > 600 ? "" : typed.current.text) + e.key.toLowerCase();
          typed.current.at = now;
          const hit = options.findIndex((o) => o.label.toLowerCase().startsWith(typed.current.text));
          if (hit >= 0) setActive(hit);
        }
    }
  };

  return (
    <div ref={rootRef} className="relative">
      <input type="hidden" name={name} value={value} />
      <button
        ref={buttonRef}
        id={id}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-activedescendant={open ? optionId(active) : undefined}
        aria-invalid={invalid || undefined}
        aria-describedby={describedBy}
        onClick={() => (open ? setOpen(false) : openList())}
        onKeyDown={onKeyDown}
        className={clsx(
          "text-body-md flex min-h-[52px] w-full items-center justify-between gap-3 rounded-xs border bg-canvas px-4 py-3 text-left transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
          invalid ? "border-primary" : open ? "border-ink" : "border-hairline hover:border-ink/40",
        )}
      >
        <span className={clsx("truncate", selected ? "text-ink" : "text-slate/80")}>
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown
          size={18}
          className={clsx("shrink-0 text-ink transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      <ul
        ref={listRef}
        id={listId}
        role="listbox"
        aria-labelledby={id}
        hidden={!open}
        className="absolute top-full right-0 left-0 z-30 mt-2 rounded-card border border-ink/15 bg-canvas p-1.5"
      >
        {options.map((o, i) => {
          const isSelected = o.value === value;
          const isActive = i === active;
          return (
            <li
              key={o.value}
              id={optionId(i)}
              role="option"
              aria-selected={isSelected}
              onMouseEnter={() => setActive(i)}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => choose(i)}
              className={clsx(
                "text-body-sm flex cursor-pointer items-center justify-between gap-3 rounded-xs px-3.5 py-3 transition-colors",
                isActive ? "bg-canvas-soft text-ink" : "text-slate",
                isSelected && "font-medium text-ink",
              )}
            >
              <span>{o.label}</span>
              {isSelected && <Bullet size={18} className="shrink-0 text-primary" />}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
