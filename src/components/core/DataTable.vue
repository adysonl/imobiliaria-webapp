<template>
  <div>
    <h1 tabindex="0">{{ defs.title }}</h1>
    <div class="list-options">
      <router-link :to="{ name: defs.className + 'New' }" v-if="!hideAdd"><button>Adicionar</button></router-link>
      <button type="submit" :disabled="!selectedId" @click.prevent="edit()" v-if="!hideEdit">>Editar</button>
      <button type="submit" :disabled="!selectedId" @click.prevent="remove()">Remover</button>
      <button type="submit" :disabled="!selectedId" @click.prevent="print()" v-if="enablePrint">Imprimir</button>

      <button type="submit" v-for="button in buttons"
        :key="button.title" :disabled="!selectedId"
        @click.prevent="customAction(button)"> {{ button.title }}</button>

    </div>
    <table class="data-table" :summary="defs.title" tabindex="0">
      <tr>
        <th v-for="column in columns" :key="column.index"> {{ column.title }} </th>
      </tr>
      <tr v-for="entity in entities"
          v-bind:class="{ selected : selectedId == entity.id }"
          :key="entity.id"
          @click.prevent="selectItem(entity.id)">
        <td v-for="column in columns" :key="column.index">
          {{ column.getValue ? column.getValue(entity[column.field]) : entity[column.field] }}
          </td>
      </tr>
    </table>
  </div>
</template>

<script>
import ApiService from '@/services/api.service'
import print from 'print-js'

export default {
  created () {
    this.getItems()
  },
  props: [
    'defs',
    'columns',
    'hideAdd',
    'hideEdit',
    'enablePrint',
    'buttons'],
  data () {
    return {
      name: 'DataTable',
      entities: [],
      selectedId: '',
      selectItem: function (id) {
        this.selectedId = id
      },
      print: function () {
        ApiService.get(this.defs.endpoint + '/' + this.selectedId + '/print').then(
          response => {
            const fileURL = response.config.baseURL + response.data
            print(fileURL)
          }
        )
      },
      edit: function () {
        this.$router.push({ name: this.defs.className + 'Edit', params: { id: this.selectedId } })
      },
      remove: function () {
        ApiService.delete(this.defs.endpoint + '/' + this.selectedId)
          .then(response => {
            this.getItems()
            this.selectedId = ''
          })
          .catch(e => {
            this.error = e.response.data.error
          })
      },
      customAction (button) {
        button.action(this.selectedId).then(() => {
          this.getItems()
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
