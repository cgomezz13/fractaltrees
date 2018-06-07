function recursive(ctx, startPosX, startPosY, length, angle) {
  ctx.beginPath();
  ctx.save();
  ctx.translate(startPosX, startPosY);
  ctx.moveTo(0, 0);
  ctx.rotate(angle);
  ctx.lineTo(0, -length);
  ctx.stroke();

  if (length < 10) {
    ctx.restore();
    return;
  }

  recursive(ctx, 0, -length, length * 0.75, Math.PI / 6);
  recursive(ctx, 0, -length, length * 0.75, -Math.PI / 6);

  ctx.restore();
}

export default recursive;
