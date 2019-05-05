<template>
  <div>
    <div class="list-options">
      <router-link :to="{ name: defs.className + 'New' }"><button>Adicionar</button></router-link>
      <button :disabled="!selectedId" @click.prevent="edit()">Editar</button>
      <button :disabled="!selectedId" @click.prevent="remove()">Remover</button>
    </div>
    <table class="data-table" :summary="defs.title">
      <tr>
        <th v-for="column in columns" :key="column.index"> {{ column.title }} </th>
      </tr>
      <tr v-for="entity in entities"
          v-bind:class="{ selected : selectedId == entity.id }"
          :key="entity.id"
          @click.prevent="selectItem(entity.id)">
        <td v-for="column in columns" :key="column.index">
          {{ column.getValue ? column.getValue(entity[column.field]) : entity[column.field]  }}
          </td>
      </tr>
    </table>
  </div>
</template>

<script>
import ApiService from '@/services/api.service'

export default {
  created () {
    this.getItems()
  },
  props: ['defs', 'columns'],
  data () {
    return {
      name: 'DataTable',
      entities: [],
      selectedId: '',
      selectItem: function (id) {
        this.selectedId = id
        console.log(this.selectedId)
      },
      edit: function () {
        this.$router.push({ name: this.defs.className + 'Edit', params: { id: this.selectedId } })
      },
      remove: function () {
        ApiService.delete(this.defs.endpoint + '/' + this.selectedId)
          .then(response => {
            this.getItems()
          })
          .catch(e => {
            this.error = e.response.data.error
          })
      },
      getItems: function () {
        ApiService.get(this.defs.endpoint)
          .then(response => {
            this.entities = response.data
          })
          .catch(e => {
            this.error = e.response.data.error
          })
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
