import { NavLink } from "react-router-dom";

const navClasses =
  "uppercase text-sm font-medium tracking-wide hover:text-gold";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6">
      <h1 className="text-xl font-bold tracking-tight">Kristine Bjørgan</h1>
      <nav className="space-x-5">
        <NavLink to="/" className={navClasses}>
          Home
        </NavLink>
        <NavLink to="/projects" className={navClasses}>
          Projects
        </NavLink>
        <NavLink to="/about" className={navClasses}>
          About
        </NavLink>
        <NavLink to="/papers" className={navClasses}>
          Papers
        </NavLink>
        <NavLink to="/currently-building" className={navClasses}>
          DeLa
        </NavLink>
      </nav>
    </header>
  );
}
