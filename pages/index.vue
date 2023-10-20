<template>
  <div>
    <h1>Home page</h1>
    <nav>
      <ul>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/users">Users</NuxtLink></li>
        <li><NuxtLink to="/users-admin">Users-Group</NuxtLink></li>
        <ul>
          <li><NuxtLink to="/users-admin/2">Users-Admin/2</NuxtLink></li>
          <li><NuxtLink to="/users-manager/22">Users-Manager/22</NuxtLink></li>
          <li><a @click="handleProgrammaticNavigation()">Programmatic Navigation</a></li>
        </ul>
        <li><NuxtLink to="/catchall/b/c">Catchall</NuxtLink></li>
        <li><NuxtLink to="/parent">Parent</NuxtLink></li>
        <ul>
          <li><NuxtLink to="/parent/child">Parent/child</NuxtLink></li>
          <li><NuxtLink to="/parent/another-child">Parent/another-child</NuxtLink></li>
        </ul>
      </ul>
    </nav>
  </div>
</template>
<script setup>
const handleProgrammaticNavigation = () => {
  const group = Math.floor(Math.random() * 90000 + 10000).toString(16)
  const id = Math.floor(Math.random() * 900 + 100)
  navigateTo({
    path: `/users-${group}/${id}`,
    // query: { name: 'abc' }
  })
}
</script>
