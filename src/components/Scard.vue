<script setup>
    defineProps({
        firstServiceRow: {
            type: Object,
            default: []
        },
        secServiceRow: {
            type: Object,
            default: []
        }
    })
</script>

<template>
<div class="flex flex-col gap-y-3">
    <div class="flex gap-x-4">
        <div class="flex-1 py-4 px-3 shadow-lg" v-for="({title, content, btnContent, icon}, index) in firstServiceRow" :key="index" v-motion-pop-visible>
            <div class="flex flex-col gap-y-6 items-center">    
                <div class="w-full h-fit flex flex-col gap-y-2 items-center">
                    <div v-html="icon"></div>
                    <div class="text-[20px] font-[550]">{{title}}</div>
                    <div class="text-[14.5px] font-semibold text-center">{{content}}</div>
                </div>
                <router-link to="/user/account">
                    <button class="py-2 px-7 font-bold text-white bg-primaryColor rounded-2xl">{{btnContent}}</button>
                </router-link>
            </div>
        </div>
    </div>
    <div class="flex gap-x-4">
        <div class="flex-1 py-4 px-3 shadow-lg" v-for="({title, content, btnContent, icon}, index) in secServiceRow" :key="index" v-motion-pop-visible>
            <div class="flex flex-col gap-y-6 items-center">    
                <div class="w-full h-fit flex flex-col gap-y-2 items-center">
                    <div v-html="icon"></div>
                    <div class="text-[20px] font-[550]">{{title}}</div>
                    <div class="text-[14.5px] font-semibold text-center">{{content}}</div>
                </div>
                <router-link :to="{name: 'account'}">
                    <button class="py-2 px-7 font-bold text-white bg-primaryColor rounded-2xl">{{btnContent}}</button>
                </router-link>
            </div>
        </div>
    </div>
</div>
</template>
