declare module namespace {
    class Client {
        static getDataType(cb: (data: DataType) => void);
    }
}

declare module namespace {
    enum DataType {
        TypeA = 0,
        TypeB = 1
    }
}