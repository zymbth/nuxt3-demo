/**
 * 去弹跳，会在一个延时后执行 fn 函数
 *
 * @param {Function} fn 实际要执行的函数
 * @param {Number} delay 延迟时间，也就是阈值，单位是毫秒（ms）
 * @param {Object} _this this
 * @returns {Function} 返回一个“去弹跳”了的函数
 */
export function debounce(fn, delay = 200, _this) {
  var timer

  return function () {
    // 保存函数调用时的上下文和参数，传递给 fn
    var context = _this
    var args = arguments

    // 每次这个返回的函数被调用，就清除定时器，以保证不执行 fn
    clearTimeout(timer)

    // 当返回的函数被最后一次调用后（也就是用户停止了某个连续的操作），
    // 再过 delay 毫秒就执行 fn
    timer = setTimeout(function () {
      context ? fn.apply(context, args) : fn(...args)
    }, delay)
  }
}
