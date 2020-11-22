<template>
    <el-header v-bind:style="{backgroundColor: bgColor}">
        <router-link to="/" class="link-items">
            <el-row>    
                <i class="menu-icon el-icon-edit-outline"></i>
                <a v-bind:style="{color: textColor}" >Tareas</a>  
            </el-row>
        </router-link>
        <router-link to="/featured" class="link-items">
            <el-row>    
                <i class="menu-icon el-icon-check"></i>
                <a v-bind:style="{color: textColor}">Destacadas</a>
            </el-row>
        </router-link>
        <div class="link-items" v-on:click="changeTheme">
            <div>    
                <i class="menu-icon el-icon-moon"></i>
                <a v-bind:style="{color: textColor}">Modo Oscuro</a>
            </div>
        </div>
    </el-header>
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
    }, 
  }, 
}
</script>

<style media="screen">
.el-header {
    display:none; 
}
.el-row {
  width: 100%;
}
.el-col {
  display: flex;
}

.link-items {
  text-align: left;
  font-weight: bold;
  font-size: 20px;
  text-shadow: 2px 2px 6px rgba(150, 150, 150, 1);
  margin: 20px;
}
.link-items:hover {
  text-shadow: 1px 1px 9px rgba(49, 180, 222, 1);
}

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
