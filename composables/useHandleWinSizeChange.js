// import { onMounted, onBeforeUnmount } from 'vue'

/**
 * 页面窗口resize监听，包括window.resize以及侧边栏显示/隐藏切换
 * @param {Function} cb resize handler 函数
 * @returns
 * @example
 * 仅在vue3 setup中使用
 * import { useHandleWinSizeChange } from '@/use/page-size-change-listener'
 *
 * const resizeHandler = () => console.log('do something')
 * useHandleWinSizeChange(resizeHandler)
 */
export default function useHandleWinSizeChange(cb) {
  if (!cb) return

  const resizeDebounceHandler = debounce(cb)

  onMounted(() => {
    window.addEventListener('resize', resizeDebounceHandler)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeDebounceHandler) // 监听事件解绑
  })
}
