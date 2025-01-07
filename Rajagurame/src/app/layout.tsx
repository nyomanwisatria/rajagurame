import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="acid">
      <body>
      <nav className="bg-white-700 shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              
            
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/">
                    <h1 className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                      
                    </h1>
                  </Link>
                  <Link href="/">
                    <p className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                      
                    </p>
                  </Link>
                  <Link href="/">
                    <p className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                    
                    </p>
                  </Link>
                  <Link href="/">
                    <p className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                      
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
