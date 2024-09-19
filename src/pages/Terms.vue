<script setup>
    import Overview from '../components/Overview.vue';
    import Container from '../components/Container.vue';
    import ToggleNavbar from '../customs/ToggleNavbar.vue';
    import TermsBanner from '../components/TermsBanner.vue';
</script>

<template>
    <overview>
        <container>
            <toggle-navbar></toggle-navbar>
            <terms-banner></terms-banner>
        </container>
    </overview>
</template>