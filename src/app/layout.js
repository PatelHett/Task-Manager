// Import necessary modules and styles
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { Inter } from "next/font/google";
import CustomNavbar from "@/components/CustomNavbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import UserProvider from "@/context/userProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import Swal from "sweetalert2";

// Import SweetAlert2 library (assuming you want to use it, but it's not clear from your code)

// Initialize the Inter font with subsets
const inter = Inter({ subsets: ["latin"] });

// Define the RootLayout component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <ToastContainer />
          <CustomNavbar />
          <div className="mt-0">{children}
          <SpeedInsights/>
          </div>

          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
