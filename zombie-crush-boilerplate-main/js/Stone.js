class Stone{
    constructor(x,y,r,){
        this.radius = r

        var ops = {
            restitution:0.1
        }

        this.body = Matter.Bodies.circle(x,y,ops);
    }

    show(){
        pos.x = this.body.position.x;
        pos.y = this.body.position.y;
        circle(pos.x,pos.y,70);
    }
}