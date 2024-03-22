import { TypedSupabaseClient } from "@/utils/types";

export function getNotes(client: TypedSupabaseClient) {
  return client
    .from("notes")
    .select(
      `
      id,
      title
    `,
    )
    .throwOnError();
}
