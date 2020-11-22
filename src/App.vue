<template>
    <div id="app">
      <!-- Header (solo disponible en la version mobile) -->
      <header-mobile @changetheme="changeTheme"></header-mobile>

      <!-- Sidebar (solo disponible en la version desktop)  -->
      <sidebar class="sidebar" @changetheme="changeTheme"></sidebar>

      <!-- Router outlet -->
      <router-view  :darkmode="dark"/>
    </div>
</template>

<script>
// imports
import Sidebar from '../src/components/sidebar/Sidebar'
import HeaderMobile from '../src/components/header/HeaderMobile'

export default {
  name: 'App', 
  components: {
    Sidebar, 
    HeaderMobile
  },
  
  data () {
    return {
      textColor: 'white', 
      bgColor: '#222831',
      dark: false
    }
  },  
  
  methods: {
    // cambia tema oscuro/claro
    changeTheme (flag) {
        if(flag === 'light') {
            this.textColor = 'white'; 
            this.bgColor = '#222831'; 
            this.dark = true;
        } else {  
            this.textColor = 'black'; 
            this.bgColor = '#eeeeee';
            this.dark = false; 
        } 
    }
  }

}
</script>


<style>
/* Estilos generales */
body {
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box;
  height: 100vh;
}

a {
  text-decoration: none;
  color: unset;
}

#app {
  display: flex;
}

.sidebar {
  width: 30%;
}

/* Responsive */
@media screen and (max-width: 700px) {
  * {
    font-size: 15px !important;
  }
  #app {
    display: flex;
    flex-direction: column !important;
  }
  
  .sidebar {
      width: 100% !important;
  }
}
</style>
