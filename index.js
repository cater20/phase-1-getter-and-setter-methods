// Add your Circle class here

class Circle 
{
    constructor(radius){
        this.radius=radius;
    }

set diameter(num){
this.radius=num/2

}

get diameter(){
return 2*this.radius
}
set circumference(num)
{this.radius=num/(Math.PI*2)}

get circumference(){
return  Math.PI*this.diameter
}
set area(num) {
    this.radius = Math.sqrt(num/Math.PI);
  }
get area(){
return Math.PI*this.radius**2
}

}