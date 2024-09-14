import '@/app/globals.css'
import Link from "next/link";
import {personal, urls} from "@/lib/cv-info";


export default function HomeLayout({children}: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link href={urls.github} className="text-sm font-medium hover:underline underline-offset-4"
                          prefetch={false}>
                        Github
                    </Link>
                    <Link href={urls.telegram} className="text-sm font-medium hover:underline underline-offset-4"
                          prefetch={false}>
                        Telegram
                    </Link>
                </nav>
            </header>
            {children}

            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-muted-foreground">&copy; 2024 {personal.name}. All rights reserved.</p>
            </footer>
        </div>
    )
}
