

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
          task: 'Sconfiggere Lori a scacchi',
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
      this.list.push({...this.newTask})
    }
  }
}).mount('#app')

