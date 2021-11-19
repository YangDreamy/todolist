<template>


  <div class="flex flex-row items-center w-full bg-white lg:justify-end justify-center px-2 py-4 lg:px-0 rounded-lg">
       <input type='text' placeholder="what needs to be done" class="w-full mt-2 mb-6 px-4 py-2 text-3xl border-3 rounded-lg text-gray-700 focus:outline-none focus:border-green-500 opacity-50"  v-model="message" @keydown.enter="enter"/>
  </div> 
  
</template>

<script setup>
 import { ref } from 'vue'
  let message = ref('')
  const emit = defineEmits(['add'])
  
  let enter = () => {
     
    emit('add', message.value)
    message.value = ""
  }
</script>

<style scoped lang='scss'>


</style>
