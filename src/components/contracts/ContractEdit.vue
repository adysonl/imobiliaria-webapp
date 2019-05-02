<template>
  <form class="edit-form">
    <div class="title row center">
      <span tabindex="0">{{ entity.id ? 'editar' : 'cadastrar' }} contratos</span>
    </div>
    <div class="form-group" style="width: 47%">
      <label for="locator">Locador</label>
      <input id="locator" name="locator" v-model="entity.locator" type="text" required>
    </div>
    <div class="form-group" style="width: 47%">
      <label for="renter">Locatário</label>
      <input id="renter" name="renter" v-model="entity.renter" type="text" required>
    </div>

    <div class="form-group" style="width: 47%">
      <label for="guarantor">Fiador</label>
      <input id="guarantor" name="guarantor" v-model="entity.guarantor" type="text" required>
    </div>

    <div class="form-group" style="width: 47%">
      <label for="immobile">Imóvel</label>
      <input id="immobile" name="immobile" v-model="entity.immobile" type="text" required>
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
      <label for>Multa</label>
      <input id name type="text" required>
    </div>
    <div class="form-group" style="width: 22%">
      <label for>juros(a.d)</label>
      <input id name type="text" required>
    </div>
    <div class="row-right">
      <button @click.prevent="submit()" type="submit">SALVAR</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  created() {
    const token = localStorage.getItem("token");
    const id = this.$route.params.id;
    if (token) {
      if (id) {
        axios
          .get('http://localhost:3000/contracts/'+ id, {
            headers: { "x-access-token": token }
          })
          .then(response => {
            this.entity = response.data;
          })
          .catch(e => {
            this.error = e.response.data.error;
          });
      }
    } else {
      this.$router.push({ name: "Auth" });
    }
  },
  data() {
    return {
      entity: {
        id: '',
        locator: '',
        renter: '',
        guarantor: '',
        immobile:'',
        startDate:'',
        endDate: '',
        hasGarage:'',
        condo: ''
      },
      submit: function () {
        const token = localStorage.getItem("token");
        if (this.entity.id) {
          axios
            .put(
              'http://localhost:3000/contracts' + this.entity.id,
              this.entity,
              {
                headers: { "x-access-token": token }
              }
            )
            .then(response => {
              console.log('editou');
            });
        } else {
          this.entity.id = '';
          axios
            .post('http://localhost:3000/contracts', this.entity, {
              headers: { "x-access-token": token }
            })
            .then(response => {
              console.log('salvou');
            });
        }
      }
    };
  }
};
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
.edit-form .title {
  font-size: 26px;
  color: var(--med);
  font-weight: bold;
  text-transform: uppercase;
}
</style>
