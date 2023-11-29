import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "store";
import { ConfirmationDialogProvider } from "context/ConfirmationDialogProvider";
import { LocaleContextProvider } from "context/LocaleContext";
import { ShoppingCartProvider } from "context/ShoppingCartProvider";
import { SideDrawerProvider } from "context/SideDrawerProvider";
import { SnackbarProvider } from "context/SnackbarProvider";
import { ThemeProvider } from "context/ThemeProvider";
import { AppRoutes } from "routes/AppRoutes";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <LocaleContextProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <Provider store={store}>
              <ConfirmationDialogProvider>
                <SnackbarProvider>
                  <SideDrawerProvider>
                    <CssBaseline />
                    <AppRoutes />
                  </SideDrawerProvider>
                </SnackbarProvider>
              </ConfirmationDialogProvider>
            </Provider>
          </ThemeProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </LocaleContextProvider>
  );
};
