<template>
<div class="container mx-auto flex flex-col justify-center items-center lg:w-1/2 py-15">

    <nav-header @add="add"></nav-header>
  <nav-main :list="list" @del="del"></nav-main>
  <nav-footer :list="list"  @clear = "clear" ></nav-footer>
</div>



</template>

<script setup>
import NavHeader  from '../components/navHeader/navHeader.vue';
import navMain from '../components/navMain/navMain.vue';
import navFooter from '../components/navFooter/navFooter.vue';
import { computed } from '@vue/reactivity';
import { ref } from '@vue/reactivity';
import { useStore } from 'vuex';


let store = useStore()
let list = computed(() => {
  return store.state.list
})
let newvalue = ref('')
let add = ( val ) =>{
  let flag = true
  newvalue.value = val
  list.value.map(item=>{
    console.log()
    if(item.title === newvalue.value){
      // there is already the task
      flag = false
      alert('it alreay existed')
    }
  })
  if(flag == true){
  
    store.commit('addTodo',{
    title:newvalue.value,
    complete:false
  })
  }
}

   let del = (val) =>{
    store.commit('deleteTodo',val)

  }
  let clear = (val) =>{
    store.commit('clear',val)
  }
</script>

<style scoped lang='scss'>

</style>
