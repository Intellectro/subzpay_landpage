<script setup>
    import { computed, ref } from "vue";
    import {infoBanner} from "../images";

    const infoImageHolder = computed(() => infoBanner);
    const mapHolder = ref(`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.8019330134907!2d7.49114557330487!3d6.419490324366771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a16da077459d%3A0x647fb9636d809b23!2s13%20Isuochi%20Street%2C%20Uwani%2C%20Enugu%20400107%2C%20Enugu!5e0!3m2!1sen!2sng!4v1724689083174!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
</script>


<template>
    <div class="mt-5 w-full">
        <div class="w-[85%] mx-auto flex flex-col gap-y-9">
            <div class="flex flex-col items-center gap-y-1">
                <div class="text-2xl font-bold uppercase">Our Office</div>
                <div class="text-center leading-tight">
                    <div class="text-xl">We are conveniently located in the heart of the city, with easy access to</div>
                    <div class="text-xl">public transportation and major highways.</div>
                </div>
            </div>
            <div class="flex">
                <div class="flex-1 px-3 py-4">
                    <img :src="infoImageHolder" class="bg-primaryLight w-full h-full object-contain object-center" :alt="infoImageHolder.split('/').pop().split('.')[0]">
                </div>
                <div class="flex-1 px-3 py-4">
                    <div v-html="mapHolder" />
                </div>
            </div>
        </div>
    </div>
</template>