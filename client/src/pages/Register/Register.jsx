import { useState, useEffect } from "react";
import { BrandLogo, FormRow, AlertComp, LoadingIcon } from "../../components";
import { Button, Typography, Link } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

import { AuthPageWrapper } from "./Register.styled";

import HowToRegIcon from "@mui/icons-material/HowToReg";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};
const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);

  const { user, isLoading, showAlert, displayAlert, registerUser } =
    useAppContext();

  const ToggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  // Global state and useNavigate
  const handleChange = (e) => {
    // console.log(e.target.value);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    // console.log(values);
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }

    const currentUser = { name, email, password };
    if (isMember) {
      console.log("Already a member");
    } else {
      registerUser(currentUser);
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <AuthPageWrapper className="auth-page-wrapper">
      <form onSubmit={onSubmit} className="left-content">
        <BrandLogo />
        <Typography component="h5" variant="h5">
          {values.isMember ? "Login" : "Register"}
        </Typography>

        {/* Alert */}
        {showAlert && <AlertComp />}

        {/* Name Input */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            labelText="User Name"
            value={values.name}
            handleChange={handleChange}
          />
        )}

        {/* Email Input */}
        <FormRow
          type="email"
          name="email"
          labelText="Email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* Password Input */}
        <FormRow
          type="password"
          name="password"
          labelText="Password"
          value={values.name}
          handleChange={handleChange}
        />

        {/* <Button onClick={onSubmit} variant="contained">
          <span>Sumbit</span>
          {isLoading && <LoadingIcon />}
        </Button> */}

        <LoadingButton
          onClick={onSubmit}
          endIcon={<HowToRegIcon />}
          loading={isLoading}
          loadingPosition="end"
          variant="contained"
        >
          <span>Sumbit</span>
        </LoadingButton>

        {values.isMember ? "Not a member yet? " : "Already a member? "}

        <Link variant="outlined" onClick={ToggleMember}>
          {values.isMember ? "Register" : "Login"}
        </Link>
      </form>
      <div className="right-content">
        <Typography variant="h3" component="h4">
          Welcome
        </Typography>
      </div>
    </AuthPageWrapper>
  );
};

export default Register;
