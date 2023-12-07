<template>
  <h1 class="text-center text-3xl font-bold p-6 sm:p-10 bg-button text-black uppercase">
    Consumindo Cep <span class="underline underline-offset-4 decoration-white">Api Brasil</span>
    <p class="text-sm">Com Vue.js</p>
  </h1>

  <div class="flex flex-col p-6 sm:p-10 items-center">
    <form @submit.prevent="fetchCep" class="flex flex-col gap-4 text-white p-4 sm:p-10 font-semibold">
      <label for="cep">Digite o CEP:</label>
      <input type="text" v-model="enteredCep" class="w-72 p-2 outline-none text-black">
      <button type="submit" class="text-slate-950 text-lg bg-button p-4 sm:p-5 font-bold">Enviar</button>
    </form>
    <div v-if="fetchedCep" class="text-white">
      <p>CEP: {{ fetchedCep.cep }}</p>
      <p>Logradouro: {{ fetchedCep.street }}</p>
      <p>Bairro: {{ fetchedCep.neighborhood }}</p>
      <p>Cidade: {{ fetchedCep.city }}</p>
      <p>Estado: {{ fetchedCep.state }}</p>
    </div>
    <div v-else-if="fetchingCep" class="text-white">
      <p>Buscando informações do CEP...</p>
    </div>
    <div v-else class="text-white">
      <p>Nenhum CEP encontrado.</p>
    </div>
  </div>
</template>

<script setup>
import axios from "axios"
import { ref } from "vue"

const enteredCep = ref("") // Para armazenar o CEP digitado pelo usuário
const fetchedCep = ref(null) // Para armazenar os dados do CEP obtidos da API
const fetchingCep = ref(false) // Para controlar o estado de busca do CEP

const fetchCep = async () => {
  try {
    fetchingCep.value = true // Altera o estado para indicar busca em andamento
    const response = await axios.get(`https://brasilapi.com.br/api/cep/v2/${enteredCep.value}`)
    fetchedCep.value = response.data // Atualiza os dados do CEP obtidos da API
    console.log(response.data)

  } catch (error) {
    console.error("Erro encontrado:", error)
  } finally {
    fetchingCep.value = false // Altera o estado de volta após a busca
    enteredCep.value = ""
  }
}
</script>
