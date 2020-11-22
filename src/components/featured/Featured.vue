<template>
    <el-container>
        <el-main :class="darkmode?'dark':'light'">
            <el-row>
                <el-col>
                    <h1>Tu lista de tareas destacadas</h1>
                    <el-divider></el-divider>
                    <new-to-do v-for="(t,key) in featuredTasks" :key="key" :task="t" @updatetab="updateFeaturedList">
                    </new-to-do>
                </el-col>
            </el-row>
        </el-main>
   </el-container>

</template>

<script>
import Sidebar from '../sidebar/Sidebar'
import NewToDo from '../home/to-do/NewTo-do'
import tasks from '../../logic/tasks'
export default {
    data () {
      return {
          colorText: 'black', 
          bgColor: '#eeeeee',
          featuredTasks: null, 
      }
  }, 
  components: {Sidebar, NewToDo},
  props:{
    darkmode: {
        type: Boolean
    }
  },
  methods: {
      async updateFeaturedList () {
        let response = await tasks.getFeaturedTasks(); 
        this.featuredTasks = response.data.tasksList; 
      }
  },
  async created () {
    let response = await tasks.getFeaturedTasks(); 
    this.featuredTasks = response.data.tasksList;
  }
}
</script>

<style media="screen">
    .el-container {
        height: 100vh;
        width: 80%;
        font-family: 'Roboto', sans-serif;
    }
    .el-main {
        background-color: #eeeeee;
    }
    .el-row:nth-child(2) {
        width: 100%;
        margin-bottom: 20px;
    }
    .el-col {
        display: flex;
        align-items:flex-start;
        flex-direction: column;
    }
    .el-row h1 {
        margin: 0 auto 20px auto;
    }
    .container {
        width: auto;
    }
    
    .light {
        color: black; 
        background-color: #eeeeee; 
    }
    .dark {
        color: white; 
        background-color: #222831 !important; 
    }

    @media screen and (max-width:700px) {
        .el-container {
            width: 100%;
            font-size: 15px; 
        }
    } 
</style>