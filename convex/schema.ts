import { defineSchema ,defineTable} from "convex/server";
import { authTables } from "@convex-dev/auth/server";
 import {v} from "convex/values"
 //it is used to define schema for our database
 //authTables contain default tables like users, authService types and etc.
const schema = defineSchema({
  ...authTables,
  workspaces:defineTable({
    name:v.string(),
    userId:v.id("users"),
    joinCode:v.string()

  })
});
 
export default schema;