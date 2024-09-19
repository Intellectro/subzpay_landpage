<script setup>
    import { ref } from 'vue';
    defineProps({
        id: {
            type: Number,
            default: 0
        },
        title: {
            type: String,
            default: ""
        },
        content:{
            type: String,
            default: ""
        },
        downCaret: {
            type: String,
            default: ""
        },
        upCaret: {
            type: String,
            default: ""
        }
    })
    const isOpen = ref(false);

    const handleOpenTab = () => {
        isOpen.value = !isOpen.value;
    }
</script>

<template>
    <div class="flex flex-col gap-y-2" :class="{'bg-primaryLight' : isOpen}">
        <div class="flex gap-x-9 items-center px-3 py-2" @click="handleOpenTab">
            <div
                aria-label="svg-holder"
                class="w-[30px] h-[30px] rounded-full border flex justify-center items-center">
                <div v-html="isOpen ? upCaret : downCaret" />
            </div>
            <div :class="`text-[17px] transition-all duration-700 ease-linear ${isOpen ? 'text-[1.2rem]' : ''} font-[550]`">
                {{title}}
            </div>
        </div>
        <div :class="`${isOpen ? 'h-auto px-3 py-2' : 'h-0 overflow-y-hidden'}`">
            {{content}}
        </div>
    </div>
</template>
