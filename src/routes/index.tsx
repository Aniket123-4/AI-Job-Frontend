import { createBrowserRouter } from "react-router-dom";

import RootLayout from "@/layouts/RootLayout";
import { Home } from "@/features/home";
import { NotFound } from "@/features/not-found";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },

    {
        path: "*",
        element: <NotFound />,
    },
]);