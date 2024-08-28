interface WorkspaceIdLayoutProps{
    children:React.ReactNode;
}
const WorkspaceLayout=({children}:WorkspaceIdLayoutProps)=>{
    return(
        <div>
            {children}
        </div>
    )
}
export default WorkspaceLayout