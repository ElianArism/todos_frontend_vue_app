<template>
    <div id="app">
      <header-mobile @changetheme="changeTheme"></header-mobile>
      <sidebar class="sidebar" @changetheme="changeTheme">
      </sidebar>
      <router-view  :darkmode="dark"/>
    </div>
</template>

<script>
import Sidebar from '../src/components/sidebar/Sidebar'
import HeaderMobile from '../src/components/header/HeaderMobile'
export default {
  name: 'App', 
  components: {Sidebar, HeaderMobile},
  data () {
    return {
      textColor: 'white', 
      bgColor: '#222831',
      dark: false
    }
  },  
  methods: {
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
  }, 


}
</script>

<style>
body {
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box;
  height: 100vh;
}
#app {
  display: flex;
}
a {
  text-decoration: none;
  color: unset;
}
.sidebar {
  width: 30%;
}

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
