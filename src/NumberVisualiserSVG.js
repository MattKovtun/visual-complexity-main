class NumberVisualiserSVG {
    draw(ctx, number) {
        ctx
            .append("circle")
            .attr("cx", number.x)
            .attr("cy", number.y)
            .attr("r", 8)
            .attr("class", "number_circle");

        ctx
            .append("text")
            .attr("x", number.x)
            .attr("y", number.y)
            .attr("dx", -6)
            .attr("dy", 5)
            .attr("class", "number")
            .text(number.number);
    }

    undraw(ctx, number) {ctx.select(`circle[cx="${number.x}"][cy="${number.y}"]`).remove();}
}


export default NumberVisualiserSVG;