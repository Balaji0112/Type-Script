///<reference path="ishape.ts"/>
namespace Drawing{
    export namespace Drawing_triangle{
        export class triangle implements ishape{
            public area(breadth:number,height:number){
                return 0.5*breadth*height;
            }
        }
    }
}