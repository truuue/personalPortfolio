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
      <div id="about" className="h-screen flex flex-col justify-evenly">
        <div>
          <h2 className="text-5xl font-bold text-center mb-10 underline">
            About
          </h2>

          <div className=" flex flex-row items-center">
            <img
              className="w-72 h-auto mx-auto rounded-full"
              src="/images/IMG_8174.png"
              alt="noah's pic"
            ></img>
            <div className="w-3/6 mx-auto">
              <p className="text-lg text-center">
                Nice to meet you! like I said before my name is Noah and i'm a
                fullstack developer.I'm a passionate developer who loves to be a
                part of the development of web applications.
                <br />
                I'm always looking for new challenges and I'm always ready to
                learn new things. I'm a fullstack developer, so I can work on
                both the front-end and the back-end of a web application.
                <br />I have a little preference for the front-end development
                so i'm more comfortable with it !<span>&#129312;</span>
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-4xl font-bold text-center">My Tech</h3>

        {/** infinite scroll component */}
        <div className="flex justify-end">
          <Scroll />
        </div>
      </div>
    </main>
  );
};

export default Main;
