function Navbar() {
  return (
    <nav className="navbar bg-base-100 shadow-lg">
      <div class="flex-none">
        <a
          href="https://acutewoof.is-a.dev"
          tabindex="0"
          class="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img alt="avatar" src="https://github.com/acutewoof.png" />
          </div>
        </a>
      </div>
      <div class="flex-1">
        <a
          href="https://acutewoof.is-a.dev"
          className="btn btn-ghost normal-case text-xl"
        >
          ACuteWoof
        </a>
      </div>
    </nav>
  );
}

export default Navbar