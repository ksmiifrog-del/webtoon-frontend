"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthStore } from "@/stores/auth";
import { LogoLarge } from "@/components/common/Logo";

export default function SignupPage() {
  const router = useRouter();
  const { signup } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signup(email, password, nickname);
      router.push("/login");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Бүртгэл амжилтгүй боллоо.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-7rem)] items-center justify-center bg-wt-bg px-4">
      <div className="w-full max-w-sm">
        <div className="rounded-2xl bg-wt-bg-card p-7 border border-wt-border">
          <div className="text-center mb-7">
            <div className="mb-2"><LogoLarge /></div>
            <p className="text-[13px] text-wt-text-muted">Бүртгүүлээд вебтүүнээ үзэж эхлээрэй</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-[11px] font-medium text-wt-text-muted mb-1">И-мэйл</label>
              <input
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-wt-border bg-wt-bg-elevated px-3.5 py-2.5 text-[13px] text-wt-text placeholder-wt-text-muted outline-none transition-colors focus:border-wt-primary/50 focus:ring-1 focus:ring-wt-primary/20"
                required
              />
            </div>
            <div>
              <label className="block text-[11px] font-medium text-wt-text-muted mb-1">Хоч нэр</label>
              <input
                type="text"
                placeholder="2~30 тэмдэгт"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className="w-full rounded-lg border border-wt-border bg-wt-bg-elevated px-3.5 py-2.5 text-[13px] text-wt-text placeholder-wt-text-muted outline-none transition-colors focus:border-wt-primary/50 focus:ring-1 focus:ring-wt-primary/20"
                required
              />
            </div>
            <div>
              <label className="block text-[11px] font-medium text-wt-text-muted mb-1">Нууц үг</label>
              <input
                type="password"
                placeholder="8~20 тэмдэгт"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-wt-border bg-wt-bg-elevated px-3.5 py-2.5 text-[13px] text-wt-text placeholder-wt-text-muted outline-none transition-colors focus:border-wt-primary/50 focus:ring-1 focus:ring-wt-primary/20"
                required
              />
            </div>
            {error && (
              <div className="rounded-lg bg-wt-red/10 px-3 py-2">
                <p className="text-[12px] text-wt-red">{error}</p>
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-wt-primary py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-wt-primary-dark disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                </span>
              ) : (
                "Бүртгүүлэх"
              )}
            </button>
          </form>
        </div>

        <p className="mt-5 text-center text-[13px] text-wt-text-muted">
          Аль хэдийн бүртгэлтэй юу?{" "}
          <Link href="/login" className="font-bold text-wt-primary hover:underline">
            Нэвтрэх
          </Link>
        </p>
      </div>
    </div>
  );
}
