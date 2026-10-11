import { Link } from "react-router-dom";
import Logo from "@/components/common/Logo";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-[var(--roast)] pattern-delft-light text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Logo className="h-11 w-11" />
            <p className="font-[family-name:var(--font-heading)] text-2xl text-white">{siteConfig.name}</p>
          </div>
          <p className="mt-3 max-w-xs text-white/70">{siteConfig.tagline}</p>
          <p className="mt-4 text-sm text-white/70">{siteConfig.hours}</p>
        </div>

        <nav aria-label="Footer">
          <p className="font-semibold text-white">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-white hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-semibold text-white">Visit us</p>
          <address className="mt-3 space-y-2 text-sm not-italic">
            <p>{siteConfig.address}</p>
            <p>{siteConfig.phone}</p>
            <p>{siteConfig.email}</p>
          </address>
          <ul className="mt-4 flex gap-3 text-sm">
            {siteConfig.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/30 px-4 py-1.5 hover:bg-white hover:text-[var(--roast)]"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </p>
    </footer>
  );
}
