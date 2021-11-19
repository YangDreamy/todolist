<template>




<div class="container mx-auto flex flex-col justify-center items-center h-screen">
          <button class="lg:flex shadow rounded-lg">
              <div class="bg-blue-500 rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg lg:py-4 h-full flex flex-col justify-center animate-bounce">
                  <div class="text-center tracking-wide">
                      <div class="text-white font-bold text-4xl lg:text-2xl px-10 " @click="start">Start </div>
                  </div>
              </div>
          </button>
</div>



    
</template>
<script setup>
import {useRouter} from 'vue-router'

const router = useRouter()
const start =() =>{
  router.push({
      path:'/home'
  })
// let router = useRouter()
// let goto =() =>{
//   router.push()
//   //router.back()
//   //router.go(-1)
// }
}

</script>