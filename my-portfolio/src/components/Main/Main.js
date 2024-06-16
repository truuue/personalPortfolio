import Scroll from "../infiniteScrollingIcons/Scroll";
import SlidingText from "../slidingText/slidingText";
import "./Main.css";

const Main = () => {
  return (
    <main>
      {/** Home section */}
      <div
        id="home"
        className="h-screen flex flex-col items-center justify-center  mt-[-2rem]"
      >
        <h1 className="text-6xl font-bold text-center mb-5">
          <span>&#128075;</span> Hello, I'm Noah
        </h1>

        {/** sliding text component */}
        <SlidingText />
      </div>

      {/** About section */}
      <div id="about" className="h-screen flex flex-col justify-center">
        <h2 className="text-5xl font-bold text-center mb-10 underline">
          About
        </h2>

        <div>
          <p className="text-lg text-center">
            Nice to meet you! like I said before my name is Noah and i'm a
            fullstack developer (but I have a litle preferencis for the
            front-end development <span>&#129312;</span>)
          </p>
        </div>

        <h3 className="text-4xl font-bold text-center">My stacks</h3>

        {/** infinite scroll component */}
        <div className="flex justify-end">
          <Scroll />
        </div>
      </div>
    </main>
  );
};

export default Main;
