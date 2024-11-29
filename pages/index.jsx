import Head from "next/head";
import Footer from "../components/elements/Footer";
import NavBar from "../components/NavBar";
import HomePage from "../components/slides/HomePage";
import { CrispBanner } from "../components/crisp";

export default function Home() {
  return (
    <>
      <Head>
        <title>GitHub Profile ReadMe Maker</title>
        <meta name="title" content=" GitHub Profile ReadMe Maker" />
        <meta
          name="description"
          content="Best Profile Generator, Create your perfect GitHub Profile ReadMe in the best possible way. Lots of features and tools included, all for free !"
        />
        <meta name="copyright" content="Subhadip Manna" />
        <meta
          property="og:title"
          content="GPRM : GitHub Profile ReadMe Maker"
        />
        <meta
          property="og:description"
          content="Best Profile Generator, Create your perfect GitHub Profile ReadMe in the best possible way. Lots of features and tools included, all for free !"
        />
        <meta
          property="x:title"
          content="GPRM : GitHub Profile ReadMe Maker"
        />
        <meta
          property="x:description"
          content="Best Profile Generator, Create your perfect GitHub Profile ReadMe in the best possible way. Lots of features and tools included, all for free !"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <>
        <CrispBanner />
        <div className="overflow-x-hidden max-w-[100vw] p-3 md:p-4 text-green-200">
          <NavBar />
          <HomePage />
          <Footer />
        </div>
      </>
    </>
  );
}
