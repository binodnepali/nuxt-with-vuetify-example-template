<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="`/posts/${post.id}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
const posts = ref([
  { id: 1, title: 'Post 1' },
  { id: 2, title: 'Post 2' },
])
</script>
