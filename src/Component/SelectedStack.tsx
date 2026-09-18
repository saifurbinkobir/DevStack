import type { StackType } from "../types/type";

export interface SelectedStackProps {
  selectStack: StackType[];
}

export default function SelectedStack({ selectStack }: SelectedStackProps) {
  return (
    <div className="p-5 border border-[#F1F5F9] rounded-2xl">
      <h2 className="text-[#0F172A] text-[16px] font-bold">Your Stack</h2>
      <p className="text-[#94A3B8] text-[12px] mt-1 mb-3">
        {selectStack.length === 0 ? "No technologies selected yet." :  `${selectStack.length} Technology Selected`}
      </p>
      {selectStack.map((stack) => (
        <div key={stack.id}>
          <h1>{stack.name}</h1>
        </div>
      ))}
    </div>
  );
}
