
let h1 = document.querySelector("body>h1")
let shapeName = document.getElementById("shapeName")
let shapeName2 = document.getElementById("shapeName2")
let round = document.getElementById("round")
let square = document.getElementById("square")
let rectangle = document.getElementById("rectangle")
let triangle = document.getElementById("triangle")
let btnDiv = document.getElementById("btnDiv")
let btnDiv2 = document.getElementById("btnDiv2")

round.addEventListener("click",function(){
document.getElementById("circleDiv").style.display = "block"
round.style.margin = "auto"
    square.style.display = "none"
    rectangle.style.display = "none"
    triangle.style.display = "none"
    btnDiv.style.display = "none"
    btnDiv2.style.display = "flex"
    btnDiv2.style.justifyContent = "center"
h1.style.display = "none"


shapeName2.addEventListener("click",function(){
    let radiusInp = document.getElementById("radiusInp") ;
radiusInp = parseInt(radiusInp.value) ;

let res = 3.1416 * radiusInp * radiusInp ;
shapeName2.innerText =`Area of Circle = ${ res.toFixed(2)}` ;
})

})

square.addEventListener("click",function(){
document.getElementById("squareDiv").style.display = "block"
square.style.margin = "auto"
round.style.display = "none"
    rectangle.style.display = "none"
    triangle.style.display = "none"
    btnDiv.style.display = "none"
    btnDiv2.style.display = "flex"
    btnDiv2.style.justifyContent = "center"
h1.style.display = "none"


shapeName2.addEventListener("click",function(){
    let squareInp = document.getElementById("squareInp") ;
    squareInp = parseInt(squareInp.value) ;

let res = squareInp * squareInp ;
shapeName2.innerText =`Area of Square = ${ res.toFixed(2)}` ;
})

})

rectangle.addEventListener("click",function(){
document.getElementById("rectangleDiv").style.display = "block"
rectangle.style.margin = "auto"
square.style.display = "none"
round.style.display = "none"
    triangle.style.display = "none"
    btnDiv.style.display = "none"
    btnDiv2.style.display = "flex"
    btnDiv2.style.justifyContent = "center"
h1.style.display = "none"


shapeName2.addEventListener("click",function(){
    let rectangleInp = document.getElementById("rectangleInp") ;
    rectangleInp = parseInt(rectangleInp.value) ;
    let rectangleInp2 = document.getElementById("rectangleInp2") ;
    rectangleInp2 = parseInt(rectangleInp2.value) ;

let res = rectangleInp * rectangleInp2 ;
shapeName2.innerText =`Area of Rectangle = ${ res.toFixed(2)}` ;
})

})

triangle.addEventListener("click",function(){
document.getElementById("triangleDiv").style.display = "block"
triangle.style.margin = "auto"
square.style.display = "none"
round.style.display = "none"
    rectangle.style.display = "none"
    btnDiv.style.display = "none"
    btnDiv2.style.display = "flex"
    btnDiv2.style.justifyContent = "center"
h1.style.display = "none"


shapeName2.addEventListener("click",function(){
    let rectangleInp = document.getElementById("triangleleInp") ;
    triangleInp = parseInt(triangleInp.value) ;
    let triangleInp2 = document.getElementById("triangleInp2") ;
    triangleInp2 = parseInt(triangleInp2.value) ;

let res =0.5 * triangleInp * triangleInp2 ;
shapeName2.innerText =`Area of Triangle = ${ res.toFixed(2)}` ;
})

})





























