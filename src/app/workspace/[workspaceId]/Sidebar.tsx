import { UserButton } from "@/features/auth/components/user-button";
import WorkSpaceName from "./workSpaceName";
import {SideBarButton} from "./SidebarButton";
import { Bell, Home, MessageSquare, MoreHorizontal } from "lucide-react";

const Sidebar = () => {
    return (<div>
        <aside className="w-[70px] h-full bg-[#481349] flex flex-col gap-y-4 items-center pt-[9px] pb-4">
       <WorkSpaceName/>
       <SideBarButton icon={Home} label="Home" isActive/>
       <SideBarButton icon={MessageSquare} label="DM" />
       <SideBarButton icon={Bell} label="Bell" />
       <SideBarButton icon={MoreHorizontal} label="More" />
        <div className="flex flex-col items-center justify-center mt-auto gap-y-1">
            <UserButton/>
            </div>
        </aside>
    </div>  );
}
 
export default Sidebar;