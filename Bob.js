class Bob {
    constructor(x,y,radius){
        var options = {
            'isStatic':false, 
            'density':1
        }
        this.body = Bodies.rectangle(x,y,radius,options);
        this.radius = radius
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("Pink");
        circle(pos.x, pos.y, this.radius);
      }
    }
    //k ,ok mam
    //now do one thing.. wither just close liver server and launch it again.

    //if stilld doesnt work, upload the project to github and send me the lin to repo