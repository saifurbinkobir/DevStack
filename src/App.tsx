import "./App.css";
import Banner from "./Component/Banner";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import type { StackType } from "./types/type";
import Technologies from "./Component/Technologies";
import { Suspense } from "react";

const stackPromise = async (): Promise<StackType[]> => {
  const res = await fetch("/public/data.json");
  const data = await res.json();
  return data;
};

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <div className="container mx-auto">
        {/* Technologies Top Area */}
        <h2
          style={{ fontFamily: '"Inter", sans-serif' }}
          className="text-[#0F172A] md:text-[36px] font-extrabold"
        >
          Explore the{" "}
          <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-[#64748B] text-[18px] text-center md:text-left">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Technologies stackPromise={stackPromise()}></Technologies>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
