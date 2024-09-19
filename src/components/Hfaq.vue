<script setup>
import { ref } from "vue";

const active = ref(1);
const downChevron = ref(`<svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="size-4">
                                        <path
                                            fill-rule="evenodd"
                                            d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                                            clip-rule="evenodd" />
                                    </svg>`);
const upChevron =
    ref(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
  <path fill-rule="evenodd" d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clip-rule="evenodd" />
</svg>
`);

const handleBar = (e) => {
    const dataId = +e.currentTarget.dataset.id;
    if (dataId) {
        if (active.value == dataId) {
            active.value = 0;
            return;
        }
        active.value = dataId;
    }
};
</script>

<template>
    <div class="w-full px-10 py-10">
        <div class="flex flex-col gap-y-7">
            <div class="flex flex-col gap-y-2 items-center">
                <div class="text-[15px] font-bold">
                    Checkout Our <span class="text-primaryColor">FAQ'S</span>
                </div>
                <div class="flex flex-col leading-tight text-center">
                    <div class="text-[22px] font-bold">
                        Have a question about our services? Our FAQ section has
                        got you
                    </div>
                    <div class="text-[22px] font-bold">
                        covered with helpful information on all of our
                        offerings.
                    </div>
                </div>
            </div>
            <div class="w-[85%] mx-auto px-4">
                <div class="flex gap-x-4">
                    <div
                        class="flex-1 py-6 px-4 bg-primaryColor flex flex-col justify-center gap-y-8 rounded-md">
                        <div
                            class="w-full py-3 px-2 flex items-center gap-x-4 bg-primaryLight rounded-[10vmax]">
                            <div
                                class="w-[40px] h-[40px] rounded-full border border-primaryColor flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="#40196d"
                                    class="size-7">
                                    <path
                                        fill-rule="evenodd"
                                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="text-[15px] font-[550]">
                                Data Bundle Questions
                            </div>
                        </div>
                        <div
                            class="w-full py-3 px-2 flex items-center gap-x-4 bg-primaryLight rounded-[10vmax]">
                            <div
                                class="w-[40px] h-[40px] rounded-full border border-primaryColor flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="#40196d"
                                    class="size-7">
                                    <path
                                        fill-rule="evenodd"
                                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="text-[15px] font-[550]">
                                Airtime Topup Questions
                            </div>
                        </div>
                        <div
                            class="w-full py-3 px-2 flex items-center gap-x-4 bg-primaryLight rounded-[10vmax]">
                            <div
                                class="w-[40px] h-[40px] rounded-full border border-primaryColor flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="#40196d"
                                    class="size-7">
                                    <path
                                        fill-rule="evenodd"
                                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="text-[15px] font-[550]">
                                Betting Questions
                            </div>
                        </div>
                        <div
                            class="w-full py-3 px-2 flex items-center gap-x-4 bg-primaryLight rounded-[10vmax]">
                            <div
                                class="w-[40px] h-[40px] rounded-full border border-primaryColor flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="#40196d"
                                    class="size-7">
                                    <path
                                        fill-rule="evenodd"
                                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="text-[15px] font-[550]">
                                Utility Bills Questions
                            </div>
                        </div>
                        <div
                            class="w-full py-3 px-2 flex items-center gap-x-4 bg-primaryLight rounded-[10vmax]">
                            <div
                                class="w-[40px] h-[40px] rounded-full border border-primaryColor flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="#40196d"
                                    class="size-7">
                                    <path
                                        fill-rule="evenodd"
                                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="text-[15px] font-[550]">
                                Cable TV Questions
                            </div>
                        </div>
                        <div
                            class="w-full py-3 px-2 flex items-center gap-x-4 bg-primaryLight rounded-[10vmax]">
                            <div
                                class="w-[40px] h-[40px] rounded-full border border-primaryColor flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="#40196d"
                                    class="size-7">
                                    <path
                                        fill-rule="evenodd"
                                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="text-[15px] font-[550]">
                                General Questions
                            </div>
                        </div>
                        <router-link to="/contact">
                            <div
                                class="w-full py-3 px-2 flex items-center justify-center gap-x-4 bg-primaryLight rounded-[10vmax] text-primaryColor font-[550] text-[13px] uppercase">
                                Still Have Questions Contact Us <i class="fa fa-arrow-right"></i>
                            </div>
                        </router-link>
                    </div>
                    <div class="flex-1">
                        <div :class="['flex flex-col gap-y-3 py-3 px-3 rounded-md h-auto', active == 1 ? ' bg-primaryLight' : '']">
                            <div class="flex items-center gap-x-5">
                                <div
                                    @click="(e) => handleBar(e)"
                                    class="h-8 w-8 rounded-full flex justify-center items-center border"
                                    data-id="1"
                                    aria-label="first-collapse-bar">
                                    <div v-html="active == 1 ? upChevron : downChevron"></div>
                                </div>
                                <div :class="['font-[550] uppercase transition-all duration-300 ease-linear', active == 1 ? ' text-[14.5px]' : ' text-[13px]']">
                                    Why Should I use SUBZPAY
                                </div>
                            </div>
                            <div
                                class="w-full transition-all duration-700 ease-linear"
                                :style="[
                                    active == 1
                                        ? 'height: auto;'
                                        : 'height: 0; overflow: hidden;',
                                ]">
                                Using SUBZPAY is simply the safest and
                                easiest way to pay for Utilities in Nigeria. It
                                is faster than any other payment platform.You
                                can also use USSD to recharge, it's that easy.
                                SUBZPAY strives to give you access to
                                constant Cheap Services and also keep your data
                                safe through our military grade safety and
                                security system.
                            </div>
                        </div>
                        <div :class="['flex flex-col gap-y-3 py-3 px-3 rounded-md h-auto', active == 2 ? ' bg-primaryLight' : '']">
                            <div class="flex items-center gap-x-5">
                                <div
                                    @click="(e) => handleBar(e)"
                                    class="h-8 w-8 rounded-full flex justify-center items-center border"
                                    data-id="2"
                                    aria-label="first-collapse-bar">
                                    <div v-html="active == 2 ? upChevron : downChevron"></div>
                                </div>
                                <div :class="['font-[550] uppercase transition-all duration-300 ease-linear', active == 2 ? ' text-[14.5px]' : ' text-[13px]']">
                                    How Can I Pay For Utility On SUBZPAY
                                </div>
                            </div>
                            <div
                                class="w-full transition-all duration-700 ease-linear"
                                :style="[
                                    active == 2
                                        ? 'height: auto;'
                                        : 'height: 0; overflow: hidden;',
                                ]">
                                Using SUBZPAY is simply the safest and easiest way to pay for Utilities in Nigeria. It is faster than any other payment platform.You can also use USSD to recharge, it's that easy. SUBZPAY strives to give you access to constant Cheap Services and also keep your data safe through our military grade safety and security system.
                            </div>
                        </div>
                        <div :class="['flex flex-col gap-y-3 py-3 px-3 rounded-md h-auto', active == 3 ? ' bg-primaryLight' : '']">
                            <div class="flex items-center gap-x-5">
                                <div
                                    @click="(e) => handleBar(e)"
                                    class="h-8 w-8 rounded-full flex justify-center items-center border"
                                    data-id="3"
                                    aria-label="first-collapse-bar">
                                    <div v-html="active == 3 ? upChevron : downChevron"></div>
                                </div>
                                <div :class="['font-[550] uppercase transition-all duration-300 ease-linear', active == 3 ? ' text-[14.5px]' : ' text-[13px]']">
                                    How do I Pay Or deposit on SUBZPAY?
                                </div>
                            </div>
                            <div
                                class="w-full transition-all duration-700 ease-linear"
                                :style="[
                                    active == 3
                                        ? 'height: auto;'
                                        : 'height: 0; overflow: hidden;',
                                ]">
                                Using SUBZPAY is simply the safest and easiest way to pay for Utilities in Nigeria. It is faster than any other payment platform.You can also use USSD to recharge, it's that easy. SUBZPAY strives to give you access to constant Cheap Services and also keep your data safe through our military grade safety and security system.
                            </div>
                        </div>
                        <div :class="['flex flex-col gap-y-3 py-3 px-3 rounded-md h-auto', active == 4 ? ' bg-primaryLight' : '']">
                            <div class="flex items-center gap-x-5">
                                <div
                                    @click="(e) => handleBar(e)"
                                    class="h-8 w-8 rounded-full flex justify-center items-center border"
                                    data-id="4"
                                    aria-label="first-collapse-bar">
                                    <div v-html="active == 4 ? upChevron : downChevron"></div>
                                </div>
                                <div :class="['font-[550] uppercase transition-all duration-300 ease-linear', active == 4 ? ' text-[14.5px]' : ' text-[13px]']">
                                    What Happen If my card doesn't work?
                                </div>
                            </div>
                            <div
                                class="w-full transition-all duration-700 ease-linear"
                                :style="[
                                    active == 4
                                        ? 'height: auto;'
                                        : 'height: 0; overflow: hidden;',
                                ]">
                                Using SUBZPAY is simply the safest and easiest way to pay for Utilities in Nigeria. It is faster than any other payment platform.You can also use USSD to recharge, it's that easy. SUBZPAY strives to give you access to constant Cheap Services and also keep your data safe through our military grade safety and security system.
                            </div>
                        </div>
                        <div :class="['flex flex-col gap-y-3 py-3 px-3 rounded-md h-auto', active == 5 ? ' bg-primaryLight' : '']">
                            <div class="flex items-center gap-x-5">
                                <div
                                    @click="(e) => handleBar(e)"
                                    class="h-8 w-8 rounded-full flex justify-center items-center border"
                                    data-id="5"
                                    aria-label="first-collapse-bar">
                                    <div v-html="active == 5 ? upChevron : downChevron"></div>
                                </div>
                                <div :class="['font-[550] uppercase transition-all duration-300 ease-linear', active == 5 ? ' text-[14.5px]' : ' text-[13px]']">
                                    I was debited for a failed transaction
                                </div>
                            </div>
                            <div
                                class="w-full transition-all duration-700 ease-linear"
                                :style="[
                                    active == 5
                                        ? 'height: auto;'
                                        : 'height: 0; overflow: hidden;',
                                ]">
                                Using SUBZPAY is simply the safest and easiest way to pay for Utilities in Nigeria. It is faster than any other payment platform.You can also use USSD to recharge, it's that easy. SUBZPAY strives to give you access to constant Cheap Services and also keep your data safe through our military grade safety and security system.
                            </div>
                        </div>
                        <div :class="['flex flex-col gap-y-3 py-3 px-3 rounded-md h-auto', active == 6 ? ' bg-primaryLight' : '']">
                            <div class="flex items-center gap-x-5">
                                <div
                                    @click="(e) => handleBar(e)"
                                    class="h-8 w-8 rounded-full flex justify-center items-center border"
                                    data-id="6"
                                    aria-label="first-collapse-bar">
                                    <div v-html="active == 6 ? upChevron : downChevron"></div>
                                </div>
                                <div :class="['font-[550] uppercase transition-all duration-300 ease-linear', active == 6 ? ' text-[14.5px]' : ' text-[13px]']">
                                    What is SUBZPAY?
                                </div>
                            </div>
                            <div
                                class="w-full transition-all duration-700 ease-linear"
                                :style="[
                                    active == 6
                                        ? 'height: auto;'
                                        : 'height: 0; overflow: hidden;',
                                ]">
                                Using SUBZPAY is simply the safest and easiest way to pay for Utilities in Nigeria. It is faster than any other payment platform.You can also use USSD to recharge, it's that easy. SUBZPAY strives to give you access to constant Cheap Services and also keep your data safe through our military grade safety and security system.
                            </div>
                        </div>
                        <div :class="['flex flex-col gap-y-3 py-3 px-3 rounded-md h-auto', active == 7 ? ' bg-primaryLight' : '']">
                            <div class="flex items-center gap-x-5">
                                <div
                                    @click="(e) => handleBar(e)"
                                    class="h-8 w-8 rounded-full flex justify-center items-center border"
                                    data-id="7"
                                    aria-label="first-collapse-bar">
                                    <div v-html="active == 7 ? upChevron : downChevron"></div>
                                </div>
                                <div :class="['font-[550] uppercase transition-all duration-300 ease-linear', active == 7 ? ' text-[14.5px]' : ' text-[13px]']">
                                    Is SUBZPAY safe and secure to use?
                                </div>
                            </div>
                            <div
                                class="w-full transition-all duration-700 ease-linear"
                                :style="[
                                    active == 7
                                        ? 'height: auto;'
                                        : 'height: 0; overflow: hidden;',
                                ]">
                                Using SUBZPAY is simply the safest and easiest way to pay for Utilities in Nigeria. It is faster than any other payment platform.You can also use USSD to recharge, it's that easy. SUBZPAY strives to give you access to constant Cheap Services and also keep your data safe through our military grade safety and security system.
                            </div>
                        </div>
                        <div :class="['flex flex-col gap-y-3 py-3 px-3 rounded-md h-auto', active == 8 ? ' bg-primaryLight' : '']">
                            <div class="flex items-center gap-x-5">
                                <div
                                    @click="(e) => handleBar(e)"
                                    class="h-8 w-8 rounded-full flex justify-center items-center border"
                                    data-id="8"
                                    aria-label="first-collapse-bar">
                                    <div v-html="active == 8 ? upChevron : downChevron"></div>
                                </div>
                                <div :class="['font-[550] uppercase transition-all duration-300 ease-linear', active == 8 ? ' text-[14.5px]' : ' text-[13px]']">
                                    How do I add money to my SUBZPAY wallet?
                                </div>
                            </div>
                            <div
                                class="w-full transition-all duration-700 ease-linear"
                                :style="[
                                    active == 8
                                        ? 'height: auto;'
                                        : 'height: 0; overflow: hidden;',
                                ]">
                                Using SUBZPAY is simply the safest and easiest way to pay for Utilities in Nigeria. It is faster than any other payment platform.You can also use USSD to recharge, it's that easy. SUBZPAY strives to give you access to constant Cheap Services and also keep your data safe through our military grade safety and security system.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
