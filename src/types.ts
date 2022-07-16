interface DataType<T> {
    type: string;
    id: string;
    items?: T[];
}

interface ErrorType {
    status: string; // reponse code explanation
    code: string; // response code
}

interface MetaType {
    page?: {
        first: number;
        last: number;
        prev: number | null;
        next: number | null;
    };
}

export interface CustomResponseType<T> {
    data: DataType<T>;
    errors: Partial<ErrorType>;
    meta: MetaType;
}
