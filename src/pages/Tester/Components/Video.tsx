import { CardMedia } from "@mui/material";

interface Props {
    src: string | undefined;
}

export const Video = ({ src }: Props) => {
    return (
        <CardMedia
            sx={{
                maxWidth: "60rem",
                height: "40rem",
                padding: "2rem 0.5rem",
            }}
        >
            <iframe
                style={{
                    width: "100%",
                    height: "100%",
                }}
                title="video ilustrativo"
                src={src}
                allow={"accelerometer; encrypted-media; gyroscope; picture-in-picture"}
                allowFullScreen
            />
        </CardMedia>
    );
};
