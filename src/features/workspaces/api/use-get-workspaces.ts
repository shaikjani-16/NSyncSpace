import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
//getting all the workspaces
export const useGetWorkspaces = () => {
  const data = useQuery(api.workspaces.getAllWorkspaces);
  const isLoading = data === undefined;

  return { data, isLoading };
};