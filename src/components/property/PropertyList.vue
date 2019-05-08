<template>
    <DataTable :defs="defs" :columns="columns"/>
</template>

<script>
import DataTable from '@/components/core/DataTable'

export default {
  components: {
    DataTable
  },
  data () {
    return {
      defs: {
        endpoint: '/property',
        title: 'Lista de Imóveis',
        className: 'Property'
      },
      columns: [
        {
          title: 'Código',
          field: 'id'
        },
        {
          title: 'Quartos',
          field: 'bedrooms'
        },
        {
          title: 'Proprietário',
          field: 'locator',
          getValue (locator) {
            return locator ? locator.name : ''
          }
        },
        {
          title: 'Rua',
          field: 'address',
          getValue (address) {
            return address ? address.street : ''
          }
        },
        {
          title: 'Bairro',
          field: 'address',
          getValue (address) {
            return address ? address.neighbour : ''
          }
        },
        {
          title: 'Cidade',
          field: 'address',
          getValue (address) {
            return address ? address.city : ''
          }
        },
        {
          title: 'Estado',
          field: 'address',
          getValue (address) {
            return address ? address.state : ''
          }
        }
      ]
    }
  }
}
</script>
<style>
</style>
