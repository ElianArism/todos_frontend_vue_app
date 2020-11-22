<template>
    <el-container>
        <el-main :class="darkmode?'dark':'light'">
            <el-row>
                <el-col>
                    <h1>Tu lista de tareas</h1>
                    <add-to-do></add-to-do>
                </el-col>
            </el-row>
        </el-main>
   </el-container>

</template>

<script>

import Sidebar from '../sidebar/Sidebar'
import AddToDo from './to-do/AddTo-do.vue'

export default {
  components: {Sidebar, AddToDo},
  data () {
      return {}
  }, 
  methods: {},
  props:{
    darkmode: {
        type: Boolean
    }
    
  },
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
    
    .count {
        
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
        }
    }
</style>
