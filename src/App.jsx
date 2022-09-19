import TreeBars from "./components/TreeBars";
import TreeDots from "./components/TreeDots";

function App() {
  return (
    <div className="mx-auto p-20 absolute">
      <h1 className="text-4xl">Lottie React Demo </h1>
      <section className="w-full h-[150vh] gap-6 flex justify-center items-center">
        <TreeBars />
        <TreeDots />
      </section>
    </div>
  );
}

export default App;
