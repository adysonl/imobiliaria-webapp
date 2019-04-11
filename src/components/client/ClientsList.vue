<template>
  <div>
    <div class="list-options">
      <router-link :to="{ name: 'ClientNew' }"><button>Adicionar</button></router-link>
      <button :disabled="!selectedId" @click.prevent="edit()">Editar</button>
      <button :disabled="!selectedId" @click.prevent="remove()">Remover</button>
    </div>
    <table class="data-table">
      <thead>
        <tr>
          <td> Nome </td>
          <td> Phone </td>
          <td> Tipo de Pessoa </td>
          <td> CPF/CNPJ </td>
          <td> RG </td>
          <td> Email </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entity in entities"
            v-bind:class="{ selected : selectedId == entity.id }"
            :key="entity.id"
            @click.prevent="selectItem(entity.id)">
          <td> {{ entity.name }} </td>
          <td> {{ entity.phone }} </td>
          <td> {{ entity.nationalType == 'individual' ? 'Pessoa Física' : 'Pessoa Jurídica'}} </td>
          <td> {{ entity.nationalId }} </td>
          <td> {{ entity.rg }} </td>
          <td> {{ entity.email }} </td>
        </tr>
      </tbody>
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
        this.$router.push({name: 'ClientEdit', params: {id: this.selectedId}})
      },
      remove: function () {
        const token = localStorage.getItem('token')
        if (token) {
          axios.delete('http://localhost:3000/client/' + this.selectedId, {headers: {'x-access-token': token}})
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
          axios.get('http://localhost:3000/client', {headers: {'x-access-token': token}})
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
