<script setup>
    import "../styles/faq.css";
    const stroke = import.meta.env.VITE_SVG_STROKE;
</script>

<template>
    <div class="f-container w-full h-fit px-8 py-20 flex justify-center items-center">
        <div class="flex flex-col gap-y-6">
            <div class="text-[32px] font-bold text-center text-white">FAQ</div>
            <img :src="stroke" alt="#">
            <div class="text-lg text-white">Here you can resolve any doubts that you may have</div>
            <router-link to="/contact" class="self-center">
                <button class="py-2 px-5 bg-primaryColor text-white rounded-2xl border-2 border-primaryLight">
                    <span>Talk With Us Here</span>
                    <i class="fa fa-arrow-right"></i>
                </button>
            </router-link>
        </div>
    </div>
</template>