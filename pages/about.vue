<script setup>
const resizeHandler = () => console.log('do something')
useHandleWinSizeChange(resizeHandler)
</script>
<template>
  <h1>About page</h1>
  <BackHome />
</template>
