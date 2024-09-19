<script setup>
    import Container from "../components/Container.vue";
    import Overview from "../components/Overview.vue";
    import Banner from "../components/Banner.vue";
    import CardContainer from "../components/CardContainer.vue";
    import Services from "../components/Services.vue";
    import Pricing from "../components/Pricing.vue";
    import Choose from "../components/Choose.vue";
    import Hfaq from "../components/Hfaq.vue";
    import Footer from "../components/Footer.vue";
    import ToggleNavbar from "../customs/ToggleNavbar.vue";
</script>

<template>
    <Overview>
        <Container>
            <ToggleNavbar />
            <Banner pageTitle="The money app" pageSubTitle="for Africans" desc="Make free transfers, enjoy cashless payment options and earn interest on your savings with Kuda." />
            <CardContainer/>
            <Services />
            <Pricing />
            <Choose />
            <Hfaq />
            <Footer />
        </Container>
    </Overview>
</template>