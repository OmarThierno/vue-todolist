

const {createApp} = Vue;

createApp({
  data() {
    return {
      list: [
        {
          task: 'Leggere la letterina di Babbo natale',
          isDone: false,
        },
        {
          task: 'Comprare il latte',
          isDone: false,
        },
        {
          task: 'Dar da mangiare al Gatto',
          isDone: true,
        },
        {
          task: 'Fare il bucato',
          isDone: false,
        },
        {
          task: 'Battere Lori a scacchi',
          isDone: false,
        },
      ],
      newTask: {
        task: '',
        isDone: false
      },
      user: '',
    }
  },
  created() {

  }, 
  methods: {
    addTask: function() {
      if (this.newTask.task !== '') {
        this.list.push({...this.newTask});
        this.newTask.task = '';
      }
    },
    removeTask: function(indexToRemove) {
      this.list.splice(indexToRemove, 1);
    }
  }
}).mount('#app')

