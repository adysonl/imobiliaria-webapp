<template>
  <form class="edit-form">
    <div class="row center">
      <h1 tabindex="0">{{ entity.id ? 'editar' : 'cadastrar' }} contratos</h1>
    </div>
    <div class="form-group" style="width: 47%">
      <label for="renter">Locatário</label>
      <select id="renter" name="renter" v-model="entity.renterId" type="text" required>
        <option v-for="item in clients" :value="item.id" :key="item.key">{{ item.name }}</option>
      </select>
    </div>
    <div class="form-group" style="width: 47%">
      <label for="property">Imóvel</label>
      <select id="property" name="property" v-model="entity.propertyId" type="text" required>
        <option v-for="item in properties" :value="item.id" :key="item.key">{{ item.id }}</option>
      </select>
    </div>

    <div class="form-group" style="width: 30%">
      <label for="startDate">Data de Início</label>
      <input id="startDate" name="startDate" v-model="entity.startDate" type="text" required>
    </div>
    <div class="form-group" style="width: 30%">
      <label for="endDate">Data de Término</label>
      <input id="endDate" name="endDate" v-model="entity.endDate" type="text" required>
    </div>
    <div class="form-group" style="width: 30%">
      <label for="hasGarage">Garagem</label>
      <input id="hasGarage" name="hasGarage" v-model="entity.hasGarage" type="text" required>
    </div>
    <div class="form-group" style="width: 22%">
      <label for="value">Aluguel</label>
      <input id="value" name="value" v-model="entity.value" type="text" required>
    </div>
    <div class="form-group" style="width: 22%">
      <label for="condo">Condomínio</label>
      <input id="condo" name="condo" v-model="entity.condo" type="text" required>
    </div>
    <div class="form-group" style="width: 22%">
      <label for="fine">Multa</label>
      <input id="fine" name="fine" type="text" required>
    </div>
    <div class="form-group" style="width: 22%">
      <label for="interest">juros(a.d)</label>
      <input id="interest" name="interest" type="text" required>
    </div>
    <div class="row-right">
      <button @click.prevent="submit()" type="submit">SALVAR</button>
    </div>
  </form>
</template>

<script>
import ApiService from '@/services/api.service'
import AlertService from '@/services/alert.service'

export default {
  created () {
    const id = this.$route.params.id
    if (id) {
      ApiService.get('contract/' + id)
        .then(response => {
          this.entity = response.data
        })
        .catch(e => {
          this.error = e.response.data.error
        })
    }
    ApiService.get('/client')
      .then(response => {
        this.clients = response.data
      })
    ApiService.get('/property')
      .then(response => {
        this.properties = response.data
      })
  },
  data () {
    return {
      clients: [],
      properties: [],
      entity: {
        id: '',
        locator: '',
        renter: '',
        guarantor: '',
        property: '',
        startDate: '',
        endDate: '',
        hasGarage: '',
        condo: ''
      },
      submit: function () {
        if (this.entity.id) {
          ApiService.put(
            '/contract' + this.entity.id,
            this.entity
          )
        } else {
          this.entity.id = ''
          ApiService.post('/contract', this.entity)
        }
        AlertService.sucess()
        this.$router.push('/contract')
      }
    }
  }
}
</script>

<style>
.edit-form {
  margin-top: 30px;
  width: 80%;
  background: var(--gray);
  margin-left: 10%;
  padding-bottom: 1%;
}
.edit-form input,
select {
  width: 100%;
  height: 30px;
}

.edit-form .form-group {
  display: inline-block;
  margin: 1%;
}

.edit-form select {
  height: 36px;
}

.row {
  width: 100%;
  padding: 0;
}

.row-right {
  width: 99%;
  text-align: right;
  padding-right: 1%;
}

.center {
  text-align: center;
}
</style>
