module namespace.sub {
    export enum DataType {
        TypeA,
        TypeB,
        //namespace.sub.DataType != namespace.DataType, TypeC is missing in namespace.DataType
        TypeC
    }

    export class Model {
        dataType: DataType;

        constructor() {
            Client.getDataType((dataType: DataType) => {
                this.dataType = dataType;
            });
        }
    }
}