import {query,mutation} from "./_generated/server"
import { v } from "convex/values"
import { auth } from "./auth"
export const createWorkSpace = mutation({
   args:{
      name:v.string(),
   },
   handler:async(ctx,args)=>{
      const userId = await  auth.getUserId(ctx);
      if(!userId) throw new Error("Not logged in");
      const joinCode="123456";
      const workSpaceId = await ctx.db.insert("workspaces",{name:args.name,userId,joinCode})
      const workspace = await ctx.db.get(workSpaceId)
         return workSpaceId;
   }
})
export const getAllWorkspaces=  query({
args:{},
handler:async (ctx)=>{
   return await ctx.db.query("workspaces").collect()
}
})
export const getById = query({
   args:{id:v.id("workspaces")},
   handler:async(ctx,args)=>{
      const userId=await auth.getUserId(ctx);
      if(!userId){
         throw new Error("Unauthorized")
      }
      return await ctx.db.get(args.id)
   }
})