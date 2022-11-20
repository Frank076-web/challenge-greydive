import { Button, Grid, ListItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import { DbModel } from "../../../models/dbModel";

interface props {
    index: number;
    data: DbModel;
}

export const Navigation = ({ data, index }: props) => {
    const { cliente } = data;

    return (
        <Grid marginTop={10} item xs={2} sm={4} md={6} key={index}>
            <ListItem
                style={{
                    justifyContent: "center",
                }}
            >
                <Button
                    style={{
                        fontSize: "30px",
                    }}
                    key={cliente}
                    component={NavLink}
                    to={`/clientes/${cliente}/testeador-${++index}`}
                >
                    {cliente}
                </Button>
            </ListItem>
        </Grid>
    );
};
