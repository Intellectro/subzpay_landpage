<script setup>
import { computed } from "vue";
import { CardContents } from "../data";
import Card from "./Card.vue";

const {gridContents, flexContents} = CardContents();

</script>

<template>
    <div class="w-full py-9 px-7 flex flex-col gap-y-7">
        <div class="w-[78%] mx-auto grid grid-cols-3 gap-x-5">
            <Card v-for="(data, index) in gridContents" :key="index" v-bind="data" />
        </div>
        <div class="w-[50%] flex gap-x-5 mx-auto">
            <Card v-for="(data, index) in flexContents" :key="index" v-bind="data" />
        </div>
    </div>
</template>
