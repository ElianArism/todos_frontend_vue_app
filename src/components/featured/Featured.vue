<template>
  <!-- Contenedor -->
  <el-container>
    
    <!-- Main -->
    <el-main :class="darkmode ? 'dark' : 'light'">
        
        <el-col>
          <h1>Tu lista de tareas destacadas</h1>

          <!-- Linea divisoria -->
          <el-divider></el-divider>
          
          <!-- Componente de tareas -->
          <new-to-do
            v-for="(t, key) in featuredTasks"
            :key="key"
            :task="t"
            @updatetab="updateFeaturedList"
            :featured="true"
          >
          </new-to-do>
          <!-- Fin componente de tareas -->
        </el-col>   
    
    </el-main>
    <!-- Fin main -->

  </el-container>
  <!-- Fin contenedor -->
</template>

<script>
// imports
import Sidebar from "../sidebar/Sidebar"
import NewToDo from "../home/to-do/NewTo-do"
import tasks from "../../logic/tasks"

export default {
  components: { 
    Sidebar,
    NewToDo
  },
  data() {
    return {
      colorText: "black",
      bgColor: "#eeeeee",
      featuredTasks: null
    }
  },
  // Al crear componente actualizar lista de tareas destacadas   
  async created() {
    let response = await tasks.getFeaturedTasks();
    this.featuredTasks = response.data.tasksList;
  },
  methods: {
    // Actualizar lista de tareas destacadas
    async updateFeaturedList() {
      let response = await tasks.getFeaturedTasks();
      this.featuredTasks = response.data.tasksList;
    }
  },
  props: {
    darkmode: {
      type: Boolean
    }
  },
}
</script>

<style media="screen">
/* Estilos generales */
h1 {
    margin: 20px auto;
}

/* Estilos del componente */
.el-container {
  height: 100vh;
  width: 80%;
  font-family: "Roboto", sans-serif;
}

.el-main {
  background-color: #eeeeee;
}

.el-col {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

/* Estilos modo claro/oscuro */
.light {
  color: black;
  background-color: #eeeeee;
}
.dark {
  color: white;
  background-color: #222831 !important;
}

/* Responsive */
@media screen and (max-width: 700px) {
  .el-container {
    width: 100%;
    font-size: 15px;
  }
}
</style>
