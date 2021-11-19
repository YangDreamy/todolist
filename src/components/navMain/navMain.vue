<template>
    <!-- <div class="flex flex-row items-center w-full bg-white px-2 py-4 lg:px-0 rounded-lg"> -->
      <div v-if="list.length>0">
        <div v-for="(item,index) in list" :key="index">
        <label class="inline-flex items-center">
              <input type="checkbox" v-model="item.complete" class="form-checkbox h-6 w-6 rounded-3xl bg-white  border-gray-500 divide-y-2 lg:ml-4 text-xl ">

              <div class="text-gray-800 font-light text-xl pt-1 text-center lg:text-left px-2">
                  {{item.title}}
                </div>
              <span class="ml-2"> </span>
              
                <button type="button" class="border border-red-500 text-red-500 hover:bg-red-500 hover:text-gray-200 rounded px-4 py-1 m-6  lg:px-0 rounded-lg " @click="del(item,index)">delete</button>
        </label>

      </div>

      </div>
  
    <div v-else>
       <div class="bg-orange-100  box-border border-l-4  border-orange-500 text-orange-700 p-4" role="alert">
        <p class="font-bold">Be Warned</p>
        <p>there is no list to do </p>
      </div>
    </div>




  
</template>

<script setup>
 const emit = defineEmits(['del'])

  const propos = defineProps({
    list: {
    type: Array,
    required: true
  }
})


  let del = (item,index)=>{
      emit('del',index)
  }
</script>

<style scoped lang='scss'>
.item{
  height: 35px;
  line-height: 35px;
  position: relative;
  width: 160px;
  cursor:pointer;
  button{
    position:absolute;
    right:20px;
    top:6px;
    display: none;
    z-index:99

  }
  &:hover{
      background:#ddd;
      button{
              display:block;
      }


  }
}

</style>
