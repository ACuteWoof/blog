import Link from "next/link";

export default function Links() {
    return (<div className="flex flex-row gap-4 items-center justify-center ">
        <Link href="/" className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300">Home</Link>
        <Link href="https://acutewoof.is-a.dev" className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300">Portfolio</Link>
        <Link href="https://buymeacoffee.com/acutewoof" className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300">Donate</Link>

    </div>
    )
}