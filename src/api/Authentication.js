import { baseUrl } from "../config";

export const Authentication = {
  create(requestBody) {
    return fetch(`${baseUrl}/users/sign_in`, {
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
