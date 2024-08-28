"use client"
import {
    Avatar,AvatarFallback,AvatarImage
} from "@/components/ui/avatar"
import { DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { useCurrentUser } from "../api/use-current-user"
import { Loader, LogOut } from "lucide-react"
import { useAuthActions } from "@convex-dev/auth/react";
export const UserButton=()=>{
    const {data,isLoading}=useCurrentUser();
    const {signOut}=useAuthActions()

    if(isLoading) {
        return <Loader className="size-4 animate-spin text-muted-foreground"/>
    }
    if(!data) return;
    const {image,name,email}=data;
    const avatarSecondary = name!.charAt(0).toUpperCase()
    return(
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger className="outline-none  relative">
            <Avatar className="size-10 hover:opacity-75 transition">
                <AvatarImage alt={name} src={image}/>
                <AvatarFallback className="bg-red-500 text-white">
                    {avatarSecondary}
                </AvatarFallback>
            </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" side="right" className="w-60">
                    <DropdownMenuItem onClick={()=>{
                        signOut()
                       }}>
                       <LogOut className="size-4 mr-2"/>
                       Log out
                    </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}