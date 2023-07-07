<template>
  <!-- start page title -->
  <div class="row">
    <div class="col-12">
      <div class="page-title-box">
        <div class="page-title-right">
          <ol class="breadcrumb m-0">
            <li class="breadcrumb-item"><a href="javascript: void(0);">Check Balance</a></li>
            <li class="breadcrumb-item"><a href="javascript: void(0);"></a></li>
          </ol>
        </div>
        <h4 class="page-title">Check Balance</h4>
      </div>
    </div>
  </div>
  <!-- end page title -->

  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-body">

          <div v-if="done" class="alert alert-success" role="alert">
            <strong> Checked successfully </strong>
          </div>

          <ul class="nav nav-tabs nav-bordered mb-3">
            <li class="nav-item">
              <a href="#input-types-preview" data-toggle="tab" aria-expanded="false" class="nav-link active">
                Check Balance
              </a>
            </li>

          </ul> <!-- end nav-->

          <div class="tab-content">
            <div class="tab-pane show active" id="input-types-preview">
              <form action="#" method="post">
                <div class="row">

                  <div class="col-lg-12">
                    <div class="form-group mb-3">
                      <label>Account Number  <span class="font-13" style="color: red;">*</span></label>
                      <input type="text" class="form-control form-control-sm" placeholder="Enter Account Number ...">
                    </div>
                    <div class="form-group mb-3">
                      <button type="submit" class="btn btn-outline-primary">Check Balance</button>
                    </div>

                  </div> <!-- end col -->

                </div>
              </form>
              <!-- end row-->
            </div> <!-- end preview-->

          </div> <!-- end tab-content-->

        </div> <!-- end card-body -->
      </div> <!-- end card -->
    </div><!-- end col -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Maintain",
  data(){
    return{
    }
  },
  methods:{
  }
}
</script>

<style scoped>

</style>