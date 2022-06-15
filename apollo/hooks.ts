import { enableMocks } from "./../constants";
import { useQuery } from "@apollo/client";
import { DocumentNode } from "graphql";
import mockQuery from "./mock";

export function usePolledQuery(query: DocumentNode) {
  if (!enableMocks) {
    return useQuery(query, {
      pollInterval: 500,
      fetchPolicy: "cache-and-network",
    });
  } else {
      return mockQuery(query)
  }
}
