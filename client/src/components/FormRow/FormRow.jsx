import { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
  IconButton,
} from "@mui/material";

import { VisibilityOff, Visibility } from "@mui/icons-material";

const FormRow = ({ type, name, value, handleChange, labelText }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      {type === "password" ? (
        <FormControl sx={{ width: "25ch" }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            name={name}
            label={labelText || "name"}
            type={showPassword ? "text" : "password"}
            size="small"
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      ) : (
        <TextField
          name={name}
          label={labelText || "name"}
          type={type}
          size="small"
          variant="filled"
          defaultValue={value}
          onChange={handleChange}
        />
      )}
    </>
  );
};

export default FormRow;
