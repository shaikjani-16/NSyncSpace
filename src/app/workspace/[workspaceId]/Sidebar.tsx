import { UserButton } from "@/features/auth/components/user-button";
import WorkSpaceName from "./workSpaceName";

const Sidebar = () => {
    return (<div>
        <aside className="w-[70px] h-full bg-[#481349] flex flex-col gap-y-4 items-center pt-[9px] pb-4">
        <div><WorkSpaceName/></div>
        <div className="flex flex-col items-center justify-center mt-auto gap-y-1">
            <UserButton/>
            </div>
        </aside>
    </div>  );
}
 
export default Sidebar;