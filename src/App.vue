<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { refToPromise } from "./ref-to-promise";
import { toast } from "vue3-toastify";

const t = ref("loading");
const p = refToPromise(t, {
  isResolve: (_) => _ === "success",
  isReject: (_) => _ === "error",
});
watchEffect(() => {
  console.log(`🚀 // DEBUG 🍔 ~ file: App.vue:14 ~ t.value:`, t.value);
  console.log(`🚀 // DEBUG 🍔 ~ file: App.vue:15 ~ p:`, p);
});
toast.promise(p, {
  pending: "loading...",
  success: "success",
  error: "error",
});
 
setTimeout(() => {
  t.value = "success";
}, 1500);
</script>

<template></template>
