import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fragment } from "react/jsx-runtime";

const Providers = ({ children }: { children: React.ReactElement }) => {
  const queryClient = new QueryClient();
  return (
    <Fragment>
      <ToastContainer />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Fragment>
  );
};

export default Providers;
