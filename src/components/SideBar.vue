<template>
  <!-- ========== Left Sidebar Start ========== -->
  <div class="leftside-menu" v-if="isLoggedOn" >

    <!-- LOGO -->
    <router-link :to="{name: 'Account'}" class="logo text-center logo-light">
                    <span class="logo-lg">
                        <h1>BASALT</h1>
                    </span>
      <span class="logo-sm">
                       <h1>BASALT</h1>
                    </span>
    </router-link>

    <!-- LOGO -->
    <router-link :to="{name: 'Account'}" class="logo text-center logo-dark">
                    <span class="logo-lg">
                        <h1>BASALT</h1>
                    </span>
      <span class="logo-sm">
                        <h1>BASALT</h1>
                    </span>
    </router-link>

    <div class="h-100" id="leftside-menu-container" data-simplebar>

      <!--- Sidemenu -->
      <ul class="side-nav">


        <li class="side-nav-title side-nav-item mt-2">Navigation</li>

        <router-link to="/accounts" class="side-nav-link"  active-class="text-primary">
          <i class="uil-layer-group"></i>
          <span> Accounts </span>
        </router-link>

        <router-link to="/transactions" class="side-nav-link"  active-class="text-primary">
          <i class="uil-card-atm"></i>
          <span> Transactions </span>
        </router-link>

        <div class="clearfix"></div>

      </ul>

    </div>
    <!-- Sidebar -left -->

  </div>
  <!-- Left Sidebar End -->
</template>

<script>
export default {
  name: "SideBar",
  data(){
    return{
      userRole: '',
      userName: ''
    }
  },
  methods:{

  },
  computed:{
    isLoggedOn(){
      if (localStorage.getItem('token') == null){
        return false
      }
      else {
        this.userName = localStorage.getItem('userName');
        this.userRole = localStorage.getItem('userRole');
        return  true
      }
    },
  }
}
</script>

<style scoped>

</style>