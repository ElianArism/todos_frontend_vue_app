<template>
    <el-col>
        <input type="text" placeholder="Ingrese una nueva tarea." class="el-input" v-on:keyup.enter="postOrUpdate" v-model="newTask.info">
        <el-divider></el-divider>
        <new-to-do v-for="(t, key) in tasksList"
            :key="key"
            :task="t"
            @edittask="activateEditMode"
            @updatetab="updateTasksList"
            >
            </new-to-do>
    </el-col>
</template>
<script>
import NewToDo from './NewTo-do'
import tasks  from '../../../logic/tasks'

export default {
    components: { NewToDo }, 
    data () {
        return {
            tasksList: [], 
            editMode: false, 
            newTask: {
                info: '', 
                isFeatured: false, 
                isFinished: false, 
            },
        }
    },
    async created() {
        const response = await tasks.getTasks(); 
        this.tasksList = response.data.tasksList;
    },
    methods: {
        
        postOrUpdate (e) {
            (this.editMode) ? this.editTask(e) : this.postTask(e);
        },
        async postTask (e) {
            this.newTask.info = e.target.value; 
            let response = await tasks.postTask(this.newTask);  

            // volver a cargar datos 
            this.updateTasksList();
            this.editMode = false 
            e.target.value = '';
        }, 
        activateEditMode(task) {
            this.newTask = task;
            this.editMode = true; 
        },
        async editTask (e) {
            this.newTask.info = e.target.value; 
            const response = await tasks.putTask(this.newTask, this.newTask._id); 

            // volver a cargar datos
            this.updateTasksList(); 
            this.editMode = false; 
            e.target.value = ''; 
        }, 
        async updateTasksList () {
            const response = await tasks.getTasks(); 
            this.tasksList = response.data.tasksList;
        }
    }

  
}
</script>

<style>
    .el-form {
        background-color: #9ba4b4;
        height: 300px;
        max-width: 700px;
        border-radius: 5px;
        margin: auto;
    }
    .el-input {
        width: 95%;
        font-size: 20px;
        padding: 5 20px;
        margin: auto; 
        background-color: unset;
        border: 0;
        border-bottom: 1px solid #31b4de;
    }
    .el-input:focus {
        outline: none; 
        box-shadow: 0 12px 12px -12px #31b4de;
        transition: box-shadow 1s;
    }

</style>
