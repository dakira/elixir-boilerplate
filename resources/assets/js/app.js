var Vue = require('vue');
Vue.use(require('vue-resource'));

new Vue({
    el: '#tasks',

    data: {
        tasks: [],
        newTask: ''
    },

    computed: {
        completions: function() {
            return this.tasks.filter(function(task) {
                return task.completed;
            });
        },
        remaining: function() {
            return this.tasks.filter(function(task) {
                return ! task.completed;
            });
        }
    },

    methods: {
        addTask: function(e) {
            e.preventDefault();
            console.log(this.newTask);

            if(! this.newTask) return;

            this.tasks.push({
                body: this.newTask,
                completed: false
            });
            this.newTask = '';
        },

        removeTask: function(task) {
            this.tasks.$remove(task);
        },

        editTask: function(task) {
            this.removeTask(task);
            this.newTask = task.body;
            this.$$.newTask.focus();
        },

        toggleTaskCompletion: function(task) {
            task.completed = ! task.completed;
        },

        completeAll: function() {
            this.tasks.forEach(function(task) {
                task.completed = true;
            });
        },

        clearCompleted: function() {
            this.tasks = this.tasks.filter(function(task) {
                return ! task.completed;
            });
        }
    }
})