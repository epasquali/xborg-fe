import { Providers } from "./providers";

export const metadata = {
  title: "XBorg--Elisa Pasquali",
  description: "Hire Elisa, she's coool!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
