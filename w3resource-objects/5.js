// Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.

class Cylinder{

    constructor (height, diameter){
        this.height = height;
        this.diameter = diameter
    }

    get_volume(){
        var radius = this.diameter/2;
        var vol = this.height * Math.PI * radius * radius;
        return vol;
    }
}

var cyl = new Cylinder(7,4);

// volume of the cylinder 

console.log('volume = ', cyl.get_volume().toFixed(4));//.toFixed is used to get the volume of a Cylinder with four decimal places 