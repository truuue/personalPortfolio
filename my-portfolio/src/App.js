import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <div className="fixed inset-0 h-full w-full z-[-1] bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
    </>
  );
}

export default App;
