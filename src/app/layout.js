import { Iceland } from "next/font/google";
import Navbar from "./navbar/page";
import 'boxicons/css/boxicons.min.css';
import "./globals.css";

const font = Iceland({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: "Felipe Alarcon Contreras",
  description: "Proyecto: mi-portafolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
