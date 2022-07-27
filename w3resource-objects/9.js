//  Write a JavaScript program to calculate the area and perimeter of a circle.
// Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.

class circle{
    constructor(radius){
        this.radius= radius;
    }

    get_circle_radius(){
        var area= Math.PI * this.radius * this.radius;
        return area;
    }

    get_circle_parameter(){
        var parameter = 2 * Math.PI * this.radius;
        return parameter;
    }
}

var circle_properties = new circle(3);
console.log("Area of circle is = ", circle_properties.get_circle_radius().toFixed(2));
console.log("Parameter of circle is = ", circle_properties.get_circle_parameter().toFixed(2));