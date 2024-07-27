import { Inter } from "next/font/google";
import Navbar from "./navbar/page";
import 'boxicons/css/boxicons.min.css';
import "./globals.css";
import Skills from "./skills/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Felipe Alarcon Contreras",
  description: "Proyecto: mi-portafolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
