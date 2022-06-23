// Write a JavaScript program to find the types of a given angle.

// Types of angles:
// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle

function angle_Type(angle){
    if(angle< 90){
        console.log("Acute Angle");
    }
    else if(angle == 90){
        console.log("Right Angle");
    }
    else if(angle>90 && angle<180){
        console.log("Obtuse Angle");
    }
    else if(angle == 180){
        console.log("Straight Angle")
    }
}

angle_Type(47)
angle_Type(90)
angle_Type(145)
angle_Type(180)