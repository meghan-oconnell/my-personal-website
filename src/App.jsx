import { profileLinks } from "./data/links";

function App() {
  return (
    <main>
      <h1>Meghan OConnell</h1>
      <p className="role">software engineer</p>
      <div className="profiles" aria-label="Profiles">
        {profileLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.site}
          </a>
        ))}
      </div>
    </main>
  );
}

export default App;
