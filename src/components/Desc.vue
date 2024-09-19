<script setup>
    import { computed } from "vue";
    import {descContent, socials} from "../data";
    import {founder} from "../images";

    const descContents = computed(() => descContent);
    const socialGetter = computed(() => socials);
</script>

<template>
    <div class="mt-5 w-full h-fit bg-primaryLight py-10">
        <div class="w-[75%] mx-auto flex">
            <div class="flex-1 flex flex-col gap-y-4">
                <div class="text-lg font-bold">More about us</div>
                <div class="flex flex-col gap-y-5">
                    <div class="text-2xl font-[550]">Aneke Oluebube Samuel</div>
                    <div class="flex flex-col gap-y-2">
                        <div class="text-base" v-for="({id, content}) in descContents" :key="id">{{content}}</div>
                    </div>
                    <div class="flex items-center gap-x-6">
                        <div class="w-[28px] h-[28px] rounded-full flex justify-center items-center bg-primaryLight" v-for="({id, icon, link}) in socialGetter" :key="id">
                            <a :href="link">
                                <i :class="icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-1">
                <div class="w-full flex justify-center">
                    <div class="w-[85%] h-[400px] rounded-full overflow-hidden bg-[#3c3230]/60">
                        <img class="w-full h-full object-contain object-center" :src="founder" :alt="founder.split('/').pop().split('.')[0]">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
