<script setup>
import ContactBanner from "../components/ContactBanner.vue";
import Container from "../components/Container.vue";
import Overview from "../components/Overview.vue";
import ToggleNavbar from "../customs/ToggleNavbar.vue";
</script>

<template>
    <overview>
        <container>
            <toggle-navbar></toggle-navbar>
            <contact-banner></contact-banner>
        </container>
    </overview>
</template>
