import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button, Container } from "@material-ui/core";

import { Company } from "../../api/Companies";
import { loadCompanies } from "./companySlice";

const CompanyParent = () => {
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companies.index);
  const history = useHistory();

  const redirectToCompanyNew = () => {
    history.push("/companies/new");
  };

  const fetchCompanyIndex = () => {
    Company.index().then((response) => {
      dispatch(loadCompanies(response));
    });
  };

  const companyList = companies.map((company) => (
    <div key={company.id}>
      <h3>{company.name}</h3>
      <p>{company.description}</p>
      <p>{company.owner_email}</p>
    </div>
  ));

  useEffect(fetchCompanyIndex, [dispatch]);

  return (
    <Container>
      <Button
        variant="contained"
        color="primary"
        onClick={redirectToCompanyNew}
      >
        Create a Company
      </Button>
      {companyList}
    </Container>
  );
};

export default CompanyParent;
