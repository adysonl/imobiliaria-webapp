<template>
  <div>
    <h1 tabindex="0"> Pagamentos Atrasados </h1>
     <table class="data-table dash-table" summary="Pagamentos Atrasados" tabindex="0">
      <tr>
        <th> Locatário </th>
        <th> Valor Total </th>
        <th> Data de Vencimento </th>
        <th> Telefone </th>
      </tr>
      <tr v-for="entity in payments"
          :key="entity.id"
          @click.prevent="selectItem(entity.id)">
        <td> {{ entity.contract.renter.name }} </td>
        <td> {{ entity.contract.value + entity.contract.condo }} </td> <!--add condominio-->
        <td> {{ entity.dueDate }} </td>
        <td> {{ entity.contract.renter.phone }} </td>
      </tr>
    </table>
    <h1 tabindex="0"> Contratos Atrasados </h1>
    <table class="data-table dash-table" summary="Contratos Atrasados" tabindex="0">
      <tr>
        <th> Locatário </th>
        <th> Data de Vencimento </th>
        <th> Telefone </th>

      </tr>
      <tr v-for="entity in contracts"
          :key="entity.id"
          @click.prevent="selectItem(entity.id)">
        <td> {{ entity.renter.name }} </td>
        <td> {{ entity.endDate }} </td>
        <td> {{ entity.renter.phone }} </td>
      </tr>
    </table>
  </div>
</template>

<script>
import ApiService from '@/services/api.service'

export default {
  name: 'Dashboard',
  data () {
    return {
      contracts: [],
      payments: [],
      getItems: function () {
        ApiService.get('contract?status=expired')
          .then(response => {
            this.contracts = response.data
          })
          .catch(e => {
            this.error = e.response.data.error
          })
        ApiService.get('/payment?status=late')
          .then(response => {
            this.payments = response.data
          })
          .catch(e => {
            this.error = e.response.data.error
          })
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
