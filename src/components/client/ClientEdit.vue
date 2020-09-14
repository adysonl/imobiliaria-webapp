<template>
  <form class="edit-form">
    <div class="row center">
      <h1 tabindex="0">{{ entity.id ? 'editar' : 'cadastrar' }} cliente</h1>
      </div>
    <div class="form-group" style="width: 65%">
      <label for="name">NOME</label>
      <input id="name" name="name" v-model="entity.name" type="text" required/>
    </div>
    <div class="form-group" style="width: 30%">
      <label for="career">PROFISSÃO</label>
      <input id="career" name="career" v-model="entity.career" type="text" required/>
    </div>

    <div class="form-group" style="width: 30%">
      <label for="nationalType">TIPO DE PESSOA</label>
      <select id="nationalType" name="nationalType" v-model="entity.nationalType" required>
        <option v-for="item in nationalTypes" :value="item.key" :key="item.key">{{ item.value }}</option>
      </select>
    </div>
    <div class="form-group" style="width: 32.5%">
      <label for="nationalId" v-if="entity.nationalType === 'individual'">CPF</label>
      <label for="nationalId" v-if="entity.nationalType === 'company'">CNPJ</label>
      <input id="nationalId" name="nationalId" v-model="entity.nationalId" type="text" required/>
    </div>
    <div class="form-group" style="width: 30%">
      <label for="rg">RG</label>
      <input id="rg" name="rg" v-model="entity.rg" type="text" required/>
    </div>

    <div class="form-group" style="width: 65%">
      <label for="email">EMAIL</label>
      <input id="email" name="email" v-model="entity.email" type="email" required/>
    </div>
    <div class="form-group" style="width: 30%">
      <label for="phone">TELEFONE</label>
      <input id="phone" name="phone" v-model="entity.phone" type="text" required/>
    </div>
    <div class="row-right">
      <button @click.prevent="submit()" type="submit">SALVAR</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
import AlertService from '@/services/alert.service'

export default {
  created () {
    const token = localStorage.getItem('token')
    const id = this.$route.params.id
    if (token) {
      if (id) {
        axios.get('http://localhost:3000/client/' + id,
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
      entity: {
        id: '',
        name: '',
        nationalId: '',
        nationalType: 'individual',
        rg: '',
        email: '',
        phone: '',
        career: ''
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
          axios.put('http://localhost:3000/client/' + this.entity.id, this.entity, {headers: {'x-access-token': token}}).then(
            response => {
              this.notify()
            }
          )
        } else {
          this.entity.id = ''
          axios.post('http://localhost:3000/client', this.entity, {headers: {'x-access-token': token}}).then(
            response => {
              this.notify()
            })
        }
      },
      notify () {
        AlertService.sucess()
        this.$router.push('/clientes')
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
</style>
