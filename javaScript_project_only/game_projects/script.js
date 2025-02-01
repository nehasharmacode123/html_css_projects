var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function(details){
    // console.log();
    
    // console.log(rect.getBoundingClientRect());
    
    var rectangleLocation = rect.getBoundingClientRect();
    console.log(details.clientX - rectangleLocation.left);
    
    
})