import { useState } from "react";
import type { StackType } from "../types/type";
import Stacks from "./Stacks";
import SelectedStack from "./SelectedStack";

export interface StacksProps {
  stackPromise: Promise<StackType[]>;
}

const Technologies = ({ stackPromise }: StacksProps) => {
  const [selectStack, setSelectStack] = useState<StackType[]>([]);
  return (
    <div className="container mx-auto md:pb-22 px-3.5 md:px-0">
      <div>
        {/* Technologies Top Area */}
        <h2
          style={{ fontFamily: '"Inter", sans-serif' }}
          className="text-[#0F172A] text-[24px] text-center md:text-left md:text-[36px] font-extrabold"
        >
          Explore the{" "}
          <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-[#64748B] md:text-[18px] text-[12px] mb-5 md:mb-0 text-center md:text-left">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="md:mt-10 grid md:grid-cols-12 gap-8">
        {/* Stacks Area */}
        <div className="col-span-12 md:col-span-9">
          <Stacks
            stackPromise={stackPromise}
            selectStack={selectStack}
            setSelectStack={setSelectStack}
          ></Stacks>
        </div>
        {/* Selected Stack Area */}
        <div className="col-span-12 md:col-span-3">
          <SelectedStack
            selectStack={selectStack}
            setSelectStack={setSelectStack}
          ></SelectedStack>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
