let addedCourses = [
{
    id: 6,
        title: "PHP Tutorial",
    rating: 3,
},
{
    id: 7,
        title: "C# Tutorial",
    rating: 2,
},
{
    id: 8,
        title: "Docker Tutorial",
    rating: 3.8,
}
];

let courses = [
{
    id: 1,
        title: "ReactJS Tutorial",
    rating: 4.2,
},
{
    id: 2,
        title: "Angular Tutorial",
    rating: 2.5,
},
{
    id: 3,
        title: "VueJS Tutorial",
    rating: 3.8,
},
{
    id: 4,
        title: "Java Tutorial",
    rating: 4,
},
{
    id: 5,
        title: "JavaScript Tutorial",
    rating: 3.5,
},
];
//trả về mảng có Rating >= 4
let newCourses = courses.filter(courses => courses.rating >= 4);
let courseNew = newCourses.map(newCourses => newCourses.title);
console.log(courseNew)

//trả về mảng có Rating < 4
let newVipCourses = courses.filter(courses => courses.rating < 4 );
let newVipCourses2 = newVipCourses.map(courses => courses.id + "-" + courses.title + "-" + courses.rating)

console.log(newVipCourses2)
//Trả về mảng gộp 2 mảng
// let newArr = courses.concat(addedCourses).map(courses => courses);
// console.log(newArr)


let newArr = [...courses,...addedCourses];
console.log(newArr);