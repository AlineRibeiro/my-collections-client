import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button, Container } from "@material-ui/core";

import { Collection } from "../../api/Collections";
import { loadCollections } from "./collectionSlice";

const CollectionParent = () => {
  const dispatch = useDispatch();
  const collections = useSelector((state) => state.collections.index);
  const history = useHistory();

  const redirectToCollectionNew = () => {
    history.push("/collections/new");
  };

  const fetchCollectionIndex = () => {
    Collection.index().then((response) => {
      dispatch(loadCollections(response));
    });
  };

  useEffect(() => {
    fetchCollectionIndex();
  });

  const collectionList = collections.map((collection) => (
    <div key={collection.id}>
      <h3>{collection.name}</h3>
      <p>{collection.description}</p>
      <p>{collections.owner_email}</p>
    </div>
  ));

  return (
    <Container>
      <Button variant="contained" color="primary" onClick={redirectToCollectionNew}>
        Create a Collection
      </Button>
      {collectionList}
    </Container>
  );
};

export default CollectionParent;
