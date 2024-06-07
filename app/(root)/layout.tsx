"use client"
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Provider } from "react-redux";
import { store } from "../store";
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      

      <Provider store={store} >
        <div className="flex h-screen flex-col">
        <Header/>
        <main>{children}</main>  
       <Footer/>
        </div>
      </Provider>
      
    );
  }