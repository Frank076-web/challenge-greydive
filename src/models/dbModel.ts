export interface HorarioEnvio {
    nanoseconds: number;
    seconds: number;
}

export interface Preguntas {
    link?: string;
    respuesta: string;
    texto: string;
    tiempo: string;
    tipoTarea: string;
}

export interface Response {
    data: string;
    status: number;
}

export interface DbModel {
    cliente: string;
    escenario: string;
    horarioEnvio: HorarioEnvio;
    id: string;
    idVideo: string;
    link: string;
    linkVideo: string;
    plataforma: string;
    preguntas: Preguntas[];
    response: Response;
    timeTest: string;
    transcripcion: string;
}
