import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Doc,Id} from "../../../../convex/_generated/dataModel";
import { useCallback, useState } from "react";
import { useMemo } from "react";
type RequestType={name:string};
type ResponseType=Id<"workspaces">|null;
//mutation are used to change the data or create the data
type Options={
    onSucess?:(data:ResponseType)=>void;
    onError?:(error:Error)=>void;
    onSettled?:()=>void;
    throwError?:boolean
}
export const useCreateWorkspace=()=>{
    const [data,setData]=useState<ResponseType>(null);
    const [error,setError]=useState<Error|null>(null);
  
    const [status,setStatus]=useState<"success"|"error"|"settled"|"pending"|null>(null)
    const isPending = useMemo(()=>status==="pending",[status])
    const isSuccess = useMemo(()=>status==="success",[status])
    const isError = useMemo(()=>status==="error",[status])
    const isSettled = useMemo(()=>status==="settled",[status])
    const mutation=useMutation(api.workspaces.createWorkSpace);
    const mutate= useCallback(async(values:any,options:Options)=>{
            try {
                setData(null);
                setError(null);
               setStatus("pending")
                const response = await mutation(values);
                options?.onSucess?.(response);
                return response;
            } catch (error) {
                options?.onError?.(error as Error);
                if(options?.throwError)
                {throw error;}
            }finally{
                setStatus("settled")
                options?.onSettled?.();
            }
    },[mutation])
    return {mutate,data,isError,error,isPending,isSettled,isSuccess}
}