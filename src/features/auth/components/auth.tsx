"use client"
//always run bunx convex dev for backend
// also bunx run dev
import { useState } from "react"
import { signInFlow } from "../types"
import { SignInCard } from "./signin-card"
import { SignUpCard } from "./signup-card"
export const Auth=()=>{
    //in Usestate the arg1 is org value and arg2 is a function can be used as a prop
    const [state,setState] = useState<signInFlow>("signIn");
    return(
        <div className="h-full flex items-center justify-center bg-[#5C3B58]">
            <div className="md:h-auto md:w-[420px]">
                {state==="signIn"?<SignInCard setState={setState}/>:<SignUpCard setState={setState}/>}
            </div>
        </div>
    )
}








