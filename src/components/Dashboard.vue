<template>
  <div class="hello">
     <table class="data-table dash-table" summary="Pagamentos Atrasados">
      <tr>
        <th> Locatário </th>
        <th> Valor Total </th>
        <th> Data de Vencimento </th>
        <th> Telefone </th>
      </tr>
      <tr v-for="entity in payments"
          v-bind:class="{ selected : selectedId == entity.id }"
          :key="entity.id"
          @click.prevent="selectItem(entity.id)">
        <td> {{ entity.renter.name }} </td>
        <td> {{ entity.value }} </td> <!--add condominio-->
        <td> {{ entity.due_date }} </td>
        <td> {{ entity.renter.phone }} </td>
      </tr>
    </table>

     <table class="data-table dash-table" summary="Contratos Atrasados">
      <tr>
        <th> Locatário </th>
        <th> Data de Vencimento </th>
        <th> Telefone </th>

      </tr>
      <tr v-for="entity in contracts"
          v-bind:class="{ selected : selectedId == entity.id }"
          :key="entity.id"
          @click.prevent="selectItem(entity.id)">
        <td> {{ entity.contract.renter.name }} </td>
        <td> {{ entity.contract.renter.phone }} </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Dashboard',
  data () {
    return {
      contracts: [],
      payments: [],
      getItems: function () {
        const token = localStorage.getItem('token')
        if (token) {
          axios.get('http://localhost:3000/contract?status=expired', {headers: {'x-access-token': token}})
            .then(response => {
              this.contracts = response.data
            })
            .catch(e => {
              this.error = e.response.data.error
            })
          axios.get('http://localhost:3000/payment?status=late', {headers: {'x-access-token': token}})
            .then(response => {
              this.payments = response.data
            })
            .catch(e => {
              this.error = e.response.data.error
            })
        } else {
          this.$router.push({name: 'Auth'})
        }
      }
    }
  },
  created () {
    this.getItems()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dash-table {
  width: 50% !important;
  display: inline;
}

.data-table{
  background: var(--white);
  border: 1px solid var(--gray);
  width: 100%;
  border-collapse: collapse;
}
.data-table thead {
  font-weight: bold;
  text-transform: uppercase;
}
.data-table td {
  border: 0.3px solid var(--gray);
  padding: 5px;
}
.list-options {
  margin-bottom: 15px;
  width: 100%;
  text-align: left;
}
.list-options button {
  width: 100px;
}

.selected {
  background: #ddd;
}
</style>
