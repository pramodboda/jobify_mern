import { useAppContext } from "../../context/AppContext";
import { Alert } from "@mui/material";

const AlertComp = () => {
  const { alertType, alertText } = useAppContext();

  return (
    <Alert variant="filled" severity={alertType}>
      {alertText}
    </Alert>
  );
};
export default AlertComp;
