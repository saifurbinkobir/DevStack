import type { Dispatch, SetStateAction } from "react";
import type { StackType } from "../types/type";
import { IoMdClose } from "react-icons/io";
export interface SelectedStackProps {
  selectStack: StackType[];
  setSelectStack: Dispatch<SetStateAction<StackType[]>>;
}

export default function SelectedStack({
  selectStack,
  setSelectStack,
}: SelectedStackProps) {
  // Remove One Stack
  const handleRemoveStack = (id: number) => {
    const remainingStack = selectStack.filter((stack) => stack.id !== id);
    setSelectStack(remainingStack);
  };
  //   Remove All Stack
  const handleRemoveAll = (): void => {
    setSelectStack([]);
  };
  return (
    <div className="p-5 border border-[#F1F5F9] rounded-2xl">
      <h2 className="text-[#0F172A] text-[16px] font-bold">Your Stack</h2>
      <p className="text-[#94A3B8] text-[12px] mt-1 mb-3">
        {selectStack.length === 0
          ? "No technologies selected yet."
          : `${selectStack.length} Technology Selected`}
      </p>
      {selectStack.length === 0 ? (
        <div className="border border-[#E2E8F0] border-dashed rounded-xl p-6">
          <p className="text-[#94A3B8] text-[12px]">Your stack is empty.</p>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 gap-1 mb-12">
            {selectStack.map((stack) => (
              <div key={stack.id}>
                <div className="border border-[#F1F5F9] rounded-[10px] py-1.5 px-2.5 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img
                      src={stack.icon}
                      alt={stack.name}
                      className="h-8 w-8"
                    />
                    <div>
                      <h3 className="text-[#0F172A] text-[10px] font-bold mb-1">
                        {stack.name}
                      </h3>
                      <p className="text-[#94A3B8] text-[6px] font-bold">
                        {stack.category}
                      </p>
                    </div>
                  </div>
                  <button
                    className="text-[#94A3B8] text-[16px] cursor-pointer"
                    onClick={() => handleRemoveStack(stack.id)}
                  >
                    <IoMdClose />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            className="cursor-pointer text-[#D82C20] rounded-lg border-[#ED8C85] border w-full py-2 text-[14px] font-bold"
            style={{ fontFamily: '"Inter", sans-serif' }}
            onClick={handleRemoveAll}
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
}
