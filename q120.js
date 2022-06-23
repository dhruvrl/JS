// Write a JavaScript program to check whether a point lies strictly inside a given circle.

function check_point_lies_inside_circle(radius, center_x, center_y, a, b){ //a and b are the points to find inside the circle
    // formula for this will square of the  distance of point a from center + square of the  distance of point b from center should be less than radius square
    //distance from a = > a - center_x  ^ a - center_x
    //distance from b = > b - center_x  ^ b - center_x
    distance_from_a = (a - center_x)  ** (a - center_x);
    distance_from_b = (b - center_x)  ** (b - center_x);
    rad = radius**radius;
    if( (distance_from_a)+(distance_from_b)<=rad){
        return true;
    }
    else{
        return false;
    }

}

console.log(check_point_lies_inside_circle(6,0,0,2,4));
console.log(check_point_lies_inside_circle(6,0,0,6,8));

