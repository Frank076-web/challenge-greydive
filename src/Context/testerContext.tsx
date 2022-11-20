import { createContext, useState } from "react";
import db from "../db/db.json";
import { DbModel } from "../models/dbModel";

type props = {
    children: JSX.Element | JSX.Element[];
};

export const testerContext = createContext<DbModel[] | null>(null);

export const TesterProvider = ({ children }: props) => {
    const [data] = useState<DbModel[]>(db);

    return <testerContext.Provider value={data}>{children}</testerContext.Provider>;
};
