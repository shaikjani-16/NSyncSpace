"use client"
import { useParams } from "next/navigation"
import { useWorkspaceId } from "@/hooks/use-workspace-id"
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace"
import Toolbar from "./toolbar"
const WorkspaceIdPage=()=>{
    const workspaceId=useWorkspaceId()
    const {data}=useGetWorkspace({id:workspaceId})
    return(
        <div>
            <Toolbar/>
            ID:{JSON.stringify(data)}
        </div>
    )   
}
export default WorkspaceIdPage