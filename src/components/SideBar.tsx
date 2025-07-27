import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
const SideBar = () => {
  const [menu, setMenu] = useState(false);
  const sideBarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMenu(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menu &&
        sideBarRef.current &&
        !sideBarRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menu]);

  useEffect(() => {
    console.log("Sidebar ref:", sideBarRef.current);
  }, []);

  return (
    <>
      <button
        ref={buttonRef}
        className="fixed top-4 left-4 text-3xl z-50 bg-[var(--svg-bg)] text-[var(--svg)] p-2 rounded shadow-md hover:bg-[var(--button-hover)]"
        onClick={() => setMenu(!menu)}
      >
        <FontAwesomeIcon icon={menu ? faTimes : faBars} />
      </button>

      <div
        ref={sideBarRef}
        className={`fixed top-0 left-0 h-full text-[var(--text)] w-64 bg-[var(--bg)] shadow-md z-40 transform transition-transform duration-500 ease-in-out ${
          menu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col text-xl gap-3 pt-20 px-4 transition-all duration-500 ease-in-out">
          <Link to="/" className="p-5 text-2xl hover:bg-[var(--hover)] rounded">
            Home
          </Link>
          <hr />
          <Link
            to="/BubbleSort"
            className="p-5 hover:bg-[var(--hover)] rounded"
          >
            Bubble Sort
          </Link>
          <Link
            to="/SelectionSort"
            className="p-5 hover:bg-[var(--hover)] rounded"
          >
            Selection Sort
          </Link>
          <Link
            to="/InsertionSort"
            className="p-5 hover:bg-[var(--hover)] rounded"
          >
            Insertion Sort
          </Link>
          <Link to="/MergeSort" className="p-5 hover:bg-[var(--hover)] rounded">
            Merge Sort
          </Link>
          <Link to="/QuickSort" className="p-5 hover:bg-[var(--hover)] rounded">
            Quick Sort
          </Link>
          <Link to="/HeapSort" className="p-5 hover:bg-[var(--hover)] rounded">
            Heap Sort
          </Link>
          <hr />
          <Link
            to="/AlgorithmAnalyzer"
            className="p-5 hover:bg-[var(--hover)] rounded"
          >
            Algorithm Analyzer
          </Link>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
