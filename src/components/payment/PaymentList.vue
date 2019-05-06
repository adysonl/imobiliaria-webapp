<template>
  <DataTable :defs="defs" :columns="columns" disable-add="true" enable-print="true"/>
  <!--<button :disabled="!selectedId" @click.prevent="print()">Imprimir</button>-->
</template>

<script>
import DataTable from '@/components/core/DataTable'
// import moment from 'moment'

export default {
  components: {
    DataTable
  },
  data () {
    return {
      defs: {
        endpoint: '/payment',
        title: 'Lista de Pagamentos',
        className: 'Payment'
      },
      columns: [
        {
          title: 'Código',
          field: 'id'
        },
        {
          title: 'Proprietário',
          field: 'contract',
          getValue (contract) {
            return contract ? contract.property.locator.name : ''
          }
        },
        {
          title: 'Locatário',
          field: 'contract',
          getValue (contract) {
            return contract ? contract.renter.name : ''
          }
        },
        {
          title: 'Valor Total',
          field: 'contract',
          getValue (contract) {
            return contract ? contract.value + contract.condo : ''
          }
        },
        {
          title: 'Vencimento',
          field: 'dueDate'
        }
      ]
    }
  }
}
</script>

<style>

</style>
