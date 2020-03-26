///<reference path="ishape.ts"/>
///<reference path="circle.ts"/>
///<reference path="triangle.ts"/>
///<reference path="cube.ts"/>
///<reference path="cone.ts"/>
namespace Drawing{
    export function draw_circle(shape:ishape){
        console.log(shape.area(5));
    }
    export function draw_triangle(shape:ishape){
        console.log(shape.area(5,8));
    }
    export function draw_cube(shape:ishape){
        console.log(shape.area(6));
    }
    export function draw_cone(shape:ishape){
        console.log(shape.area(4,7));
    }
}
Drawing.draw_circle(new Drawing.Drawing_circle.circle());
Drawing.draw_triangle(new Drawing.Drawing_triangle.triangle());
Drawing.draw_cube(new Drawing.Drawing_cube.cube());
Drawing.draw_cone(new Drawing.Drawing_cone.cone());
