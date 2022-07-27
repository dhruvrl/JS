// Write a JavaScript program to check the total marks of a student in various examinations. 
//The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam."
// the student will get A+ grade and total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise.

function marks(total_marks, final_exam){

    if(final_exam){
        return total_marks >= 90;
    }
    else{
        return (total_marks>=89 && total_marks<=100)
    }
}

console.log(marks("78", " "));
console.log(marks("89", "true "));
console.log(marks("99", "true "));