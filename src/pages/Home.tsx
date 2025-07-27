const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 text-center">
      <div className="h-[100vh] w-full flex flex-col items-center justify-center">
        <h1 className="text-transparent bg-clip-text bg-[image:var(--cg)] font-extrabold text-7xl font-serif mb-6 z-0 leading-normal">
          Sorting <br />
          Visualizer
        </h1>
      </div>

      <div className="w-full h-[200vh] border-t space-y-6 z-10 p-30 bg-[image:var(--bg-main)] text-[var(--text)] text-3xl ">
        <div className="font-serif font-bold p-7 flex flex-col text-left ml-30">
          <label className="text-6xl font-extrabold m-3">About</label>
          <hr />
          <p className="mt-5">
            This is a Sorting Visualizer — an interactive tool that demonstrates
            how different sorting algorithms work by visually organizing various
            types of data. Whether you're working with numbers, letters, words,
            or boolean values, this tool brings the sorting logic to life.
          </p>
          <br />
          <br />
          <p>
            Instead of just lines or bars, this visualizer uses multiple formats
            to represent data, making it easier to see how items are compared,
            moved, and sorted over time. You will see animations that clearly
            show the inner workings of each algorithm as they operate step by
            step.
          </p>
          <br />
          <br />
          <p>
            Sorting algorithms like Bubble Sort, Merge Sort, Quick Sort, and
            Heap Sort all take different approaches to ordering data. Some
            repeatedly swap adjacent items, while others split and merge or
            select pivot points. Each one is optimized for certain situations,
            and this tool helps reveal their unique behaviors.
          </p>
          <br />
          <br />
          <p>
            This section introduces the visualizer and invites you to explore
            sorting algorithms through interactive examples. Whether you're
            sorting numbers, words, or logical values, you will get an intuitive
            understanding of how different algorithms make decisions and manage
            complexity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
