import { baseUrl } from "../config";

export const Snack = {
  index() {
    return fetch(`${baseUrl}/snacks`, {}).then((res) => res.json());
  },

  create(requestBody) {
    return fetch(`${baseUrl}/snacks`, {
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
