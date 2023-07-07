<template>

  <div class="account-pages pt-2 pt-sm-5 pb-2 pb-sm-5" v-if="!isLoggedOn">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xxl-4 col-lg-5">
          <div class="card">

            <!-- Logo -->
            <div class="card-header pt-4 pb-4 text-center bg-light-lighten">
              <a href="index.html">
                <H1>BASALT</H1>
              </a>
            </div>

            <div class="card-body p-4">

              <div class="text-center w-80 m-auto">
                <h4 class="text-dark-50 text-center pb-0 fw-bold">Sign In</h4>
                <p class="text-muted mb-4">Enter your username and password to login</p>
              </div>

              <form @submit.prevent="handleLogin">
                <div v-if="error" class="alert alert-danger bg-white text-danger text-center" role="alert">
                  <strong>Something went wrong</strong>
                </div>

                <div class="mb-3">
                  <label for="emailaddress" class="form-label">Username</label>
                  <input v-model="userName" class="form-control" type="text" id="emailaddress" required="" placeholder="Enter your email">
                </div>

                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <div class="input-group input-group-merge">
                    <input v-model="password" type="password" id="password" class="form-control" placeholder="Enter your password">
                    <div class="input-group-text" data-password="false">
                      <span class="mdi mdi-lock"></span>
                    </div>
                  </div>
                </div>

                <div class="mb-1 mb-0 text-center">
                  <button class="btn btn-primary" type="submit"> Log In </button>
                </div>

              </form>
            </div> <!-- end card-body -->
          </div>
          <!-- end card -->
          <!-- end row -->

        </div> <!-- end col -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
  </div>



  <!-- Begin page -->
  <div class="wrapper" v-if="isLoggedOn">

    <!-- ========== Left Sidebar Start ========== -->
    <SideBar v-if="checking"/>
    <!-- Left Sidebar End -->

    <!-- ============================================================== -->
    <!-- Start Page Content here -->
    <!-- ============================================================== -->

    <div class="content-page" v-if="checking">
      <div class="content">
        <!-- Topbar Start -->
        <TopBar/>
        <!-- end Topbar -->

        <!-- Start Content-->
        <div class="container-fluid">

        <router-view></router-view>

        </div>
        <!-- container -->

      </div>
      <!-- content -->

      <!-- Footer Start -->
      <footer class="footer" >
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
              © Basalt
            </div>
          </div>
        </div>
      </footer>
      <!-- end Footer -->

    </div>

    <!-- ============================================================== -->
    <!-- End Page content -->
    <!-- ============================================================== -->


  </div>
  <!-- END wrapper -->
</template>

<script>
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import TitleBar from "@/components/TitleBar";
import axios from "axios";
const SUBEX_API_BASE_URL = "http://localhost:9800";
export default {
  components: {TitleBar, TopBar, SideBar},
  data(){
    return{
      isLogged: false,
      loading : false,
      error : false,
      message : '',
      userName : '',
      password  :'',
      fullPath : '',
    }
  },
  methods:{

    async handleLogin(){
      try {
        this.loading = true;

        localStorage.setItem('token',
            'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ4eGtXRWhYYURLT0szOExROThkR1Z6WDRDZnZMMVAyMGp2MmJhYjBlVmJRIn0.eyJleHAiOjE2ODg3Mzk3MjIsImlhdCI6MTY4ODczOTQyMiwianRpIjoiOWRhNmMzNDEtNGI2My00ZWU5LTg1ZTctNTNlMTE0ODNiNDI3IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9iYXNhbHQiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiOTEzZTUzMGItZjI4Ny00YjY3LWJlYTUtODI4NjA4MDQzNTFkIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYmFzYWx0LWFwaSIsInNlc3Npb25fc3RhdGUiOiI1MTJmMjRmMS1lZWZjLTRhNzYtYjA4Yy1jMTU5OTQxNGNjODciLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIi8qIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsImRlZmF1bHQtcm9sZXMtYmFzYWx0IiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiI1MTJmMjRmMS1lZWZjLTRhNzYtYjA4Yy1jMTU5OTQxNGNjODciLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJWaWN0aW0gTXVzdW5kaXJlIiwicHJlZmVycmVkX3VzZXJuYW1lIjoidmljdGltIiwiZ2l2ZW5fbmFtZSI6IlZpY3RpbSIsImZhbWlseV9uYW1lIjoiTXVzdW5kaXJlIiwiZW1haWwiOiJtdnB2aWN0aW1AZ21haWwuY29tIn0.aca0qCPLhARsy2g6Rh7rV-jgUQtG-i8OglMb6BIdiUOSMHBDLyl4MLMn4udkZOJsB_l2Yr8i57Yc2L44oUtBZCMaTqh6NJSn-N_DlUft7BqVslC5MiCQYYedA696NG3TmPZxbsi1m4iFg5_b-2n_vkTLLzP6-di5-Xil6A1iS1gBaIEjbjjA_T-jqTfRtAEnG0F_jeYM_mGYuyVUmTSaO4qKFZIBIuMP8FmXluxPMb2H6prxCpauYV9wmcJK4OJD6KqfLO4LlWuXavEPVSwwqZuRGuflQ6LIUYnYbnLYGibbjA7lZ0Fn7EhYmBLtOeiT-p1vjPo7MrqMg3bjO0kj0Q'
        )
        localStorage.setItem('userRole', 'admin')
        localStorage.setItem('userName', 'victim')
        this.loading = false;
        window.location.href = "/"
      }
      catch (err){
        this.error = true;
        console.log(err)
      }
    }

  },

  computed:{
    isLoggedOn(){
      if (localStorage.getItem('token') == null){
        return false
      }
      else {
        this.userName = localStorage.getItem('userName');
        this.userRole = localStorage.getItem('userRole');
        return  true;
      }
    },
    checking(){
      this.fullPath = this.$route.fullPath;
      if (this.fullPath === '/login'){
        window.location.href = "/"
        return true;
      }
      else {
        return true
      }
    }
  }
}
</script>

