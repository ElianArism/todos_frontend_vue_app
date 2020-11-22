<template>
  <el-col>
    <!-- Input para agregar tareas -->
    <input
      type="text"
      v-bind:class="{ dark: darkmode }"
      placeholder="Ingrese una nueva tarea."
      class="el-input"
      v-on:keyup.enter="postOrUpdate"
      v-model="newTask.info"
    />
    <!-- Fin input tareas -->

    <!-- Linea divisoria -->
    <el-divider></el-divider>

    <!-- Componente de tareas -->
    <new-to-do
      v-for="(t, key) in tasksList"
      :key="key"
      :task="t"
      @edittask="activateEditMode"
      @updatetab="updateTasksList"
    >
    </new-to-do>
    <!-- Fin componente de tareas -->

  </el-col>
</template>

<script>
// imports
import NewToDo from "./NewTo-do";
import tasks from "../../../logic/tasks";

export default {
  components: { NewToDo },
  data() {
    return {
      tasksList: [],
      editMode: false,
      newTask: {
        info: "",
        isFeatured: false,
        isFinished: false
      }
    }
  },
  //Cargar tareas al crear componente   
  async created() {
    const response = await tasks.getTasks();
    this.tasksList = response.data.tasksList;
  },
  methods: {
    // Actualizar tareas
    async updateTasksList() {
      const response = await tasks.getTasks();
      this.tasksList = response.data.tasksList;
    },
    // Activar modo editar tareas 
    activateEditMode(task) {
      this.newTask = task;
      this.editMode = true;
    },
    // Alternar entre el modo editar/crear tareas 
    postOrUpdate(e) {
      this.editMode ? this.editTask(e) : this.postTask(e);
    },
    // Crear tarea y actualizar datos en la vista
    async postTask(e) {
      this.newTask.info = e.target.value;
      let response = await tasks.postTask(this.newTask);
      
      this.updateTasksList();
      this.editMode = false;
      this.newTask.info = "";
    },
    // Editar tarea y actualizar datos en la vista
    async editTask(e) {
      this.newTask.info = e.target.value;
      const response = await tasks.putTask(this.newTask, this.newTask._id);

      this.updateTasksList();
      this.editMode = false;
      this.newTask.info = "";
    }
  },
  props: {
    darkmode: Boolean
  }
}
</script>

<style>
/* Estilos del input */
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

/* Estilos para modo oscuro */
.dark {
  color: white;
}
</style>
