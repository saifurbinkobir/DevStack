import { useState } from "react";
import type { StackType } from "../types/type";
import Stacks from "./Stacks";
import SelectedStack from "./SelectedStack";

export interface StacksProps {
  stackPromise: Promise<StackType[]>;
}

const Technologies = ({stackPromise}: StacksProps) => {
  const [selectStack, setSelectStack] = useState<StackType[]>([]);
  return (
    <div className="container mx-auto md:pb-22">
        <div className="md:mt-10 grid md:grid-cols-12 gap-8">
        {/* Stacks Area */}
        <div className="col-span-9">
          <Stacks stackPromise={stackPromise} selectStack={selectStack} setSelectStack={setSelectStack}></Stacks>
        </div>
        {/* Selected Stack Area */}
        <div className="col-span-3">
          <SelectedStack selectStack={selectStack} setSelectStack= {setSelectStack}></SelectedStack>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
