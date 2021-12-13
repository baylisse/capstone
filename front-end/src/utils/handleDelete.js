import { deleteSeated } from "./api";

export default async function handleDelete(table) {
  const abortController = new AbortController();
  let result = window.confirm(
    "Is this table ready to seat new guests? \n \n This cannot be undone."
  );
  if (result) {
    return deleteSeated(table, abortController.signal).then();
  }
}