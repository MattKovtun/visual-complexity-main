class NumberVisualiserCanvas {

    getPath(number) {
        const path = new Path2D();
        path.arc(number.x, number.y, 5.5 * 2, 0, Math.PI * 2, true); // Outer circle
        return path;
    }

    draw(ctx, number) {
        ctx.save();
        ctx.fillStyle = NUMBERFILLSTYLE;
        ctx.fill(this.getPath(number));
        ctx.fillStyle = "black";
        ctx.fillText(number.number, number.x - 6, number.y + 3);
        ctx.restore();
    }

    undraw(ctx, number) {
        ctx.save();
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = `black`;
        ctx.fill(this.getPath(number));
        ctx.fillText(number.number, number.x - 6, number.y + 3);
        ctx.restore();

    }

}

export default NumberVisualiserCanvas;