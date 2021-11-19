<template>

<div class="flex flex-row items-center w-full  bg-white lg:justify-center px-2 py-4 lg:px-0 rounded-lg">
                   
                   <label class="text-stroke-md">
                       isCompleted tasks {{isComplete}}   /      All tasks {{list.length}}
                       
                    </label> 

    <div v-if="isComplete > 0">
        <button class="bg-transparent hover:bg-orange-400 text-orange-500 font-semibold hover:text-white py-2 px-4 border mx-4 border-blue-200 hover:border-transparent rounded" @click="clear">
delete All completed </button>
    
    
    </div>
</div> 
</template>

<script setup>
 import { ref,computed } from 'vue'
 const propos = defineProps({
     list: {
    type: Array,
    required: true
  }
})
  const emit = defineEmits(['clear'])
 const isComplete = computed(()=>{
     let arr = propos.list.filter(item =>{
         return item.complete
     })
     return arr.length
 })
  const clear = ()=>{
     const arr = propos.list.filter(item =>{
         return item.complete === false
     })
    emit('clear',arr)
  }
</script>

