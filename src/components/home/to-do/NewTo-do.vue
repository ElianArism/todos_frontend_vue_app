<template>
  <!-- Row principal -->
  <el-row v-if="task">
      
    <!-- Cuerpo de la tarea -->
    <div class="todo" v-bind:class="{ finish: task.isFinished }">

      <!-- Texto de la tarea  -->
      <span class="text" :data-id="task._id" v-on:click="finishedTask($event)">
        <i class="el-icon-check" v-bind:class="{ done: task.isFinished }"></i>
        {{ task.info }}
      </span>
      <!-- Fin texto de la tarea -->

      <!-- Iconos de la tarea -->
      <div class="todo__icons">
        
        <!-- Icono eliminar para tarea sin terminar -->
        <el-popconfirm
          title="No termino esta tarea, esta seguro?"
          confirm-button-text="Si"
          cancel-button-text="No"
          v-if="!task.isFinished"
          @confirm="deleteTask"
        >
            <span slot="reference"><i class="el-icon-delete"></i></span>
        </el-popconfirm>
        <!-- Fin icono eliminar -->

        <!-- Icono eliminar para tarea terminada -->
        <span slot="reference" 
            v-on:click="deleteTask" 
            v-if="task.isFinished"
        >
            <i class="el-icon-delete"></i>
        </span>
        <!-- Fin icono eliminar -->
        
        <!-- Icono editar tarea -->
        <span v-if="!featured" v-on:click="editTask">
          <i class="el-icon-edit"></i>
        </span>
        <!-- Fin icono editar -->

        <!-- Icono tarea destacada -->
        <span>
            <i
            :class="task.isFeatured ? 'el-icon-star-on' : 'el-icon-star-off'"
            v-on:click="featuredTask($event)"
            ></i>    
        </span>
        <!-- Fin icono tarea destacada -->
      </div>
      <!-- fin iconos de la tarea -->
    </div>
    <!-- Fin cuerpo de la tarea -->

    <!-- Linea divisoria -->
    <el-divider></el-divider>
  </el-row>
  <!-- Fin row pricipal -->
</template>

<script>
// imports
import tasks from "../../../logic/tasks";

export default {
  data() {
    return {
      finTask: false,
    };
  },
  methods: {
    // Marcar si una tarea esta terminada, guardarla en la BD y mostrar visualmente (con finTask)
    async finishedTask(e) {
      this.finTask = !this.finTask;
      this.task.isFinished = this.finTask;
      let response = await tasks.putTask(this.task, this.task._id);
    },
    // Marcar si una tarea es destacada, guardarla en la BD y mostrar visualmente (con isFeatured)
    async featuredTask(e) {
      const btn = e.target;
      this.task.isFeatured = !this.task.isFeatured;
      let response = await tasks.putTask(this.task, this.task._id);
      this.$emit("updatetab");
    },
    // Emite un evento al componente padre para editar la tarea clickeada
    editTask() {
      this.$emit("edittask", this.task);
    },
    // Eliminar tarea clickeada
    async deleteTask() {
      let response = await tasks.deleteTask(this.task._id);
      this.$emit("updatetab");

      const h = this.$createElement;
      this.$notify({
        title: "Eliminado correctamente",
        message: h("i", { style: "color: teal" }, "La tarea fue eliminada."),
        type: "success",
        position: "top-left",
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
    },
    featured: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style media="screen">
/* Estilos generales */
span {
  display: block;
  font-size: 20px;
  width: 90%;
  word-wrap: break-word;
}
span i {
  font-size: 20px;
  padding: 0 10px;
  cursor: pointer;
}

/* Estilos de las tareas */
.todo {
  display: flex;
  justify-content: space-between;
}
.todo__icons {
  display: flex;
}

.el-popconfirm {
  font-size: 15px;
}

/* Estilos para una tarea terminada */
.finish {
  text-decoration: line-through solid #6d6b6b !important;
}
.done {
  font-size: 20px;
  text-shadow: 1px 0px 6px rgba(76, 175, 80, 1);
}

/* Responsive */
@media screen and (max-width: 700px) {
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
