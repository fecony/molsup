import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SWRConfig } from "swr";
import { Toaster } from "@/components/ui/sonner";
import Root from "@/routes/root";
import ErrorPage from "@/error-page";
import SupplierPage from "@/routes/supplier";
import CreateSupplierPage from "@/routes/supplier/create";
import UploadCatalogPage from "@/routes/supplier/upload";
import "@/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <SupplierPage /> },
      { path: "supplier/create", element: <CreateSupplierPage /> },
      { path: "supplier/upload", element: <UploadCatalogPage /> },
      {
        path: "supplier/:supplierId",
        element: <SupplierPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SWRConfig value={{ suspense: true }}>
      <RouterProvider router={router} />
      <Toaster richColors theme="light" toastOptions={{}} expand />
    </SWRConfig>
  </React.StrictMode>,
);
