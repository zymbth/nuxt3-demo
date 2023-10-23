import dotList from './dots'

export const imageParticle = (canvasId) => {
  let dots = [], // 粒子
  scale = 1,     // 放大尺寸
  precision = 4, // 精度
  radius = 0.5   // 粒子半径

  // canvas容器
  let canvas = document.getElementById(canvasId)
  let ctx = canvas.getContext('2d') // ctx

  const imgWidth = 512, imgHeight = 683
  particlizeImage()

  // 粒子化图片
  function particlizeImage () {
    canvas.width = imgWidth * scale;
    canvas.height = imgHeight * scale;

    generateDotsByData()

    drawDots();
  }

  function generateDotsByData() {
    for(let dot of dotList) {
      dots.push(new Dot(
        ctx,
        dot[0],
        dot[1],
        radius,
        `rgba(${dot[2]},${dot[3]},${dot[4]})`
      ))
    }
  }

  // 添加粒子到画布上
  function drawDots() {
    dots.forEach(function (item) {
      item.paint();
    });
  }

  // 清空画布，清空粒子
  function clearCanvas() {
    dots = [];
    canvasEl.width = canvasEl.width;
  }

  return { dots, clearCanvas }
}

// 圆点构造函数
const Dot = function (ctx, centerX, centerY, radius, fillStyle) {
  this.ctx = ctx
  this.x = centerX;
  this.y = centerY;
  this.radius = radius;
  this.fillStyle = fillStyle;
}
Dot.prototype = {
  paint: function () {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.fillStyle = this.fillStyle;

    // arc(x, y, r, startAngle, endAngle, anticlockwise) 以x,y为圆心，以r为半径，从startAngle弧度开始到endAngle弧度结束，anticlosewise是布尔值，true表示逆时针，false表示顺时针，默认是顺时针
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.ctx.fill();

    // this.ctx.fillRect(this.x, this.y, this.radius, this.radius)
    this.ctx.restore();
  },
}
