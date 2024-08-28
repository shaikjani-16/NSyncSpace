"use client"
import { useEffect, useState } from "react"
import CreateWorkSpaceModel from "@/features/workspaces/components/create-modal-workspaces"
export default function Models(){
    const [mounted,setMounted]=useState(false);
    useEffect(()=>{
        setMounted(true);
    },[])
    if(!mounted) return null;
return(
    <CreateWorkSpaceModel/>
)
}