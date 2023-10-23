<script setup>
import Typed from 'typed.js'

onMounted(() => {
  new Typed('.intro-typed', {
    strings: ['前端开发工程师', 'Java开发工程师', '全栈开发工程师'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  })
})

</script>

<template>
  <span class="intro-typed"></span>
</template>
