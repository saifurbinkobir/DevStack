import type { StackType } from "../types/type";
import Stacks from "./Stacks";

export interface StacksProps {
    stackPromise: Promise<StackType[]>
}

const Technologies = ({stackPromise}: StacksProps) => {
  return (
    <div className="container mx-auto md:pb-22">
        <div className="md:mt-10 grid md:grid-cols-12 gap-8">
        {/* Stacks Area */}
        <div className="col-span-9">
            
            <Stacks stackPromise={stackPromise}></Stacks>
        </div>
        {/* Selected Stack Area */}
        <div className="col-span-3 bg-red-500">
            <h2>Testing</h2>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
