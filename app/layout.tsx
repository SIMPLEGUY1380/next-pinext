import type { Metadata } from "next";
import Image from "next/image";
import localFont from "next/font/local";
import "./globals.css";

const iransans = localFont({
  src: [
    {
      path: "./fonts/iransans-DemiBold.ttf",
      style: "normal",
      weight: "600",
    },
    {
      path: "./fonts/iransans-Regular.ttf",
      style: "normal",
      weight: "500",
    },
  ],
});

export const metadata: Metadata = {
  title: "pinext",
  description: "pinext group",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${iransans.className}`}>
        {children}
        <div className="h-62.5 w-full flex flex-col items-center justify-between pb-10">
          <Image src="/logo-bottom.png" width={158} height={144} alt="" />
          <span className="block w-[80%] h-1 rounded-full bg-[#D3D3D3]"></span>
          <p className="text-[#8A8A8A] text-center w-[90%]">
            صاحب امتیاز تمامی حقوق وب سایت، متعلق به پینکست می‌باشد.
          </p>
        </div>
      </body>
    </html>
  );
}
