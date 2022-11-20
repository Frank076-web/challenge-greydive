import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { TesterProvider } from "../Context/testerContext";

export const LayoutPublic = () => {
    return (
        <div
            style={{
                minHeight: "100vh",
                backgroundColor: "#292643",
                color: "#fff",
            }}
        >
            <TesterProvider>
                <Typography align="center" variant="h1">
                    Challenge Greydive
                </Typography>
                <Outlet />
            </TesterProvider>
        </div>
    );
};
