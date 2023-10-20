<template>
  <div>
    <h1>Parent Page</h1>
    <h2>Nested Routes</h2>
    <ul>
      <li><NuxtLink to="/parent/child">Parent/child</NuxtLink></li>
      <li><NuxtLink to="/parent/another-child">Parent/another-child</NuxtLink></li>
    </ul>
    <NuxtPage class="nested-page" :page-key="route => route.fullPath" />
    <BackHome />
  </div>
</template>
<style>
.nested-page {
  padding: 20px;
  margin: 20px 0;
  border: 1px solid rgb(74, 142, 151);
  border-radius: 6px;
}
/* h1 {
  color: red;
} */
</style>