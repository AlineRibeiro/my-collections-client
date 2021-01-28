import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { Snack } from "../../api/Snacks";
import { loadSnacks } from "./snackSlice";

const SnackParent = () => {
  const dispatch = useDispatch();
  const snacks = useSelector((state) => state.snacks.index);

  const fetchSnackIndex = () => {
    Snack.index().then((response) => {
      dispatch(loadSnacks(response));
    });
  };

  useEffect(() => {
    fetchSnackIndex();
  });

  const snackList = snacks.map((snack) =>
    <div key={snack.id}>
      <h3>{snack.name}</h3>
      <p>{snack.description}</p>
      <p>{snack.snack_owner_email}</p>
    </div>
  );

  return <div>{snackList}</div>;
};

export default SnackParent;
