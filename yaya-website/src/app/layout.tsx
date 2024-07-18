import "@mantine/core/styles.css";
import {
  BackgroundImage,
  ColorSchemeScript,
  MantineProvider,
  Stack,
} from "@mantine/core";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const metadata = {
  title: "YAYA CONSTRUCTION",
  description: "Landing Page for YAYA CONSTRUCTION",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body
        style={{
          background: "#FBFBFB",
        }}
      >
        <MantineProvider>
          <Header />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
