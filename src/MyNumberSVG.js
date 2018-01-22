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
            .attr("r", 11)
            .attr("class", "number_circle");

        ctx
            .append("text")
            .attr("x", this.x)
            .attr("y", this.y)
            .attr("dx", -9)
            .attr("dy", 7)
            .attr("class", "number")
            .text(this.number);
    }
    undraw(ctx) {ctx.select(`circle[cx="${this.x}"][cy="${this.y}"]`).remove();}

}


export default MyNumberSVG;