<template>
  <div>
      RECIBO
        Recebemos de {{ entity.renter.name }} a quantia de R$ {{ entity.contract.value }} + {{ entity.contract.condo }} reais,
        correspondente ao pagamento do aluguel do apto {{ entity.contract.immobile.number }}.
</div>
</template>
<script>
export default {
  created () {
    // const token = localStorage.getItem('token')
    this.entity = this.$route.params
  },
  data () {
    return {
      entity: {}
    }
  }
}
</script>

<style>

</style>
