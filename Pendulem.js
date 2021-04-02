class Pendulem {     
       constructor(bodyA,bodyB){
           var options = {
               bodyA: bodyA,
               bodyB: bodyB,
               length: 10,
               stiffness: 0.5
           }
           this.pendulem = Constraint.create(options)
           World.add(world,this.pendulem)
       }
       
       display(){
            var pointA = this.pendulem.bodyA.position ;
            var pointB = this.pendulem.bodyB.position ;
            strokeWeight(3);
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
   }



//ok
   ///ohhhhoooooooo
   //pendulum is above the other two in index.html
   //SEQUENCE always has to be taken care of. Lets go there
   //check now 