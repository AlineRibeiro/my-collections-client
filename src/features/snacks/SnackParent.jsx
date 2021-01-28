import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Snack } from "../../api/Snacks";
import { loadSnacks } from "./snackSlice";

const SnackParent = () => {
  const dispatch = useDispatch();

  const fetchSnackIndex = () => {
    Snack.index().then((response) => {
      dispatch(loadSnacks(response));
    });
  };

  useEffect(() => {
    fetchSnackIndex();
  });

  // const snackList = snackIndex.map((snack) =>
  //   <div key={snack.id}>
  //     <h3>{snack.name}</h3>
  //     <p>{snack.description}</p>
  //     <p>{snack.snack_owner_email}</p>
  //   </div>
  // );

  return <div>there will be a list here</div>;
};

export default SnackParent;
