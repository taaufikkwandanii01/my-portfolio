"use client";

import { Sling as Hamburger } from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type DropdownName = "hero" | "about" | "portfolio" | "resume" | "linkedin";

interface MenuItem {
  id: DropdownName;
  label: string;
  href?: string;
  submenu?: SubMenuItem[];
}

interface SubMenuItem {
  href: string;
  label: string;
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: "hero" as DropdownName,
    label: "Hero",
    href: "#hero",
  },
  {
    id: "about" as DropdownName,
    label: "About Me",
    href: "#about",
  },
  {
    id: "portfolio" as DropdownName,
    label: "Portfolio",
    submenu: [
      { href: "/project", label: "Project" },
      { href: "/experience", label: "Experience" },
      { href: "/credentials", label: "License & Certificate" },
    ],
  },
  {
    id: "resume" as DropdownName,
    label: "Resume",
    href: "/resume",
  },
  {
    id: "linkedin" as DropdownName,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/taufikwandani/",
  },
];

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownName | null>(null);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : (name as DropdownName)));
  };

  const handleLinkClick = () => {
    setOpen(false);
    setOpenDropdown(null);
  };

  const closeDropdown = () => {
    if (!isOpen) setOpenDropdown(null);
  };

  // --- 2. HELPER STYLES (Tailwind) ---
  const desktopDropdownClasses = (name: DropdownName) => `
    absolute top-12 right-0 bg-slate-100 border border-gray-100 shadow-xl rounded-lg p-3 w-48 flex flex-col gap-2 text-gray-700 text-sm overflow-hidden transition-all duration-200 ease-out transform
    ${
      openDropdown === name
        ? "visible opacity-100 translate-y-0"
        : "invisible opacity-0 translate-y-2 pointer-events-none"
    }
  `;

  const mobileDropdownContentClasses = (name: DropdownName) => `
    flex flex-col gap-1 font-medium text-black pl-4 overflow-hidden transition-all duration-300 ease-in-out 
    ${
      openDropdown === name
        ? "max-h-60 opacity-100 pb-2 mt-1"
        : "max-h-0 opacity-0 pb-0"
    }
  `;

  return (
    <nav
      className="fixed w-full h-18 z-50 transition-all duration-300 outline-none"
      onBlur={(e) => {
        // Close dropdown if focus moves outside the nav
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          closeDropdown();
        }
      }}
      tabIndex={0}
    >
      {/* Navbar Glassmorphism Container */}
      <div className="max-w-5xl h-full mx-auto absolute inset-4 lg:inset-2 rounded-xl bg-[#2D5C88]/30 backdrop-blur-lg shadow-lg">
        <div className="w-full h-full flex items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" onClick={handleLinkClick}>
            <Image
              src="/images/Icons/icon-name.png"
              alt="Logo"
              width={120}
              height={100}
              className="object-contain cursor-pointer"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden text-sm text-white gap-5 lg:flex items-center font-semibold">
            {MENU_ITEMS.map((item) => (
              <li key={item.id} className="relative">
                {item.submenu ? (
                  // JIKA ADA SUBMENU: Tampilkan Tombol Dropdown
                  <>
                    <button
                      onClick={() => toggleDropdown(item.id)}
                      className={`flex items-center transition duration-150 cursor-pointer ${
                        openDropdown === item.id
                          ? "text-blue-300"
                          : "hover:text-blue-300"
                      }`}
                    >
                      {item.label}
                      <svg
                        className={`w-3 h-3 ml-1 transition-transform duration-200 ${
                          openDropdown === item.id ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div className={desktopDropdownClasses(item.id)}>
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="py-1.5 px-2 rounded-md hover:bg-blue-50 hover:text-blue-300 transition-colors"
                          onClick={handleLinkClick}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  // JIKA TIDAK ADA SUBMENU: Tampilkan Link Biasa
                  <Link
                    href={item.href || "#"}
                    className="hover:text-blue-300 transition-colors"
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Hamburger Menu (Mobile) */}
          <div className="lg:hidden z-50">
            <Hamburger
              toggled={isOpen}
              // Tambahkan baris di bawah ini
              color={isOpen ? "#EF4444" : "white"}
              toggle={() => {
                setOpen(!isOpen);
                if (!isOpen) setOpenDropdown(null);
              }}
              size={24}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide-down */}
      <div
        className={`w-auto absolute top-24 inset-x-4 overflow-hidden rounded-xl shadow-xl bg-[#2D5C88]/30 backdrop-blur-xl px-6 py-4 lg:hidden transition-all duration-300  ${
          isOpen
            ? "visible opacity-100 translate-y-0"
            : "invisible opacity-0 -translate-y-4"
        }`}
      >
        <ul className="flex flex-col text-sm font-bold text-white gap-1">
          {MENU_ITEMS.map((item) => (
            <li
              key={item.id}
              className="border-b border-gray-200/30 last:border-none"
            >
              {item.submenu ? (
                // JIKA ADA SUBMENU
                <>
                  <button
                    onClick={() => toggleDropdown(item.id)}
                    className="w-full flex justify-between items-center py-4 hover:text-blue-300 transition-colors  cursor-pointer"
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdown === item.id ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className={mobileDropdownContentClasses(item.id)}>
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block py-2 text-white hover:text-blue-300 transition-colors"
                        onClick={handleLinkClick}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                // JIKA TIDAK ADA SUBMENU
                <Link
                  href={item.href || "#"}
                  className="block py-4 hover:text-blue-300 transition-colors"
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
