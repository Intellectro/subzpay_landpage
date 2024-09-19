<script setup>
    import Container from "../components/Container.vue";
    import Overview from "../components/Overview.vue";
    import Ffaq from "../components/Ffaq.vue";
    import FBanner from "../components/FBanner.vue";
    import ToggleNavbar from "../customs/ToggleNavbar.vue";
</script>

<template>
    <Overview>
        <Container>
            <ToggleNavbar />
            <FBanner />
            <Ffaq />
        </Container>
    </Overview>
</template>