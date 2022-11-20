import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { testerContext } from "../../Context/testerContext";
import { DbModel } from "../../models/dbModel";
import { Tareas } from "./Components/Tareas";
import { Transcripcion } from "./Components/Transcripcion";
import { Video } from "./Components/Video";

export const Tester = () => {
    const data = useContext(testerContext);
    const params = useParams();
    const tester: DbModel | undefined = data?.find(t => t.cliente === params.cliente);

    return (
        <Container
            maxWidth="md"
            sx={{
                marginTop: "10rem",
            }}
        >
            <main>
                <Typography marginBottom={4} variant="h3">
                    Cliente {tester?.cliente}
                </Typography>
                <Typography variant="h3">Test: Test de usabilidad en el sitio web</Typography>
                <Video src={tester?.linkVideo} />
                <Typography variant="h3" align="center">
                    Transcripción
                </Typography>
                <Transcripcion transcripcion={tester?.transcripcion!} />
                <Typography variant="h3" align="center">
                    Tareas
                </Typography>
                <Tareas preguntas={tester?.preguntas!} escenario={tester?.escenario!} />
            </main>
        </Container>
    );
};
