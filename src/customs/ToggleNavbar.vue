<script setup>
    import { ref } from "vue";
    import Navbar from "../components/Navbar.vue";
    import ShowNavOnScroll from "../components/ShowNavOnScroll.vue";
    
    const ActiveComponent = ref(Navbar);

    window.addEventListener("scroll", () => {
        if (+window.scrollY <= 430) {
            ActiveComponent.value = Navbar;
            return;
        }
        ActiveComponent.value = ShowNavOnScroll;
    });
</script>

<template>
    <keep-live>
        <component :is="ActiveComponent" />
    </keep-live>
</template>