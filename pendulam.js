class bob{
	constructor(x,y,diameter,options){
	var options = {
	isStatic:false,
	restitution:1,
	friction:1,
	density:6
	}
	this.width = width; 
	this.height = height;
	
	this.radius = diameter;
	this.body = Bodies.circle(x,y,this.radius, options); 
	World.add(world, this.body); 
		}
	display() {
		var pos = this.body.position
	
		push();
		translate(pos.x,pos.y);
		fill("red");
		ellipseMode(RADIUS);
		ellipse(0,0,this.radius,this.radius);
		pop();
		}
	}
	