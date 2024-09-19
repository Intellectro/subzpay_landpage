<script setup>
    defineProps({
        id: {
            type: Number,
            default: 0,
        },
        title: {
            type: String,
            default: ""
        },
        contents: {
            type: Object,
            default: []
        },
        image: {
            type: String,
            default: ""
        }
    });
</script>

<template>
    <div class="flex-1" v-motion-slide-visible-once-bottom>
        <div class="w-full h-fit flex flex-col gap-y-2">
            <div class="w-full h-[160px] border">
                <img class="w-full h-full object-cover object-center" :src="image" :alt="image.split('/').pop().slice(0, -4) + ' Image'">
            </div>
            <router-link :to='{name: "account"}'>
                <div class="w-full py-2 px-1 border border-primaryColor font-[550] text-primaryColor uppercase text-center">
                    {{title}}
                </div>
            </router-link>
            <div class="w-full py-2 px-1 border border-primaryColor font-[550] text-primaryColor text-[12.5px] text-center" v-for="({id, desc}) in contents" :key="id">
                {{desc}}
            </div>
        </div>
    </div>
</template>