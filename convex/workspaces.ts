import {query,mutation} from "./_generated/server"
import { v } from "convex/values"
import { auth } from "./auth"
//mutations are used to insert the data or change the data
//Convex automatically creates the function in api folder and can accessed anytwherr using the api
//file 
export const createWorkSpace = mutation({
   args:{
      name:v.string(),
   },
   handler:async(ctx,args)=>{
      //ctx contains all the information about current session
      // we can access db from the ctx [context]
      //auth is used to get the user or the sessions Id's etc
      const userId = await  auth.getUserId(ctx);
      if(!userId) throw new Error("Not logged in");
      // Update joincode to dynamic join code
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