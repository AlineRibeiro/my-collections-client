import { baseUrl } from "../config";

export const Collection = {
  index() {
    return fetch(`${baseUrl}/collections`, {}).then((res) => res.json());
  },

  create(requestBody) {
    return fetch(`${baseUrl}/collections`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(requestBody),
    }).then((res) => res.json());
  },
};
