import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <div id="logoBox">
        <h3 id="logo">Logo</h3>
      </div>
      <nav>
        <Link className="nav-button" href="/">
          Home
        </Link>
        <Link className="nav-button" href="/events">
          Events
        </Link>
        <Link className="nav-button" href="/about-us">
          About Us
        </Link>
      </nav>
      <div id="signUpAndSearchBox">
        <h3 id="signUpAndSearch">Login/SignUp & Search Buttons</h3>
      </div>
    </header>
  );
};
