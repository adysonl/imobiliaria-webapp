<template>
  <DataTable :defs="defs" :columns="columns" enable-print="true"/>
</template>

<script>
import DataTable from '@/components/core/DataTable'
import moment from 'moment'

export default {
  components: {
    DataTable
  },
  data () {
    return {
      defs: {
        endpoint: '/contract',
        title: 'Lista de Contratos',
        className: 'Contract'
      },
      columns: [
        {
          title: 'Código',
          field: 'id'
        },
        {
          title: 'Locador',
          field: 'property',
          getValue (property) {
            return property.locator.name
          }
        },
        {
          title: 'Locatário',
          field: 'renter',
          getValue (renter) {
            return renter ? renter.name : ''
          }
        },
        {
          title: 'Início',
          field: 'startDate',
          getValue (date) {
            return moment(String(date)).format('MM/DD/YYYY')
          }
        },
        {
          title: 'Término',
          field: 'endDate',
          getValue (date) {
            return moment(String(date)).format('MM/DD/YYYY')
          }
        },
        {
          title: 'Aluguel',
          field: 'value'
        },
        {
          title: 'Condomínio',
          field: 'condo'
        }
      ]
    }
  }
}
</script>

<style>
</style>
