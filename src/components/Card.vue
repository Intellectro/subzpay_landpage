<script setup>
defineProps({
    icon: {
        type: String,
        default: "",
    },
    content: {
        type: String,
        default: "",
    },
});
</script>

<template>
    <div class="w-full flex flex-col gap-y-3 shadow-lg py-4 px-4" v-motion-roll-visible-bottom>
        <div v-html="icon"></div>
        <div class="text-[14.5px] font-bold text-primaryColor">
            {{ content }}
        </div>
    </div>
</template>
