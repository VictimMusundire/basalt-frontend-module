<template>
  <!-- start page title -->
  <div class="row">
    <div class="col-12">
      <div class="page-title-box">
        <div class="page-title-right">
          <ol class="breadcrumb m-0">
            <li class="breadcrumb-item"><a href="javascript: void(0);">Transactions</a></li>
            <li class="breadcrumb-item"><a href="javascript: void(0);"></a></li>
          </ol>
        </div>
        <h4 class="page-title">Manage Transactions</h4>
      </div>
    </div>
  </div>
  <!-- end page title -->

  <div class="row">
    <div class="col-xl-12">
      <div class="card">
        <div class="card-body">

          <ul class="nav nav-tabs nav-bordered">
            <li class="nav-item">
              <a href="#small-table-preview" data-toggle="tab" aria-expanded="false" class="nav-link active">
                Transactions List
              </a>
            </li>
          </ul> <!-- end nav-->

          <div class="card-body" style="text-align: center">
            <div v-if="loading === true" class="spinner-border avatar-sm text-primary" role="status">
            </div>
          </div>

          <div class="tab-content" v-if="transactions.length > 0">
            <div class="tab-pane show active" id="small-table-preview">
              <div class="table-responsive-sm">
                <table class="table table-sm table-centered mb-0 table-hover">
                  <thead  class="bg-light">
                  <tr>
                    <th>id</th>
                    <th>Reference</th>
                    <th>Account Number</th>
                    <th>Currency</th>
                    <th>Amount</th>
                    <th>Debit/Credit</th>
                    <th>Created</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr  v-for="transaction in transactions" v-bind:key="transaction.id">
                    <td>{{transaction.id}}</td>
                    <td>{{transaction.reference}}</td>
                    <td>{{transaction.accountNumber}}</td>
                    <td>{{transaction.currency}}</td>
                    <td>{{transaction.amount}}</td>
                    <td>{{transaction.debitCreditIndicator}}</td>
                    <td>{{transaction.dateCreated}}</td>
                  </tr>
                  </tbody>
                </table>
              </div> <!-- end table-responsive-->
            </div> <!-- end preview-->
          </div> <!-- end tab-content-->

        </div> <!-- end card body-->
      </div> <!-- end card -->
    </div><!-- end col-->
  </div>
</template>

<script>
import axios from "axios";
const BASALT_API_BASE_URL = "http://localhost:8082/api";
export default {
  name: "Transactions",

  data() {
    return {
      transactions: [],
      loading: false
    };
  },

methods: {
  async getTransactions(){
    console.log('inside');
    try {
      this.loading = true;
      const response = await axios.get(BASALT_API_BASE_URL + '/transactions/all',{
        headers: {
          "Content-type": "application/json",
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      });
      this.transactions = response.data;
    }catch (err){
      this.loading = false;
    }finally {
      this.loading = false;
    }
  }
},

  mounted() {
    this.getTransactions();
  }
}
</script>

<style scoped>

</style>