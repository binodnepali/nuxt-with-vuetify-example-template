<template>
  <header>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/posts">Posts</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: black;
  color: #fff;
  padding: 0.2rem;

  nav {
    ul {
      list-style: none;
      display: flex;
      align-items: center;

      li {
        margin-right: 1rem;

        a {
          color: #fff;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
