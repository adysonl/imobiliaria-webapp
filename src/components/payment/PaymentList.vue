<template>
  <div>
    <div class="list-options">
      <button :disabled="!selectedId" @click.prevent="edit()">Editar</button>
      <button :disabled="!selectedId" @click.prevent="print()">Imprimir</button>
      <custom-input type="text" placeholder="search" v-model="searchText"></custom-input>
    </div>
    <table class="data-table" summary="Lista de Pagamentos">
      <tr>
        <th> Código </th>
        <th> Locador </th>
        <th> Locatário </th>
        <th> Status </th>
        <th> Valor total </th>
        <th> Data de vencimento </th>
        <th> Tel. Locatário </th>
      </tr>
      <tr v-for="entity in entities"
          v-bind:class="{ selected : selectedId == entity.id }"
          :key="entity.id"
          @click.prevent="selectItem(entity.id)">
        <td>{{ entity.id }}</td>
        <td>{{ entity.locator.name }}</td>
        <td>{{ entity.renter.name }}</td>
        <td>{{ entity.status }}</td>
        <td>{{ entity.due_date }}</td>
        <td>{{ entity.renter.phone }}</td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  created () {
    this.getItems()
  },
  data () {
    return {
      entities: [],
      selectedId: '',
      selectItem: function (id) {
        this.selectedId = id
      },
      edit: function () {
        this.$router.push({name: 'PaymentEdit', params: {id: this.selectedId}})
      },
      getItems: function () {
        const token = localStorage.getItem('token')
        if (token) {
          axios.get('http://localhost:3000/payment', {headers: {'x-access-token': token}})
            .then(response => {
              this.entities = response.data
            })
            .catch(e => {
              this.error = e.response.data.error
            })
        } else {
          this.$router.push({name: 'Auth'})
        }
      },
      print: function () {
        this.$router.push({name: 'PaymentPrint', params: this.entities.get(this.selectItem)})
      }
    }
  }
}
</script>

<style>
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
