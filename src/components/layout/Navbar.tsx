import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "@/components/common/Logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "border-b-2 py-1 text-[15px] font-medium transition-colors hover:text-primary",
      isActive ? "border-[var(--crema)] text-primary" : "border-transparent text-muted-foreground"
    );

  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-3 font-[family-name:var(--font-heading)] text-2xl md:text-3xl">
          <Logo className="h-12 w-12" />
          {siteConfig.name}
        </Link>

<nav aria-label="Main" className="hidden items-center gap-8 md:flex lg:gap-10">
          {siteConfig.nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {user ? (
            <>
              <Link to="/blog/create" className={buttonVariants({ variant: "outline", size: "sm", className: "rounded-full" })}>
                Write post
              </Link>
              <Button variant="ghost" size="sm" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <Link to="/login" className={buttonVariants({ size: "sm", className: "rounded-full px-5" })}>
              Login
            </Link>
          )}
        </div>

        <button
          type="button"
          className="rounded-full border px-4 py-2 text-sm font-medium md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="flex flex-col gap-4 border-t bg-background px-4 py-5 md:hidden">
          {siteConfig.nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          {user ? (
            <>
              <Link to="/blog/create" className="text-sm font-medium" onClick={() => setOpen(false)}>
                Write post
              </Link>
              <button
                type="button"
                className="text-left text-sm font-medium"
                onClick={() => {
                  setOpen(false);
                  logout();
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="text-sm font-medium" onClick={() => setOpen(false)}>
              Login
            </Link>
          )}
        </nav>
      )}
    </header>
  );
}
