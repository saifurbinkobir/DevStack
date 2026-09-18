import { useState, type Dispatch, type SetStateAction } from "react";
import type { StackType } from "../types/type";
import { FaStar } from "react-icons/fa";

export interface StackCardProps {
  stack: StackType;
  selectStack: StackType[];
  setSelectStack: Dispatch<SetStateAction<StackType[]>>;
}

const badgeStyles: Record<string, string> = {
  Popular: "bg-blue-50 text-blue-500",
  Versatile: "bg-green-50 text-green-500",
  Fast: "bg-orange-50 text-orange-500",
  Standard: "bg-green-50 text-green-500",
  "Top SQL": "bg-blue-50 text-blue-500",
  Cache: "bg-red-50 text-red-500",
  Ubiquitous: "bg-yellow-50 text-yellow-600",
  Essential: "bg-blue-50 text-blue-500",
  Robust: "bg-blue-50 text-blue-500",
  Modern: "bg-cyan-50 text-cyan-500",
  Containers: "bg-blue-50 text-blue-500",
};

export default function StackCard({ stack, selectStack, setSelectStack }: StackCardProps) {
  const [isAdded, setIsAdded] = useState(false);
  const handleStackBTN = () => {
    setIsAdded(true);
    setSelectStack([...selectStack, stack]);
    console.log(setSelectStack);
  };
  return (
    <div key={stack.id} className="p-5 rounded-2xl border border-[#F1F5F9] ">
      <div className="flex justify-between items-center">
        <img src={stack.icon} alt={stack.name} className="h-8 w-8" />
        <p
          className={`px-2.5 py-1 rounded-full text-[10px] ${badgeStyles[stack.badge]}`}
        >
          {stack.badge}
        </p>
      </div>
      <h3 className=" text-[#0F172A] text-[18px] font-bold mb-1.5 mt-3">
        {stack.name}
      </h3>
      <p className="text-[#64748B] text-[12px] font-normal mb-4">
        {stack.description}
      </p>
      <div className="flex justify-between items-center pt-2 border-t mb-4 border-[#F8FAFC]">
        <p className="py-0.5 px-2 bg-[#F1F5F9] rounded-sm text-[#475569] text-[11px] font-medium">
          {stack.category}
        </p>
        <p className="text-[#64748B] text-[11px] font-medium">
          {stack.difficulty}
        </p>
        <p className="flex gap-1 items-center text-[#334155] text-[11px] font-semibold">
          <span className="text-[#FBBF24]">
            <FaStar />
          </span>
          {stack.rating}
        </p>
      </div>
      <button
        className="bg-[#0A0F1D] py-2.5 w-full rounded-lg text-white text-[12px] font-medium cursor-pointer"
        onClick={handleStackBTN}
        disabled={isAdded}
      >
        {isAdded === true ? "Stack Added" : "Add to Stack"}
      </button>
    </div>
  );
}
