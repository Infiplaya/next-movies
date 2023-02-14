import Link from "next/link";

export const Sidebar = () => {
  return (
    <aside className="flex flex-col items-center gap-5 bg-sky-700 text-slate-50 text-xl font-semibold p-10 h-screen sticky top-0">
      <Link href="/">Home</Link>
      <Link href="/tv">TV</Link>
      <Link href="/movies">Movies</Link>
    </aside>
  );
};
