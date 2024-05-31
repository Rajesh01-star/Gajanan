import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "./Components/CustomCursor";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gajanan Driving School",
  description: "Making driving safer and effective",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/gajananfav.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <CustomCursor />
      </body>
    </html>
  );
}
