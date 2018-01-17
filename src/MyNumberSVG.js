import {NUMBERFILLSTYLE} from "./consts";

class MyNumberSVG {
    // TODO: make good undraw function
    constructor(x, y, number) {
        this.x = x;
        this.y = y;
        this.number = number;
    }


    draw(ctx) {
        ctx
            .append("circle")
            .attr("cx", this.x)
            .attr("cy", this.y)
            .attr("r", 10);

        ctx
            .append("text")
            .attr("x", this.x)
            .attr("y", this.y)
            .attr("dx", -5)
            .attr("dy", 3)
            .text(this.number);
    }
    undraw(ctx) {ctx.select(`circle[cx="${this.x}"][cy="${this.y}"]`).remove();}

}


export default MyNumberSVG;