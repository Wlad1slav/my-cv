import {cn} from '@/lib/utils'
import './globals.css';

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body
            className={cn(
                'antialiased',
            )}
        >
        {children}
        </body>
        </html>
    )
}
