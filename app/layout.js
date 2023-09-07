import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Nike Landing Page",
    description: "Created for educational purpose only.",
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>
                <main>
                    <Nav />
                    {children}
                </main>
            </body>
        </html>
    );
}
