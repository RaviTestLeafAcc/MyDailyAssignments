//scoping 
//var scoping ->function scoped or global scoped
//let and const -> block scoped ->{}

var week="1st Week"
{
    var day="Monday"
    let month="January" //not global
    const year=2025 // not global

    console.log("Inside the Block : "+month)
    console.log("Inside the Block : "+day)
    console.log("Indside the Block : "+week)
    console.log("Inside the Block Const val : " +year)

}
//console.log("Outside the Block : "+month)//ReferenceError: month is not defined 
      console.log("Outside the Block : "+day) 
      console.log("outside the Block : "+week)