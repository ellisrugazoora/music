//const fs = require("fs")
export function hello_world(){
    
    console.log("YUP count: " + count)
    // fs.readFile('memory.js', function(err, data){
    //     console.log(data)
    // })
    count ++;
}
export var count = 0;
export function placeholder(type, description){ //this function should be accessible by other applications
    return "placeholder{type: " + type + ", and description: " + description + "}"
  }
  
export function assign_tag(placeholder_description){//this function should be accessible by other functions
    //console.log("The tag for: " + placeholder_description + " is ..."
    let rtrn 
    switch(placeholder_description){
      case 1:
        rtrn = <button>battonia</button>
        break;
      case 2:
        rtrn = <input>Hello</input>
        break;
      default:
        rtrn = <button>The "still no match" button, no event either</button>//you could just return the regular thing until its fully ocmplete
    }
    return rtrn
}