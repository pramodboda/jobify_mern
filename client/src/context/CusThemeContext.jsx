import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { deepPurple, grey } from "@mui/material/colors";
export const CusThemeContext = React.createContext({
  toggleColorMode: () => {},
  mode: "light"
});

export const CusThemeContextProvider = ({ children }) => {
  const [mode, setMode] = React.useState("light");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode
    }),
    [mode]
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: ["Inter", "sans-serif"].join(",")
        },
        components: {
          // Name of the component
          MuiButtonBase: {
            defaultProps: {
              // The props to change the default for.
              disableRipple: true // No more ripple!
            }
          },

          mode,
          ...(mode === "light"
            ? {
                // MuiCard: {
                //   styleOverrides: {
                //     // Name of the slot
                //     root: {
                //       // Some CSS
                //       background: "yellow"
                //     }
                //   }
                // }
              }
            : {
                MuiCard: {
                  styleOverrides: {
                    // Name of the slot
                    root: {
                      // Some CSS
                      background: grey[800]
                    }
                  }
                },
                MuiTooltip: {
                  styleOverrides: {
                    tooltip: {
                      backgroundColor: grey[50],
                      color: grey[800]
                    }
                  }
                }
              })
        },
        shape: {
          borderRadius: 0
        },
        palette: {
          mode,

          ...(mode === "light"
            ? {
                // palette values for light mode
                primary: deepPurple,
                divider: deepPurple[200],
                text: {
                  primary: grey[900],
                  secondary: grey[800]
                }
              }
            : {
                // palette values for dark mode
                // common: {
                //   black: "#f9f9f9",
                //   white: "#ffcc00"
                // },
                primary: {
                  main: deepPurple[300]
                },
                divider: deepPurple[700],
                background: {
                  default: "#1e1e1e",
                  paper: "#1e1e1e"
                },
                text: {
                  primary: "#fff",
                  secondary: grey[500]
                }
              })
        }
      }),
    [mode]
  );

  return (
    <CusThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CusThemeContext.Provider>
  );
};

export const useColorModeContext = () => React.useContext(CusThemeContext);
