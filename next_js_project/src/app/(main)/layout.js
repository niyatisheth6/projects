import Header from "../shared/header/Header";

export default function MainLayout({ children }) {
  return (
    <div className="relative">
      <Header />
      {children}
    </div>
  );
}
