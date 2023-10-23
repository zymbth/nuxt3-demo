export const imageParticle = (canvasId, img) => {
  let dots = [], // 粒子
  scale = 1,     // 放大尺寸
  precision = 4, // 精度
  radius = 0.5   // 粒子半径

  // canvas容器
  let canvas = document.getElementById(canvasId)
  let ctx = canvas.getContext('2d') // ctx
  let imgEl = document.createElement('img')
  imgEl.src = img
  imgEl.onload = () => {
    particlizeImage()
  }

  // 粒子化图片
  function particlizeImage () {
    canvas.width = imgEl.width * scale;
    canvas.height = imgEl.height * scale;
    // 参数 2、3：img 在 canvas 中的坐标
    ctx.drawImage(imgEl, 0, 0, imgEl.width, imgEl.height);
    //复制画布上指定矩形的像素数据，RGBA的一维数组数据
    const imgData = ctx.getImageData(0, 0, imgEl.width, imgEl.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    getDots(imgData, +precision, +radius, +scale);
    drawDots();
  }

  /**
   * 从图像像素数据中获取粒子
   *
   * @param {Array} imgData 图像像素数据
   * @param {number} precision 精度
   * @param {number} radius 半径
   * @param {number} scale 缩放等级
   */
  function getDots(imgData, precision = 4, radius = 2, scale) {
    for (var x = 0; x < imgData.width; x += precision) {
      for (var y = 0; y < imgData.height; y += precision) {
        // y为行，x为列  每个像素点由RGBA四个数据组成
        var i = (y * imgData.width + x) * 4;
        if (
          !(
            imgData.data[i] >= 200 &&
            imgData.data[i + 1] >= 200 &&
            imgData.data[i + 2] >= 200
          ) &&
          imgData.data[i + 3] >= 128
        ) {
          // const g = grayDegree(imgData.data[i],imgData.data[i+1],imgData.data[i+2])
          // const opacity = g > 150 ? 1 : (0.2 + 0.8 * (g/150).toFixed(2))
          // console.log(opacity)
          // 有颜色值就渲染
          // ${opacity || imgData.data[i + 3]}
          var dot = new Dot(
            ctx,
            x * scale,
            y * scale,
            radius,
            `rgba(${imgData.data[i]},${imgData.data[i + 1]},${imgData.data[i + 2]})`
          );
          dots.push(dot);
        }
      }
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
    dots.value = [];
    canvasEl.value.width = canvasEl.value.width;
  }

  /**
   * 计算rgb颜色深浅程度
   * @param {number} r 
   * @param {number} g 
   * @param {number} b 
   * @returns {number} g 值越小，颜色越深
   */
  function grayDegree(r,g,b) {
    return r * 0.299 + g * 0.587 + b * 0.114
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
