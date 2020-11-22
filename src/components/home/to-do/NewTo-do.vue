<template>
    <el-row v-if="task">
        <div class="todo" v-bind:class="{'finish': task.isFinished}">
            <span class="text" :data-id="task._id" v-on:click="finishedTask($event)">
                <i class="el-icon-check" v-bind:class="{'done': task.isFinished}"></i>
                {{ task.info }}
            </span>

            <div class="todo__icons">
                <el-popconfirm title="No termino esta tarea, esta seguro?" confirm-button-text='Si' cancel-button-text='No' v-if="!task.isFinished" @confirm="deleteTask">
                    <span slot="reference"><i class="el-icon-delete"></i></span>
                </el-popconfirm>
                <span slot="reference" v-on:click="deleteTask" v-if="task.isFinished"><i class="el-icon-delete"></i></span>
                <span v-on:click="editTask"><i class="el-icon-edit"></i></span>
                <span><i :class="task.isFeatured ? 'el-icon-star-on' : 'el-icon-star-off' " v-on:click="featuredTask($event)"></i></span>
            </div>
        </div>

        <el-divider></el-divider>
    </el-row>
</template>

<script>
import tasks from '../../../logic/tasks'
export default {

    data () {
        return {
            flag: false,
        }
    }, 
    methods: {
        async finishedTask (e) {
            this.flag = !this.flag;
            this.task.isFinished = this.flag;
            let response = await tasks.putTask(this.task, this.task._id);
        },
        async featuredTask (e) {
            const btn = e.target; 
            this.task.isFeatured = !this.task.isFeatured;
            let response = await tasks.putTask(this.task, this.task._id);
            this.$emit('updatetab'); 
        }, 
        editTask () {
            this.$emit('edittask', this.task); 
        }, 
        async deleteTask () {
            let response = await tasks.deleteTask(this.task._id); 
            this.$emit('updatetab');

            // alert
            const h = this.$createElement;

            this.$notify({
                title: 'Eliminado correctamente',
                message: h('i', { style: 'color: teal' }, 'La tarea fue eliminada.'), 
                type: 'success', 
                position: 'top-left', 
                duration: 2000
            });
        }
    }, 
    props: {
        task: {
            _id: {
                type: String
            }, 
            info: {
                type: String
            }, 
            isFeatured: {
                type: Boolean
            }, 
            isFinished: {
                type: Boolean
            }
       } 
    }
}
</script>

<style media="screen">
    .todo {
        display: flex;
        justify-content: space-between;
    }
    .todo__icons {
        display: flex;
    }
    span {
        display: block;
        font-size: 20px;
        width:90%;
        word-wrap: break-word;
    }
    span i {
        font-size: 20px;
        padding: 0 10px;
        cursor: pointer;
    }
    .el-popconfirm {
        font-size: 15px;
    }
    .finish {
        text-decoration: line-through solid #6d6b6b !important;
    }
    .done {
        font-size: 20px;
        text-shadow: 1px 0px 6px rgba(76, 175, 80, 1);
    }

    @media screen and (max-width:700px) {
        .todo__icons {
            display: flex; 
            flex-direction: column;
            margin: 5px;
        }
        .todo__icons span {
            margin: 5px 0;
        }

    } 

</style>
