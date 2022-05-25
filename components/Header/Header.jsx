import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="header">
      <div className="header__title">
        <FaSearch fontSize={32} />
        <h1>Odds Tracker</h1>
      </div>
    </header>
  );
}
