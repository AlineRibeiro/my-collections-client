import { baseUrl } from "../config";

  export  const Snack = {
  index() {
    return fetch(`${baseUrl}/snacks`, {
      credentials: "include"
    }).then(res => res.json());
  },
};


