export default function ComplexDashboardLayout({
    children,
    naruto,
    abc,
    notifications
  }: {
    children: React.ReactNode;
    naruto: React.ReactNode;
    abc: React.ReactNode;
    notifications: React.ReactNode;
  }) {
    return (
      <div>
        <div>{children}</div>
        <div>{naruto}</div>
        <div>{abc}</div>
        <div>{notifications}</div>
        <div>{naruto}</div>
      </div>
    );
  }
  