import { useState, useEffect } from "react";
import { BrandLogo, FormRow, AlertComp } from "../../components";
import { Button, Typography, Link } from "@mui/material";
import { useAppContext } from "../../context/AppContext";
import { AuthPageWrapper } from "./Register.styled";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true
};
const Register = () => {
  const [values, setValues] = useState(initialState);

  const { isLoading, showAlert, displayAlert } = useAppContext();

  const ToggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  // Global state and useNavigate
  const handleChange = (e) => {
    console.log(e.target);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);

    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    console.log(values);
  };

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
            name="username"
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

        <Button onClick={onSubmit} variant="contained">
          Sumbit
        </Button>
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
