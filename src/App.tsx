import "./App.css";
import Banner from "./Component/Banner";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import type { StackType } from "./types/type";
import Technologies from "./Component/Technologies";
import { Suspense } from "react";

const stackPromise = async (): Promise<StackType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Suspense fallback={
        <div className="container mx-auto px-3 md:px-0 my-5">
          <div className="border border-[#F1F5F9] rounded-2xl py-10 text-center">
          <h1 className="text-[#0F172A] text-[24px] text-center md:text-[36px] font-extrabold">Please Hold a Moment...Technologies are Loading...</h1>
        </div>
        </div>
      }>
        <Technologies stackPromise={stackPromise()}></Technologies>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
