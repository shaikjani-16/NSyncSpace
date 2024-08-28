
import { Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle } from "@/components/ui/dialog" 
import { useCreateWorkspacemodel } from "../store/create-workspace"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCreateWorkspace } from "../api/use-create-workspace"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
export default function  CreateWorkSpaceModel(){
    const router = useRouter();
    const [name,setName]=useState("")
    const {mutate,isPending,isError,}=useCreateWorkspace()
    const [open,setOpen]=useCreateWorkspacemodel()
    const handleClose=()=>{
        setOpen(false);
        setName("")
    }
    const handleSubmit=async (e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      mutate({name},{
        onSucess(id){ 
            toast.success("Workspace created")
            router.push(`/workspace/${id}`)
            handleClose()
        }
      })
    }
    return(
    <Dialog open={open} onOpenChange={handleClose} >
        <DialogContent>
            <DialogHeader>
                <DialogTitle className="text-2xl">
                            Create a workspace
                </DialogTitle>
            </DialogHeader>
            <form className="space-y-3" onSubmit={handleSubmit}>
                <div className="flex space-x-2 text-2xl">
        <Input className="text-lg text-red-600" value={name} onChange={(e)=>setName(e.target.value)} disabled={isPending} required autoFocus minLength={3} placeholder="Workspace : 'Work', 'Personal'"/>
 <div className="flex justify-center">
    <Button disabled={isPending} type="submit">
Create
    </Button>
    </div>       </div>
            </form>
        </DialogContent>
    </Dialog>
    )
}

