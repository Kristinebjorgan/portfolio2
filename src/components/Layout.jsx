import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-offwhite">
      <Header />
      <main>{children}</main>
    </div>
  );
}
