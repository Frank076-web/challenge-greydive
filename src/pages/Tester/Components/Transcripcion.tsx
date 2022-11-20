import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import parse from "html-react-parser";

interface Props {
    transcripcion: string;
}

export const Transcripcion = ({ transcripcion }: Props) => {
    return (
        <div
            style={{
                padding: "4rem 0",
            }}
        >
            <div
                style={{
                    height: "25rem",
                    wordWrap: "break-word",
                    overflow: "auto",
                }}
            >
                <Container maxWidth="sm">
                    <Typography variant="h6">{parse(transcripcion)}</Typography>
                </Container>
            </div>
        </div>
    );
};
