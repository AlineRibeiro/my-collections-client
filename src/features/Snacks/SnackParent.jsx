import React, { useState, useEffect } from "react";

import { Snack } from "../../api/Snacks";

const SnackParent = () => {
  const [snackIndex, setSnackIndex] = useState([]);

  const fetchSnackIndex = () => {
    Snack.index().then((response) => {
      setSnackIndex(response);
    });
  };

  useEffect(() => {
    fetchSnackIndex();
  });

  const snackList = snackIndex.map((snack) =>
    <div key={snack.id}>
      <h3>{snack.name}</h3>
      <p>{snack.description}</p>
      <p>{snack.snack_owner_email}</p>
    </div>
  );

  return <div> { snackList }</div>;
};

export default SnackParent;
