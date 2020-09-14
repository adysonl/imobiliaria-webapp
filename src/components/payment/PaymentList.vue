<template>
  <DataTable :defs="defs" :columns="columns"
    :buttons="buttons" hide-add="true"
     hide-edit="true" enable-print="true"/>
  <!--<button :disabled="!selectedId" @click.prevent="print()">Imprimir</button>-->
</template>

<script>
import DataTable from '@/components/core/DataTable'
import ApiService from '@/services/api.service'
import AlertService from '@/services/alert.service'
import moment from 'moment'

export default {
  components: {
    DataTable
  },
  data () {
    return {
      buttons: [
        {
          title: 'Pagar',
          action: function (id) {
            return ApiService.put('/payment/' + id + '/pay').then(
              () => {
                AlertService.sucess()
              }
            )
          }
        }
      ],
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
            var value = contract.value + contract.condo
            if (!String(value).match(/^-?\d+\.\d+$/)) {
              value += '.00'
            }
            return 'R$ ' + value
          }
        },
        {
          title: 'Vencimento',
          field: 'dueDate',
          getValue (date) {
            return moment(String(date)).format('MM/DD/YYYY')
          }
        },
        {
          title: 'Situação',
          field: 'status',
          getValue (key) {
            const status = {'late': 'Atrasado', 'pending': 'Pendente', 'paid': 'Pago'}
            return status[key]
          }
        }
      ]
    }
  }
}
</script>

<style>

</style>
