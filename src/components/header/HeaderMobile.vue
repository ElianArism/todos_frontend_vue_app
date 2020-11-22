<template>
    <!-- Header -->
    <el-header v-bind:style="{backgroundColor: bgColor}">
        <!-- Link tareas -->
        <router-link to="/" class="header__items">
            <el-row>    
                <i class="menu-icon el-icon-edit-outline"></i>
                <a v-bind:style="{color: textColor}" >Tareas</a>  
            </el-row>
        </router-link>
        <!-- Fin link tareas -->

        <!-- Link tareas destacadas -->
        <router-link to="/featured" class="header__items">
            <el-row>    
                <i class="menu-icon el-icon-check"></i>
                <a v-bind:style="{color: textColor}">Destacadas</a>
            </el-row>
        </router-link>
        <!-- Fin link tareas destacadas -->

        <!-- Opcion modo oscuro -->
        <div class="header__items" v-on:click="changeTheme">
            <div>    
                <i class="menu-icon el-icon-moon"></i>
                <a v-bind:style="{color: textColor}">Modo Oscuro</a>
            </div>
        </div>
        <!-- Fin opcion modo oscuro -->
    </el-header>
    <!-- Fin header -->
</template>

<script>
export default {
    data () {
    return {
      theme:'light', 
      bgColor: '#31b4de', 
      textColor: '#a7dff1'
    }
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
}
</script>

<style media="screen">
/* Estilos del header */
.el-header {
    display:none; 
}

.el-row {
  width: 100%;
}

/* Estilos de los links */
.header__items {
  text-align: left;
  font-weight: bold;
  font-size: 20px;
  text-shadow: 2px 2px 6px rgba(150, 150, 150, 1);
  margin: 20px;
}

.header__items:hover {
  text-shadow: 1px 1px 9px rgba(49, 180, 222, 1);
}

/* Responsive */
@media screen and (max-width:700px) {
  .el-header {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 200px !important;
    align-content: center;
    align-items: center;
    justify-items: center;
  }
}
</style>
