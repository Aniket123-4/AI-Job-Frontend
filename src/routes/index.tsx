import { Routes } from "react-router-dom";

import PublicRoutes from "./public-routes";
import PrivateRoutes from "./private-routes";

export default function AppRoutes() {
    return (
        <Routes>
            {PublicRoutes()}
            {PrivateRoutes()}
        </Routes>
    );
}