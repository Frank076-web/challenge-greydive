import { Container, Typography } from "@mui/material";
import { Preguntas } from "../../../models/dbModel";
import { Tarea } from "./Tarea";

interface Props {
    preguntas: Preguntas[];
    escenario: string;
}

export const Tareas = ({ preguntas, escenario }: Props) => {
    return (
        <Container
            sx={{
                padding: "3rem 0",
            }}
        >
            <Typography variant="h6">Escenario: {escenario}</Typography>
            {preguntas.map((e, i) => (
                <Tarea key={i} pregunta={e} index={++i} />
            ))}
        </Container>
    );
};
