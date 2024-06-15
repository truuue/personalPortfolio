import Scroll from "../infiniteScrollingIcons/Scroll";
import "./Main.css";

const Main = () => {
  return (
    <main className="h-screen">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold text-center">
            <span>&#128075;</span> Hello, I'm Noah
          </h1>
          <p className="text-lg text-center">I'm a Full Stack Developer</p>
        </div>
      {/** <Scroll /> */}
    </main>
  );
};

export default Main;
