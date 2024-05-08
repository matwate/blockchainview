import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html>
        <body>
        <Toaster />
            {children}
            
        </body>
      </html>
    </>
  );
}
