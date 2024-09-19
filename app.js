const app = Vue.createApp({
    data() {
        return {
            newTask: '',
            tasks: []
        }
    },
    methods: {
        addTask() {
            if (this.newTask.trim()) {
                this.tasks.push({
                    text: this.newTask,
                    completed: false,
                    editing: false,
                    editText: ''
                });
                this.newTask = '';
            }
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
        startEdit(index) {
            this.tasks[index].editing = true;
            this.tasks[index].editText = this.tasks[index].text;
        },
        finishEdit(index) {
            if (this.tasks[index].editText.trim()) {
                this.tasks[index].text = this.tasks[index].editText;
            }
            this.tasks[index].editing = false;
        }
    }
});

app.mount('#app');