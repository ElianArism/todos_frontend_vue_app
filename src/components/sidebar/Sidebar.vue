<template>
  <!-- Aside -->
  <el-aside v-bind:style="{ backgroundColor: bgColor }" width="auto">
    <el-col>
      
      <!-- Botones mostrar/ocultar menu -->
      <el-radio-group v-model="isCollapse" v-bind:fill="bgColor">
        <el-radio-button :label="false">
          <i class="el-icon-s-unfold"></i>
        </el-radio-button>
        <el-radio-button :label="true">
          <i class="el-icon-s-fold"></i>
        </el-radio-button>
      </el-radio-group>
      <!-- Fin botones -->

      <!--Menu -->
      <el-menu
        class="el-menu-vertical"
        :collapse="isCollapse"
        v-bind:background-color="bgColor"
        v-bind:text-color="textColor"
        active-text-color="#e9f7fc"
      >
        <!-- Tareas -->
        <router-link to="/">
          <el-menu-item class="link-items">
            <i class="menu-icon el-icon-edit-outline"></i>
            <a v-bind:style="{ color: textColor }" slot="title">Tareas</a>
          </el-menu-item>
        </router-link>
        <!-- Fin tareas -->

        <!-- Tareas destacadas -->
        <router-link to="/featured">
          <el-menu-item class="link-items">
            <i class="menu-icon el-icon-check"></i>
            <a v-bind:style="{ color: textColor }" slot="title">Destacadas</a>
          </el-menu-item>
        </router-link>
        <!-- Fin tareas destacadas -->

        <!-- Modo oscuro -->
        <el-menu-item class="link-items" v-on:click="changeTheme">
          <i class="menu-icon el-icon-moon"></i>
          <a v-bind:style="{ color: textColor }" slot="title">Modo Oscuro</a>
        </el-menu-item>
        <!-- Fin modo oscuro -->
        
      </el-menu>
      <!-- Fin menu -->

    </el-col>
    
  </el-aside>
  <!-- Fin aside -->
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      theme: "light",
      bgColor: "#31b4de",
      textColor: "#a7dff1"
    };
  },
  methods: {
  // Cambiar tema claro/oscuro
  changeTheme () { 
      if (this.theme === 'light') {
          this.bgColor = '#31b4de';
          this.textColor = '#a7dff1'; 
          this.theme = 'dark'; 
      } else {
          this.bgColor = '#393e46'; 
          this.textColor = '#F38511';
          this.theme = 'light';
      }
      this.$emit('changetheme', this.theme); 
    }
  }
};
</script>

<style media="screen">
/* Estilos generales */
.el-row {
  width: 100%;
}

/* Estilos de los botones mostrar/ocultar */
.el-icon-s-unfold,
.el-icon-s-fold {
  font-size: 20px;
}

.el-radio-group {
  padding: 20px;
  margin: 20px auto;
}

/* Estilos del menu */
.el-menu-vertical:not(.el-menu--collapse) {
  width: 95%;
  min-height: 100%;
}

.menu-icon {
  color: white !important;
  text-shadow: 2px 2px 6px rgba(150, 150, 150, 1);
  font-size: 20px;
}

.link-items {
  text-align: left;
  font-weight: bold;
  font-size: 20px;
  text-shadow: 2px 2px 6px rgba(150, 150, 150, 1);
}
.link-items:hover {
  text-shadow: 1px 1px 9px rgba(49, 180, 222, 1);
}

/* Responsive */
@media screen and (max-width: 700px) {
  .el-aside {
    display: none;
  }
}
</style>
