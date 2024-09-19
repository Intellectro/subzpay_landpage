<script setup>
import ServicesCard from "../components/Scard.vue";
import { computed, onMounted } from "vue";
import { services } from "../data/index.js";

const servicesCardData = computed(() => services);

const firstServiceRow = servicesCardData.value.slice(
    0,
    (servicesCardData.value.length - 1) / 2 + 1
);

const secServiceRow = servicesCardData.value.slice(-(servicesCardData.value.length - 3));

onMounted(() => {});
</script>

<template>
    <div class="w-full px-10 py-10">
        <div class="flex flex-col gap-y-7">
            <div class="flex flex-col gap-y-2 items-center">
                <div class="text-[15px] font-bold text-primaryColor">
                    Our Services
                </div>
                <div class="flex flex-col text-center leading-tight">
                    <div class="text-[28px] font-bold">
                        Built Specifically For Your
                    </div>
                    <div class="text-[28px] font-bold">Convenience</div>
                </div>
            </div>
            <div class="w-[85%] mx-auto">
                <ServicesCard :firstServiceRow="firstServiceRow" :secServiceRow="secServiceRow" />
            </div>
        </div>
    </div>
</template>
