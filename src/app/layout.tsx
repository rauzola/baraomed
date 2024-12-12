import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import './global.css'; // Importa os estilos globais

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
