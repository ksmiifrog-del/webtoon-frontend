"use client";

import Link from "next/link";
import { LogoSmall } from "@/components/common/Logo";

export default function Footer() {
  return (
    <footer className="bg-wt-bg-card border-t border-wt-border">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
          {/* Logo + desc */}
          <div>
            <Link href="/">
              <LogoSmall />
            </Link>
            <p className="mt-2 text-[12px] leading-relaxed text-wt-text-muted max-w-xs">
              Өдөр бүр шинэ вебтүүнтэй танилцаарай
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-10">
            <div>
              <h3 className="text-[12px] font-bold text-wt-text-secondary mb-3">Үйлчилгээ</h3>
              <ul className="space-y-2">
                <FooterLink href="/" label="Өдөр тутмын" />
                <FooterLink href="/completed" label="Дууссан" />
                <FooterLink href="/popular" label="Тренд" />
              </ul>
            </div>
            <div>
              <h3 className="text-[12px] font-bold text-wt-text-secondary mb-3">Тусламж</h3>
              <ul className="space-y-2">
                <FooterLink href="/notice" label="Мэдэгдэл" />
                <FooterLink href="/faq" label="Түгээмэл асуулт" />
                <FooterLink href="/terms" label="Үйлчилгээний нөхцөл" />
                <FooterLink href="/privacy" label="Нууцлалын бодлого" />
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-5 border-t border-wt-border">
          <p className="text-[11px] text-wt-text-muted">
            &copy; 2026 Moonveil Atelier. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-[12px] text-wt-text-muted transition-colors hover:text-wt-text-secondary"
      >
        {label}
      </Link>
    </li>
  );
}
