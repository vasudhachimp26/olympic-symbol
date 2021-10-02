function onLoad(){
    canvas = document.getElementById("myCanvas");
    ctx= canvas.getContext("2d");

    ctx.beginPath();
    ctx.strokeStyle = "grey";
    ctx.lineWidth = 4;
    ctx.rect(150, 143, 430, 200);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 8;
    ctx.arc(260, 200, 40, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 8;
    ctx.arc(360, 200, 40, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 8;
    ctx.arc(460, 200, 40, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "gold";
    ctx.lineWidth = 8;
    ctx.arc(410, 265, 40, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 8;
    ctx.arc(310, 265, 40, 0, 2 * Math.PI);
    ctx.stroke();
}