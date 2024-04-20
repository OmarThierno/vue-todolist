

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
    const localList = localStorage.getItem('list');

    if (localList !== null) {
      this.list = JSON.parse(localList)
    } else {
      // this.list = [];
      this.list = this.list
    }
  }, 
  methods: {
    addTask: function() {
      if (this.newTask.task !== '') {
        this.list.push({...this.newTask});
        this.newTask.task = '';

        const jsonList = JSON.stringify(this.list);
        console.log(jsonList);

        localStorage.setItem('list', jsonList);
      }
    },
    removeTask: function(indexToRemove) {
      this.list.splice(indexToRemove, 1);
    },
  }
}).mount('#app')

