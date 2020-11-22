<template>
  <!-- Contenedor -->
  <el-container>

    <!-- Main -->
    <el-main :class="darkmode ? 'dark' : 'light'">

      <el-col>
        <h1>Tu lista de tareas</h1>
        <!-- Input para agregar tareas -->
        <add-to-do :darkmode="darkmode"></add-to-do>
      </el-col>
      
    </el-main>
    <!-- Fin main -->
    
  </el-container>
  <!-- Fin container -->
</template>

<script>
// imports
import Sidebar from "../sidebar/Sidebar";
import AddToDo from "./to-do/AddTo-do.vue";

export default {
  components: {
    Sidebar,
    AddToDo
  },
  data() {
    return {};
  },
  props: {
    darkmode: {
      type: Boolean
    }
  }
};
</script>

<style media="screen">
/* EStilos generales */
h1 {
  margin: 20px auto;
}

.el-container {
  height: 100vh;
  width: 80%;
  font-family: "Roboto", sans-serif;
}

/* Main */
.el-main {
  background-color: #eeeeee;
}

.el-col {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

/* Estilos para modo oscuro/claro */
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
  }
}
</style>
