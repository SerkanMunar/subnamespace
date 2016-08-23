declare module namespace {
    class Client {
        static getData(cb: (data: IData) => void);
    }
}

declare module namespace {
    interface IData {
        id: string;
        type: DataType;
    }
}

declare module namespace {
    enum DataType {
        TypeA = 0,
        TypeB = 1
    }
}