import { convexAuth } from "@convex-dev/auth/server";
import GitHub from "@auth/core/providers/github";
import Google from "@auth/core/providers/google"
import { Password } from "@convex-dev/auth/providers/Password";
import { DataModel } from "./_generated/dataModel"
//it is used to create the specific account or user creation methods natively by convex
const customPassword = Password<DataModel>({
  profile(params) {
    return {
      email: params.email as string,
      name: params.name as string,
    };
  },
});


export const { auth, signIn, signOut, store } = convexAuth({
  providers: [GitHub,Google,customPassword],
});
