interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <main>{children}</main>
    </div>
  );
}
