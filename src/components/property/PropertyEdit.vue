<template>
  <form class="edit-form">
    <div class="title row center">
      <span tabindex="0">{{ entity.id ? 'editar' : 'cadastrar' }}  imóvel</span>
    </div>

    <div class="form-group" style="width: 75%">
      <label for="locator">PROPRIETÁRIO</label>
      <select id="locator" name="locator" v-model="entity.locatorId" required>
        <option v-for="item in locators" :value="item.id" :key="item.key">{{ item.name }}</option>
      </select>
    </div>
    <div class="form-group" style="width: 20%">
      <label for="rooms">QUARTOS</label>
      <input id="rooms" name="rooms" v-model="entity.bedrooms" type="number" required/>
    </div>
    <div class="form-group" style="width: 50%">
      <label for="street">RUA</label>
      <input id="street" name="street" v-model="entity.address.street" type="text" required/>
    </div>
    <div class="form-group" style="width: 30%">
      <label for="neighbour">BAIRRO</label>
      <input id="neighbour" name="neighbour" v-model="entity.address.neighbour" type="text" required/>
    </div>
    <div class="form-group" style="width: 12.5%">
      <label for="street_number">NÚMERO</label>
      <input id="street_number" name="street_number" v-model="entity.address.streetNumber" type="text" required/>
    </div>
    <div class="form-group" style="width: 30%">
      <label for="city">CIDADE</label>
      <input id="city" name="city" v-model="entity.address.city" type="text" required/>
    </div>
    <div class="form-group" style="width: 30%">
      <label for="state">ESTADO</label>
      <input id="state" name="state" v-model="entity.address.state" type="text" required/>
    </div>
        <div class="form-group" style="width: 32.5%">
      <label for="complement">COMPLEMENTO</label>
      <input id="complement" name="complement" v-model="entity.address.complement" type="text" required/>
    </div>
    <div class="row-right">
      <button @click.prevent="submit()" type="submit">SALVAR</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  created () {
    const token = localStorage.getItem('token')
    const id = this.$route.params.id
    if (token) {
      axios.get('http://localhost:3000/client/',
        {headers: {'x-access-token': token}})
        .then(response => {
          this.locators = response.data
        })
        .catch(e => {
          this.error = e.response.data.error
        })
      if (id) {
        axios.get('http://localhost:3000/property/' + id,
          {headers: {'x-access-token': token}})
          .then(response => {
            this.entity = response.data
          })
          .catch(e => {
            this.error = e.response.data.error
          })
      }
    } else {
      this.$router.push({name: 'Auth'})
    }
  },
  data () {
    return {
      locators: [],
      entity: {
        id: '',
        address: {
          street: '',
          streetNumber: '',
          neighbour: '',
          city: '',
          state: '',
          country: '',
          complement: ''
        },
        nationalId: '',
        rooms: ''
      },
      nationalTypes: [
        {
          key: 'individual',
          value: 'Pessoa Física'
        },
        {
          key: 'company',
          value: 'Pessoa Jurídica'
        }
      ],
      submit: function () {
        const token = localStorage.getItem('token')
        if (this.entity.id) {
          axios.put('http://localhost:3000/property/' + this.entity.id, this.entity, this.nationalTypes.values, {headers: {'x-access-token': token}}).then(
            response => {
            }
          )
        } else {
          this.entity.id = ''
          axios.post('http://localhost:3000/property', this.entity, {headers: {'x-access-token': token}}).then(
            response => {
              console.log('salvou')
            })
        }
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
  .edit-form input, select {
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
  .row-right{
    width: 99%;
    text-align: right;
    padding-right: 1%;
  }
  .center {
    text-align: center;
  }
  .edit-form .title{
    font-size: 26px;
    color: var(--med);
    font-weight: bold;
    text-transform: uppercase;
  }
</style>
