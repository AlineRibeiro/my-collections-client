import { baseUrl } from "../config";

export const Company = {
  index() {
    return fetch(`${baseUrl}/companies`, {}).then((res) => res.json());
  },

  create(requestBody) {
    return fetch(`${baseUrl}/companies`, {
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
