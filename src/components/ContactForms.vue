<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import "animate.css";

    const parent_name_ref = defineModel('fullname');
    const parent_email_ref = defineModel('email');
    const parent_phone_ref = defineModel('phone');
    const parent_reason_ref = defineModel('reason');
    const parent_desc_ref = defineModel('desc');

    const global_ref = ref({bool_value: false, id: 0, stagnant_elems: []});
    const crypto_user_uuid = ref(crypto.randomUUID());

    const global_con_ref = ref(null);

    defineExpose({
        global_con_ref,
    });

    const handleInputFocus = () => {
        const inputs = document.querySelectorAll('.focus-holder-tag:not(.user-uuid)');

        inputs.forEach(input => {
            const activeHandler = ref(false);
            input.addEventListener('focus', (e) => {
                const input_dataid = +(e.currentTarget.dataset.id);
                const input_dataValue = e.currentTarget.dataset.value;
                activeHandler.value = true;
                Object.assign(global_ref.value, {bool_value: activeHandler.value, id: input_dataid});
                global_ref.value.stagnant_elems.push(input_dataValue);
            });
        });
    }
    onMounted(() => {
        window.addEventListener("load", handleInputFocus)
    });
    onUnmounted(() => {
        window.removeEventListener("load", handleInputFocus);
    })
</script>

<template>
    <div class="w-full py-14 px-4" id="fill-form" ref="global_con_ref">
        <div class="mx-auto w-[75%] px-9 py-7 shadow-lg">
            <div class="flex flex-col gap-y-6">
                <div class="text-[24px] font-[550]">Get In Touch*</div>
                <div class="w-full flex flex-col gap-y-3">
                    <form action="#" class="w-full flex flex-col gap-y-6">
                        <div class="flex flex-col relative">
                            <label for="fullname" class="absolute top-0 left-0 pointer-events-none transition-all duration-400 ease-linear" :class="[((global_ref.bool_value && (global_ref.id === 1)) || (global_ref.stagnant_elems.includes('name'))) ? '-translate-y-[18px] text-[13.5px] text-primaryColor' : 'translate-y-[-1px]']">Fullname*</label>
                            <input data-id="1" data-value="name" type="text" placeholder="" class="focus-holder-tag text-[13px] px-3 border-b-2 border-bottom border-b-black outline-none">
                        </div>
                        <div class="flex flex-col relative">
                            <label for="email" class="absolute top-0 left-0 pointer-events-none transition-all duration-400 ease-linear" :class="[((global_ref.bool_value && (global_ref.id === 2)) || (global_ref.stagnant_elems.includes('email'))) ? '-translate-y-[18px] text-[13.5px] text-primaryColor' : 'translate-y-[-1px]']">Email*</label>
                            <input data-id="2" data-value="email" type="email" placeholder="" class="focus-holder-tag text-[13px] px-3 border-b-2 border-bottom border-b-black outline-none">
                        </div>
                        <div class="flex flex-col relative">
                            <label for="phone" class="absolute top-0 left-0 pointer-events-none transition-all duration-400 ease-linear" :class="[((global_ref.bool_value && (global_ref.id === 3)) || (global_ref.stagnant_elems.includes('phone'))) ? '-translate-y-[18px] text-[13.5px] text-primaryColor' : 'translate-y-[-1px]']">Phone*</label>
                            <input data-id="3" data-value="phone" type="text" placeholder="" class="focus-holder-tag text-[13px] px-3 border-b-2 border-bottom border-b-black outline-none">
                        </div>
                        <div class="flex flex-col relative">
                            <label for="phone" class="absolute top-0 left-0 pointer-events-none transition-all duration-400 ease-linear" :class="[((global_ref.bool_value && (global_ref.id === 4)) || (global_ref.stagnant_elems.includes('subject'))) ? '-translate-y-[18px] text-[13.5px] text-primaryColor' : 'translate-y-[-1px]']">Subject*</label>
                            <input data-id="4" data-value="subject" type="text" placeholder="" class="focus-holder-tag text-[13px] px-3 border-b-2 border-bottom border-b-black outline-none">
                        </div>
                        <input data-id="0" :data-value="crypto_user_uuid" type="hidden" placeholder="" class="user-uuid focus-holder-tag text-[13px] px-3 border-b-2 border-bottom border-b-black outline-none" :value="crypto_user_uuid">
                        <div class="flex flex-col relative">
                            <label for="phone" class="absolute top-0 left-0 pointer-events-none transition-all duration-400 ease-linear" :class="[((global_ref.bool_value && (global_ref.id === 5)) || (global_ref.stagnant_elems.includes('reason'))) ? '-translate-y-[18px] text-[13.5px] text-primaryColor' : 'translate-y-[-1px]']">Reason*</label>
                            <textarea data-id="5" data-value="reason" rows="1" type="text" placeholder="" class="focus-holder-tag text-[13px] px-3 border-b-2 border-bottom border-b-black outline-none text-pretty"></textarea>
                        </div>
                        <button class="self-start px-3 py-2 font-[550] bg-primaryColor rounded-md flex gap-x-2 items-center text-white text-[13px] animate__animated animate__pulse animate__infinite">
                            <span>Send Message</span>
                            <i class="fas fa-user-plus"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>