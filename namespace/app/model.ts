module namespace.sub {
    export interface IData {
        id: string;
        type: DataType;
    }

    export enum DataType {
        TypeA,
        TypeB,
        //namespace.models.DataType != namespace.DataType, TypeC is missing in namespace.DataType
        TypeC
    }

    export class Model {
        data: IData;

        constructor() {
            Client.getData((data: IData) => {
                this.data = data;
            });
        }
    }
}