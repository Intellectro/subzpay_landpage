<script setup>
import { computed, ref } from "vue";
import { FaqData } from "../data";
import Fffaq from "./Fffaq.vue";

const faqLists = computed(() => FaqData);

const openTab = ref(false);

const handleOpenFaq = () => {
    console.log("Open");
}
</script>

<template>
    <div class="w-[80%] mx-auto flex flex-col gap-y-5 py-4 px-3">
        <Fffaq v-for="(data, index) in faqLists" :key="index" v-bind="data" />
    </div>
</template>
