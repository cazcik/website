export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="prose -mt-5 lowercase">{children}</div>;
}
