<template>
  <transition name="fade" appear>
    <div class="illustrator">
      <Display type="illustrator" total="13" />
    </div>
  </transition>
</template>

<script>
import Display from '@/components/Display.vue'

export default {
  name: 'Illustrator',
  components:{
    Display
  }
}
</script>