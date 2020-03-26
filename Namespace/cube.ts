///<reference path="ishape.ts"/>
namespace Drawing{
    export namespace Drawing_cube{
        export class cube implements ishape{
            public area(edge_length:number){
                return 6*edge_length**2;
            }
        }
    }
}