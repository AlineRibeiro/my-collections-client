import { baseUrl } from "../config";

export const CurrentUser = {
  show() {
    return fetch(`${baseUrl}/current_user`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => res.json());
  },
};
