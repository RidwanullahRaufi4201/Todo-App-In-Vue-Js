const app = Vue.createApp({
  data() {
    return {
      enteredTodo:'', 
      todos: [] 
    };
  },
  methods: {
    addTodo(){
       this.todos.push(this.enteredTodo)
    },
    removeTodo(index)
    {
        this.todos.splice(index,1)
    }
  },

  computed:{
    getLength()
    {
        return this.todos.length
    }
  }
});

app.mount('#user-goals');
