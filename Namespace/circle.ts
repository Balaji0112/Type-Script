///<reference path="ishape.ts"/>
namespace Drawing{
    export namespace Drawing_circle{
        export class circle implements ishape{
            public area(radius:number){
                return 3.14*radius**2;
            }
        }
    }
}