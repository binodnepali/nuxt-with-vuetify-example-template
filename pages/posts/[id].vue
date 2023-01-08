<template>
  <div>
    <p>Post id: {{ id }}</p>
  </div>
</template>

<script setup>
const {
  params: { id },
} = useRoute()
</script>
