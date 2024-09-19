<script setup>
    import "../styles/faq.css";
    import TermsList from "./TermsList.vue";
    import {terms} from "../data/index.js";

    const stroke = import.meta.env.VITE_SVG_STROKE;
</script>

<template>
    <div class="flex flex-col gap-y-6">
        <div class="f-container w-full h-fit px-8 py-20 flex justify-center items-center">
            <div class="flex flex-col gap-y-6">
                <div class="flex flex-col gap-y-1">
                    <div class="text-[32px] font-bold text-center text-white">Terms of Service</div>
                    <img :src="stroke" alt="#">
                </div>
                <div class="text-lg text-white text-center font-[550]">Update 20-April, 2024</div>
                <a href="#" class="self-center">
                    <button class="py-2 px-5 bg-primaryColor text-white rounded-2xl border-2 border-primaryLight">
                        <span>Download As PDF</span>
                        <i class="fa fa-download"></i>
                    </button>
                </a>
            </div>
        </div>
        <div class="w-full px-4 py-10">
            <div class="w-[75%] mx-auto">
                <div class="flex flex-col gap-y-6">
                    <div class="text-[16.5px] text-pretty">Welcome to Subzpay, an online payment platform that allows you to pay your bills easily and securely. Please read these Terms of Service carefully before using the Subzpay service. By using the Subzpay service, you agree to be bound by these Terms of Service, as well as any additional terms and conditions that may apply to specific features or services offered by Subzpay. If you do not agree to these Terms of Service, you may not use the Subzpay service.</div>
                    <TermsList v-for="(data, index) in terms" :key="index" v-bind="data" />
                </div>
            </div>
        </div>
    </div>
</template>