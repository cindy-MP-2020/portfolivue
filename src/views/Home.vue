<template>
  <div class="home">
    <transition name="fade" appear>
      <div class="container">
        <h1 class="h1text">HELLO</h1>
        <h2 class="h2text">My Name is Cindy And This is My Portfolio</h2>
        <a href="/data/Cindy_Su_Resume_2021.pdf" target="_blank">View my resume here</a>
      </div>
    </transition>
    <threejsBg/>
  </div>
</template>

<script>
// @ is an alias to /src
import '../assets/css/animation.css'
import threejsBg from '@/components/threejsBg.vue'

export default {
  name: 'Home',
  components: {
    threejsBg
  }
}
</script>

<style>
body {
  background-color: rgb(236, 236, 236);
}
.h1text {
  font-size: 100px;
  color: rgb(214, 214, 214);
  font-weight: 800;
}
.h2text {
  font-size: 40px;
  margin-top: 0;
  color: rgb(214, 214, 214);
  font-weight: 600;
}
</style>
