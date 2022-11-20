import { Container, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { testerContext } from "../../Context/testerContext";
import { Navigation } from "./Components/Navigation";

export const Home = () => {
    const data = useContext(testerContext);

    return (
        <Container maxWidth="md">
            <Typography marginTop={10} align="center" variant="h4">
                Por favor, seleccione el testeador
            </Typography>
            <nav>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {data?.map((e, i) => (
                        <Navigation key={e.cliente} data={e} index={i} />
                    ))}
                </Grid>
            </nav>
        </Container>
    );
};
