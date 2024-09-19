<script setup>
import AboutSCard from './AboutSCard.vue';
import {aboutServices} from "../data";
</script>

<template>
    <div class="mt-4 py-4 w-full">
        <div class="w-[85%] mx-auto grid grid-cols-3 gap-4">
            <AboutSCard class="col-span-2" v-for="(data, index) in aboutServices" :key="index" v-bind="data" />
        </div>
    </div>
</template>