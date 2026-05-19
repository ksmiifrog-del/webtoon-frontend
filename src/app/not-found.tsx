import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-wt-bg px-4">
      <div className="text-center max-w-sm">
        <p className="text-5xl font-black text-wt-primary mb-3">404</p>
        <h2 className="text-[16px] font-bold text-wt-text mb-1">Хуудас олдсонгүй</h2>
        <p className="text-[13px] text-wt-text-muted mb-5">
          Таны хүссэн хуудас байхгүй эсвэл өөр байршил руу шилжсэн байна.
        </p>
        <Link
          href="/"
          className="inline-block rounded-lg bg-wt-primary px-5 py-2.5 text-[13px] font-bold text-white hover:bg-wt-primary-dark transition-colors"
        >
          Нүүр хуудас руу буцах
        </Link>
      </div>
    </div>
  );
}
