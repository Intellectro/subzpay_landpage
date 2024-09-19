<script setup>
    import {chooseContent} from "../data";
    import {computed} from "vue";
    import ChooseCard from "./ChooseCard.vue";

    const chooseData = computed(() => chooseContent);


</script>
<template>
    <div class="w-full px-10 py-10 bg-primaryLight">
        <div class="flex flex-col gap-y-7">
            <div class="flex flex-col gap-y-2 items-center">
                <div class="text-[15px] font-bold">Why Choose <span class="text-primaryColor">SUBZPAY</span></div>
                <div class="flex flex-col leading-tight text-center">
                    <div class="text-[22px] font-bold">Esteem spirit temper too say adieus who direct esteem.</div>
                    <div class="text-[22px] font-bold">It esteems luckily or picture placing drawing.</div>
                </div>
            </div>
            <div class="w-[85%] mx-auto px-4">
                <div class="grid grid-cols-2 gap-5">
                    <ChooseCard v-for="(data, index) in chooseContent" :key="index" v-bind="data" />
                </div>
            </div>
        </div>
    </div>
</template>