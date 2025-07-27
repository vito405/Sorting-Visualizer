const Footer = () => {
  return (
    <footer className="w-full h-[33vh] bg-[image:var(--bg-main)] text-[var(--text)] ">
      <div className="max-w-6xl mx-auto px-8 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
        <div>
          <h2 className="text-2xl font-semibold mb-3 underline">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Visualizations
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3 underline">My Info</h2>
          <p className="text-sm leading-relaxed">
            Created by Vito Mortalo
            <br />
            Eamil@gamil.com
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3 underline">GitHub</h2>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:underline"
          >
            github.com/yourusername
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

//quick links
//my email
//github link
//made by
