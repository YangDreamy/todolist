import { createStore } from 'vuex'

export default createStore({
  //define the state needed
  state: {
    list:[
      {
        title:'first',
        complete:false
    },
    {
        title:'second',
        complete:false
    },
    {
        title:'third',
        complete:false
    },
    ]
    

  },
  //Synchronous modification method
  // the first parameter is state, the second is need to be changed
  mutations: {
    addTodo(state,payload){
      state.list.push(payload)
    },
    deleteTodo(state,payload){
      state.list.splice(payload,1)
    },
    clear(state,payload){
      //filter the completed item
      state.list = payload

    }
  },
  actions: {
  },
  modules: {
  }
})
