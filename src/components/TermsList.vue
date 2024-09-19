<script setup>
    defineProps({
        title: {
            type: String,
            default: ""
        },
        id: {
            type: Number,
            default: 0
        },
        content: {
            type: String,
            default: ""
        }
    })
</script>

<template>
    <div class="flex flex-col gap-y-2" :id="id">
        <div class="text-lg font-[550]">{{ title }}</div>
        <div class="text-pretty text-[15.5px] font-[500]">{{ content }}</div>
    </div>
</template>