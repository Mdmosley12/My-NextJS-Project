import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <div id="logoBox">
        <h3>Logo</h3>
      </div>
      <nav>
        <Link class="nav-button" href="/">
          Home
        </Link>
        <Link class="nav-button" href="/events">
          Events
        </Link>
        <Link class="nav-button" href="/about-us">
          About Us
        </Link>
      </nav>
      <div id="signUpAndSearchBox">
        <h3>Login/SignUp & Search Buttons</h3>
      </div>
    </header>
  );
};
