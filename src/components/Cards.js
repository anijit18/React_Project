import React from "react";

const Cards = ( {courses} ) => {
    
    //to get all data in one array
    //returns you a list of all courses received from the api response
    let allCourses=[];
    const getCourses = () => {
        Object.values (courses).forEach( (courseCategory) => {
            courseCategory.forEach((course) => {
                allCourses.push(course);
            })
        })
        return allCourses;
    }
    
    return (
        <div>
            {
                getCourses().map( (course) => {
                    <Card/>
                })
            }
            
        </div>
    )
}

export default Cards;