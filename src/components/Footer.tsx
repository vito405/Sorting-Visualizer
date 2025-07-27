const Footer = () => {
  return (
    <footer className="w-full h-[33vh] bg-[image:var(--bg-main)] text-[var(--text)] ">
      <div className="max-w-6xl mx-auto px-8 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
        <div>
          <h2 className="text-2xl font-semibold mb-3 underline">My Info</h2>
          <p className="text-sm leading-relaxed">
            Created by Vito Mortalo
            <br />
            vitomortalo99@gamil.com
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3 underline">GitHub</h2>
          <a
            href="https://github.com/vito405/Sorting-Visualizer"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:underline"
          >
            github.com/vito405/Sorting-Visualizer
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
