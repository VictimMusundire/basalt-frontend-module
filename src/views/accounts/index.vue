<template>
  <!-- start page title -->
  <div class="row">
    <div class="col-12">
      <div class="page-title-box">
        <div class="page-title-right">
          <ol class="breadcrumb m-0">
            <li class="breadcrumb-item"><a href="javascript: void(0);">Accounts</a></li>
            <li class="breadcrumb-item"><a href="javascript: void(0);"></a></li>
          </ol>
        </div>
        <h4 class="page-title">Manage Accounts</h4>
      </div>
    </div>
  </div>
  <!-- end page title -->

  <div class="row">
    <div class="col-xl-12">
      <div class="card">
        <div class="card-body">
          <div class="float-right m-2">
            <router-link :to="{name: 'Create'}" class="btn btn-primary ml-2 " style="margin-right: 5px;">
              <i class="uil-store"></i>
              <span> Create Account </span>
            </router-link>

            <router-link :to="{name: 'Debit'}" class="btn btn-primary ml-2" style="margin-right: 5px;">
              <i class="uil-store"></i>
              <span> Debit Account </span>
            </router-link>

            <router-link :to="{name: 'Credit'}" class="btn btn-primary ml-2" style="margin-right: 5px;">
              <i class="uil-store"></i>
              <span> Credit Account </span>
            </router-link>

            <router-link :to="{name: 'Balance'}" class="btn btn-primary ml-2" style="margin-right: 5px;">
              <i class="uil-store"></i>
              <span> Check Account Balance</span>
            </router-link>
          </div>

          <div class="card-body" style="text-align: center">
            <div v-if="loading === true" class="spinner-border avatar-sm text-primary" role="status">
            </div>
          </div>
        </div> <!-- end card body-->
      </div> <!-- end card -->
    </div><!-- end col-->
  </div>
</template>

<script>
import axios from "axios";
const BASALT_API_BASE_URL = "http://localhost:8081/api";
export default {
  name: "Accounts",

  data() {
    return {
      loading: false
    };
  },

  methods : {
  },

}
</script>

<style scoped>

</style>