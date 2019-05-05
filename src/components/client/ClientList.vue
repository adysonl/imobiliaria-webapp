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
        endpoint: '/client',
        title: 'Lista de Clientes',
        className: 'Client'
      },
      columns: [
        {
          title: 'Nome',
          field: 'name'
        },
        {
          title: 'Phone',
          field: 'phone'
        },
        {
          title: 'Tipo de Pessoa',
          field: 'nationalType',
          getValue (value) {
            return value === 'individual' ? 'Física' : 'Jurídica'
          }
        },
        {
          title: 'CPF/CNPJ',
          field: 'nationalId'
        },
        {
          title: 'RG',
          field: 'rg'
        },
        {
          title: 'email',
          field: 'email'
        }
      ]
    }
  }
}
</script>

<style>
</style>
