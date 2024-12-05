import Footer from "./components/elements/Footer";
import NavBar from "./components/NavBar";
import HomePage from "./components/slides/HomePage";
import { CrispBanner } from "./components/crisp";

function App({ pageProps }) {
  return (
    <>
      <CrispBanner />
      <div className="overflow-x-hidden max-w-[100vw] p-3 md:p-4 text-green-200">
        <NavBar />
        <HomePage {...pageProps} /> {/* Passing pageProps to HomePage */}
        <Footer />
      </div>
    </>
  );
}

export default App;
