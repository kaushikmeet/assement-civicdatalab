export default function Navbar() {
  return (
    <div>
    <nav className="navbar-background text-white px-4 md:px-16 py-4 flex items-center justify-between">
      <h1 className="font-bold text-xl">CivicDataSpace</h1>
      <div className="hidden md:flex gap-6 text-sm">
        <a href="#">All Data</a>
        <a href="#">Sectors</a>
        <a href="#">Use Cases</a>
        <a href="#">Publishers</a>
        <a href="#">About Us</a>
      </div>
      <button className="bg-green-500 text-white px-4 py-1 rounded">Login / Sign Up</button>
    </nav>
    <div className="main-list py-2 px-8">
        <ol className="list-data">
            <li>Home</li>
            <li>About</li>
        </ol>
    </div>
    </div>
  );
}
