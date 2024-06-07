
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { Provider } from "react-redux";
import { store } from "./store";

const poppins = Poppins({ 
  subsets: ["latin"],
weight:['400','500','600','700'],
variable:'--font-poppins',
});

export const metadata: Metadata = {
  title: "Evently",
  description: "Evently is a platform for event management",
  icons:{
    icon:'/assets/images/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="retro">
      <ClerkProvider>
      <body className={poppins.variable}>{children}</body>
      </ClerkProvider>
    </html>
    
    
    
  );
}
