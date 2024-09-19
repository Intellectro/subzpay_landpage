<script setup>
    import {reactive} from "vue";
    defineProps({
        title: {
            type: String,
            default: "",
        },
        content: {
            type: String,
            default: "",
        },
        id: {
            type: Number,
            default: 0,
        },
        icon: {
            type: String,
            default: "",
        },
    });
    const boxicized = reactive({
        height: "60px",
        width: "220px",
        borderRadius: "50%"
    })
</script>

<template>
    <div class="flex-1 px-4 py-8 bg-white rounded-md">
        <div class="flex items-center gap-x-5">
            <div
                :style="boxicized"
                class="flex justify-center items-center bg-primaryLight">
                <div v-html="icon"></div>
            </div>
            <div class="flex flex-col gap-y-2">
                <div class="text-[16.5px] font-bold text-primaryColor">
                    {{ title }}
                </div>
                <div class="text-[14px] font-[550]">
                    {{ content }}
                </div>
            </div>
        </div>
    </div>
</template>
