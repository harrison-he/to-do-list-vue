<template>
   <header>
      <h1>To Do List</h1>
      <nav>
        <router-link to="/">To Do List</router-link>|
        <router-link to="/completed">Completed</router-link>
      </nav>
    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style>

</style>