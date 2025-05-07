export default function digitalDetails({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <footer>
        <h1 className="bg-blue-300 text-black"> footer of digital</h1>
      </footer>
    </>
  );
}
