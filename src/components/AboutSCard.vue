<script setup>
import { reactive } from 'vue';
    defineOptions({
        inheritAttrs: false
    });
    defineProps({
        id: {
            type: Number,
            default: 0,
        },
        icon: {
            type: String,
            default: ""
        },
        title: {
            type: String,
            default: ""
        },
        description: {
            type: String,
            default: ""
        }
    });
    const styledIcon = reactive({
        borderRadius: 50+"%"
    })
</script>

<template>
    <div class="w-full flex items-center px-2 py-5 gap-x-6 bg-primaryLight" :class="id == 7 && $attrs.class" v-motion-pop-visible>
        <div :style="styledIcon" class="p-4 flex justify-center items-center bg-primaryColor rounded-[10vmax]">
            <div v-html="icon ?? '{icon data}'"></div>
        </div>
        <div class="flex flex-col gap-y-4">
            <div class="text-lg font-bold">{{title}}</div>
            <div class="text-[15px]">{{description}}</div>
        </div>
    </div>
</template>