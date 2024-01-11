export default function AboutLayout({
  children,
  naren,
  narendra,
}: {
  children: React.ReactNode;
  naren: React.ReactNode;
  narendra: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <div>{naren}</div>
      <div>{narendra}</div>
    </div>
  );
}
