import { baseUrl } from "../config";

export const Session = {

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

  destroy() {
    return fetch(`${baseUrl}/users/sign_out`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then();
  },
};
