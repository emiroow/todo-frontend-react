import i18n from "@/i18n";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, useLayoutEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../components/templates/components/Loading";

const Providers = ({ children }: { children: React.ReactElement }) => {
  const queryClient = new QueryClient();
  const Lang = i18n.language;

  useLayoutEffect(() => {
    document.body.style.direction = Lang === "fa" ? "rtl" : "ltr";
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Suspense>
  );
};

export default Providers;
