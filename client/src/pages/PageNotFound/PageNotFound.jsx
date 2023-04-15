import { Link as RouterLink } from "react-router-dom";

import ErrorPageWrapper from "./PageNotFound.styled";
import { Typography, Link as MaterialLink } from "@mui/material";

const PageNotFound = () => {
  return (
    <>
      <ErrorPageWrapper>
        <img
          src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1681215953~exp=1681216553~hmac=728e0d3075c09a1977c3df4499f6ddeee26b2227c92bc2f7ec86efe6db9b070b"
          alt="404 Page not found"
          className="error-page-img"
        />
        <Typography variant="h4" component="h4">
          Ohh! Page not found
        </Typography>
        <MaterialLink component={RouterLink} to="/">
          Go to Home
        </MaterialLink>
      </ErrorPageWrapper>
    </>
  );
};

export default PageNotFound;
