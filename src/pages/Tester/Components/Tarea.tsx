import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Preguntas } from "../../../models/dbModel";

interface Props {
    pregunta: Preguntas;
    index: number;
}

export const Tarea = ({ pregunta, index }: Props) => {
    return (
        <div
            style={{
                borderTop: "2px solid #fff",
                marginTop: "2rem",
            }}
        >
            <Container
                sx={{
                    padding: "1.5rem 0",
                }}
            >
                <Typography variant="h5">Tarea {index}:</Typography>
                <Typography variant="h5">{pregunta.texto}</Typography>
                <Typography marginTop={4} variant="h5" color="#f6905c">
                    Duración de la tarea: {pregunta.tiempo}
                </Typography>
            </Container>
        </div>
    );
};
