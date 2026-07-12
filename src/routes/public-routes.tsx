import { Route } from "react-router-dom";

import AppLayout from "@/app/AppLayout";
import { Home } from "@/features/home";

export default function PublicRoutes() {
    return (
        <>
            <Route element={<AppLayout />}>
                <Route index element={<Home />} />
            </Route>
        </>
    );
}