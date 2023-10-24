<script setup>
// import { Stars } from './stars.js'
// import { imageParticle } from './img-particle-static'

onMounted(() => {
  // func('abc')
  // console.log('dotList', dotList.length)
  Stars.init('stars', 1000)
  useParticleImage('avatar')
})
</script>
<template>
  <div class="wrapper">
    <canvas id="stars"></canvas>
    <canvas id="avatar"></canvas>
    <div class="cover-content">
      <main>
        <h1>
          <TypedCareer />
        </h1>
        <div class="infos">
          <a href="mailto:ymzhaobth@foxmail.com">ymzhaobth@foxmail.com</a>
        </div>
        <div class="links">
          <a class="link color-yellow" href="/about">About me</a>
          <a class="link color-green" href="https://zymbth.github.io/ymzhao-blogs/" target="_blank"
            >Explore my blog</a
          >
          <!-- <a class="link color-green" href="javascript:void;" target="_blank">Tell me a secret</a> -->
          <!-- <a class="link color-red" href="/resume" target="_blank">View my resume</a> -->
          <a class="link color-red" href="http://ymzhao.work/resume" target="_blank">View my resume</a>
        </div>
        <div class="footer-links color-yellow">
          <a class="link" href="https://github.com/zymbth" target="_blank">GitHub</a>
          <a class="link" href="https://codepen.io/zymbth" target="_blank">Codepen</a>
          <a class="link" href="https://zymbth.github.io/ymzhao-blogs/" target="_blank">Blog</a>
          <a class="link" href="https://blog.csdn.net/ymzhaobth" target="_blank">CSDN</a>
          <a class="link" href="https://twitter.com/z_ymin" target="_blank">Twitter</a>
        </div>
      </main>
      <Copyright />
    </div>
  </div>
</template>
<style lang="scss">
.wrapper {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  color: #ddd;
  text-align: left;
  background-color: #171a19;
}
#stars {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #171a19;
}
#avatar {
  position: absolute;
  top: 10vh;
  right: 10vw;
  height: 80vh;
}
.cover-content {
  position: relative;
  width: 90%;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
  z-index: 1;

  main {
    position: absolute;
    top: 168px;
    right: 0;
    bottom: 50px;
    left: 0;
    width: 100%;
    color: #fff;
  }
  .footer {
    position: absolute;
    bottom: 0;
    opacity: 0.3;
    font-size: 12px;
  }
  h1 {
    margin-bottom: 50px;
    user-select: none;
  }
  // .intro-typed {user-select:none}
  .infos {
    line-height: 2em;
    margin-bottom: 20px;
    color: #fff;
  }
}

.color-yellow {
  --color: #e0a458;
}
.color-green {
  --color: #419d78;
}
.color-red {
  --color: #d9594c;
}
.link {
  display: inline-block;
  position: relative;
  text-decoration: none;
  user-select: none;
}
.links {
  .link {
    font-weight: 700;
    color: var(--color);

    &:not(:last-child) {
      margin-right: 36px;
    }
    &::before {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 21px;
      height: 2px;
      content: ' ';
      z-index: -1;
      display: block;
      transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;
      background-color: var(--color);
    }
    &:hover::before {
      width: 100%;
    }
  }
}
.footer-links {
  position: absolute;
  bottom: 0;
  left: 0;

  .link {
    font-size: 12px;
    line-height: 21px;
    color: #aaa;

    &:not(:last-child) {
      margin-right: 20px;
    }
    &::before {
      position: absolute;
      left: 0;
      bottom: 2px;
      right: 0;
      height: 7px;
      background-color: rgba(255, 255, 255, 0.07);
      content: ' ';
      z-index: -1;
      display: block;
      transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;
    }
    &:hover {
      color: var(--color);
    }
    &:hover::before {
      bottom: -3.5px;
      height: 2px;
      background-color: var(--color);
    }
  }
}
</style>
