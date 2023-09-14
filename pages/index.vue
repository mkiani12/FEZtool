<script setup lang="ts">
import { useTheme } from "vuetify";
import moment from "moment-jalaali";

import { onMounted, ref } from "vue";

import lightBg from "@/assets/images/bg06.jpg";
import darkBg from "@/assets/images/bg05.jpg";

const theme = useTheme();

const start = moment().startOf("day").add(6, "hours");
const end = moment().startOf("day").add(18, "hours");

let darkMode = ref(theme.current.value.dark);
const interv = ref(true);

const changeMode = () => {
  interv.value = false;
  setTimeout(() => {
    interv.value = true;
  }, 10);
  theme.global.name.value = darkMode.value ? "dark" : "light";
};

onMounted(() => {
  if (moment().isBetween(start, end)) {
    theme.global.name.value = "light";
  } else {
    theme.global.name.value = "dark";
  }
  darkMode.value = theme.current.value.dark;
});
</script>

<template>
  <div class="h-screen w-100 position-relative z-1">
    <!-- Coutdown -->
    <div
      class="d-flex justify-center align-center bg-img1 size2 where1 overlay1 where2 respon2"
      :style="{
        backgroundImage: `url('${
          theme.current.value.dark ? darkBg : lightBg
        }')`,
      }"
    >
      <ClientOnly>
        <Earth v-if="interv" />
        <TimerCountdown />
      </ClientOnly>
    </div>

    <!-- Form -->
    <div class="size3 flex-col-sb flex-w p-l-75 p-r-75 p-t-45 p-b-45 respon1">
      <div class="wrap-pic1">
        <img
          v-if="theme.current.value.dark"
          src="@/assets/images/logo/Logo_White.png"
          alt="LOGO"
          class="float-left mt-1"
          style="max-width: 90px"
        />
        <img
          v-else
          src="@/assets/images/logo/Logo_Black.png"
          alt="LOGO"
          class="float-left mt-1"
          style="max-width: 90px"
        />
        <v-switch
          v-model="darkMode"
          color="pink-accent-2"
          class="ml-5 float-left"
          append-icon="mdi-weather-night"
          inset
          @change="changeMode"
        ></v-switch>
      </div>

      <div class="p-t-50 p-b-60">
        <p class="m1-txt1 p-b-36">
          <span class="m1-txt2">FEZtool</span> is Coming. For more information
          follow us now! ;)
        </p>

        <v-form>
          <v-text-field
            clearable
            label="Your Name"
            variant="outlined"
            density="compact"
          ></v-text-field>
          <v-text-field
            clearable
            label="Email Address"
            variant="outlined"
            density="compact"
          ></v-text-field>

          <v-btn color="pink-accent-2" size="large" block>Subscribe</v-btn>
        </v-form>

        <p class="s2-txt3 p-t-18">
          And don’t worry, we hate spam too! You can unsubcribe at anytime.
        </p>
      </div>

      <div class="flex-w">
        <v-btn
          color="pink-accent-2"
          icon
          href="https://instagram.com/fez.tool?igshid=MWZjMTM2ODFkZg=="
        >
          <v-icon size="25px"> mdi-instagram </v-icon>
        </v-btn>

        <v-btn
          color="indigo-darken-1"
          class="ml-2"
          icon
          href="https://www.linkedin.com/company/feztool/"
        >
          <v-icon size="25px"> mdi-linkedin </v-icon>
        </v-btn>
      </div>
    </div>
    <EarthRender />
  </div>
</template>
