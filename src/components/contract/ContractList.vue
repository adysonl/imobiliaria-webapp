<template>
  <div>
    <div class="list-options">
      <router-link :to="{ name: 'ContractNew' }"><button>Adicionar</button></router-link>
      <button :disabled="!selectedId" @click.prevent="edit()">Editar</button>
      <button :disabled="!selectedId" @click.prevent="remove()">Remover</button>
      <custom-input type="text" placeholder="search" v-model="searchText"></custom-input>
    </div>
    <table class="data-table" summary="Lista de Contratos">
      <tr>
        <th> Código do imóvel </th>
        <th> Locador </th>
        <th> Locatário </th>
        <th> Situação </th>
        <th> Data de Início </th>
        <th> Data de Fim </th>
        <th> Aluguel </th>
        <th> Condomínio </th>
      </tr>
      <tr v-for="entity in entities"
          v-bind:class="{ selected : selectedId == entity.id }"
          :key="entity.id"
          @click.prevent="selectItem(entity.id)">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
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
        console.log(this.selectedId)
      },
      edit: function () {
        this.$router.push({name: 'ContractList', params: {id: this.selectedId}})
      },
      remove: function () {
        const token = localStorage.getItem('token')
        if (token) {
          axios.delete('http://localhost:3000/contract/' + this.selectedId, {headers: {'x-access-token': token}})
            .then(response => {
              this.getItems()
            })
            .catch(e => {
              this.error = e.response.data.error
            })
        } else {
          this.$router.push({name: 'Auth'})
        }
      },
      getItems: function () {
        const token = localStorage.getItem('token')
        if (token) {
          axios.get('http://localhost:3000/contract', {headers: {'x-access-token': token}})
            .then(response => {
              this.entities = response.data
            })
            .catch(e => {
              this.error = e.response.data.error
            })
        } else {
          this.$router.push({name: 'Auth'})
        }
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
