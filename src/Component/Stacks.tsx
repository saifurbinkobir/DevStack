import type { StackType } from "../types/type"
import { use, type Dispatch, type SetStateAction } from "react"
import StackCard from "./StackCard"

interface StacksProps {
  stackPromise: Promise<StackType[]>;
  selectStack: StackType[];
  setSelectStack: Dispatch<SetStateAction<StackType[]>>;
}


export default function Stacks({ stackPromise, selectStack, setSelectStack }: StacksProps) {
    const stacks = use(stackPromise)
    return(
        <div className="grid gap-5 grid-cols-[repeat(1,1fr)] md:grid-cols-[repeat(3,1fr)]">
            {stacks.map((stack:StackType) => (
                <StackCard key={stack.id} stack ={stack} selectStack={selectStack} setSelectStack={setSelectStack}></StackCard>
            ))}
        </div>
    ) 
}