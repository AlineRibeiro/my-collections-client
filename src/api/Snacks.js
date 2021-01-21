import { baseUrl } from "../config";

export const Snack = {
  index() {
    return fetch(`${baseUrl}/snacks`, {}).then((res) => res.json());
  },
};
