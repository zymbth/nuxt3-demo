<template>
  <div>
    <h1>Parent</h1>
    <NuxtPage :page-key="(route) => route.fullPath" />
  </div>
</template>
