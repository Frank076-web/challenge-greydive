import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export const NotFound = () => {
    return (
        <div
            id="error-page"
            style={{
                minHeight: "94vh",
                backgroundColor: "#292643",
                color: "#fff",
                textAlign: "center",
                padding: "30px",
                overflowY: "hidden",
            }}
        >
            <h1>¡Ups! La pagina a la que intentas acceder no existe</h1>

            <Button sx={{ marginTop: "30px" }} component={NavLink} to="/" variant="contained">
                Ir a home
            </Button>
        </div>
    );
};
