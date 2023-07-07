<template>
  <!-- Topbar Start -->
  <div class="navbar-custom" v-if="isLoggedOn">
    <ul class="list-unstyled topbar-menu float-end mb-0">

      <li class="dropdown notification-list">
        <a class="nav-link dropdown-toggle nav-user arrow-none me-0" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false"
           aria-expanded="false">
             <span class="account-user-avatar">
              <img src="assets/images/hiclipart.com.png" alt="user-image" class="rounded-circle">
             </span>
          <span>
          <span class="account-user-name">{{ userName }}</span>
              <span  class="account-position">{{ userRole }}</span>
          </span>
        </a>
        <div class="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
          <form id="logout-form" action="/logout" method="POST" style="display: none;">

          </form>
          <a @click="logout" class="dropdown-item notify-item">
            <i class="mdi mdi-logout mr-1"></i>
            Logout
          </a>
        </div>
      </li>

    </ul>
    <button class="button-menu-mobile open-left">
      <i class="mdi mdi-menu"></i>
    </button>
  </div>
  <!-- end Topbar -->
</template>

<script>
import axios from "axios";

export default {
  name: "TopBar",

  data(){
    return{
      userName: '',
      userRole: ''
    }
  },
  methods: {
    logout() {
          axios.defaults.headers.common['Authorization'] = ''
          localStorage.removeItem('token');
          localStorage.removeItem('userRole');
      window.location.href = "/"
    },

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
    }
  }
}
</script>
