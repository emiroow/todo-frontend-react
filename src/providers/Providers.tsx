import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../components/templates/components/Loading";

const Providers = ({ children }: { children: React.ReactElement }) => {
  const queryClient = new QueryClient();
  return (
    <Suspense fallback={<Loading />}>
      <ToastContainer />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Suspense>
  );
};

export default Providers;
