///<reference path="ishape.ts"/>
namespace Drawing{
    export namespace Drawing_cone{
        export class cone implements ishape{
            public area(radius:number,height:number){
                return 3.14*radius*(radius+Math.sqrt((radius**2)+(height**2))); 
            }
        } 
    }
}