<script setup>
import { ref } from "vue";
const { $axios } = useNuxtApp();

const pattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const formValid = ref(false);

const name = ref(null);
const email = ref(null);

const snackbar = ref(false);
let resText = "";

const formSubmit = async () => {
  const formData = { username: name.value, email: email.value };

  try {
    const { data } = await $axios.post("/auth/register", formData);
    resText = data;
    snackbar.value = true;
  } catch (error) {
    if (error.response) {
      resText = error.response.data;
      snackbar.value = true;
    }
  }
};
</script>
<template>
  <div class="p-t-50 p-b-60">
    <p class="m1-txt1 p-b-36">
      <span class="m1-txt2">FEZtool</span> is Coming. For more information
      follow us now! ;)
    </p>

    <v-form v-model="formValid">
      <v-text-field
        v-model="name"
        class="mb-2"
        :rules="[(v) => !!v || 'Name is required']"
        clearable
        label="Your Name"
        variant="outlined"
        density="compact"
      ></v-text-field>
      <v-text-field
        v-model="email"
        class="mb-2"
        :rules="[
          (v) => !!v || 'Email is required',
          (v) => {
            return pattern.test(v) || 'Email is incurrect';
          },
        ]"
        clearable
        label="Email Address"
        variant="outlined"
        density="compact"
      ></v-text-field>

      <v-btn
        :disabled="!formValid"
        color="pink-accent-2"
        size="large"
        block
        @click="formSubmit"
      >
        Subscribe
      </v-btn>
    </v-form>

    <p class="s2-txt3 p-t-18">
      And don’t worry, we hate spam too! You can unsubcribe at anytime.
    </p>

    <v-snackbar v-model="snackbar" location="bottom left" class="mb-5 ml-5">
      {{ resText }}

      <template v-slot:actions>
        <v-btn color="pink" variant="text" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
