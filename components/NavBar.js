import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm mb-5 py-3">
      <div className="container-fluid">
        <h1 className="fw-bold">Hacker News</h1>
        <div className="navbar-nav ms-auto mb-2 ">
          <div className="nav-item">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </div>
          <div className="nav-item">
            <Link href="/newStories">
              <a className="nav-link">New Stories</a>
            </Link>
          </div>
          <div className="nav-item">
            <Link href="/topStories">
              <a className="nav-link">Top Stories</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
