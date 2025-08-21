import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Reyhan Mahardika Setiawan</h1>
      <p>Siswa XI RPL A SMKN 8 MALANG</p>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/tentang">Tentang</Link> |{" "}
        <Link to="/skills">Skills</Link>
      </nav>
    </header>
  );
}

export default Header;
