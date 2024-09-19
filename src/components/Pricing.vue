<script setup>
    import Pcard from "./Pcard.vue";
    import { pricingContent } from "../data/index.js";
    import { computed } from "vue";

    const pContentsData = computed(() => pricingContent);
    console.log(pContentsData);
</script>

<template>
    <div class="w-full py-10 px-10">
        <div class="flex flex-col gap-y-7">
            <div class="flex flex-col gap-y-1 items-center">
                <div class="text-[15px] font-bold text-primaryColor">Our Pricing</div>
                <div class="text-[28px] font-bold">Affordable Data Pricing</div>
            </div>
            <div class="w-[85%] mx-auto px-4">
                <div class="flex gap-x-4">
                    <Pcard v-for="(data, index) in pContentsData" :key="index" v-bind="data" />
                </div>
            </div>
        </div>
    </div>
</template>