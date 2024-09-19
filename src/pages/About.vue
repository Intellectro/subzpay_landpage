<script setup>
import Container from "../components/Container.vue";
import Overview from "../components/Overview.vue";
import Banner from "../components/Banner.vue";
import Desc from "../components/Desc.vue";
import AboutServies from "../components/AboutServies.vue";
import Office from "../components/Office.vue";
import ToggleNavbar from "../customs/ToggleNavbar.vue";
</script>

<template>
    <Overview>
        <Container>
            <ToggleNavbar />
            <Banner pageTitle="Hi There, We're" pageSubTitle="SubzPay Technology" desc="SUBZPAY is a secure and reliable platform that streamlines bill payments and provides you with a seamless experience, allowing you to easily pay your electricity bills, education bills, airtime top-ups, cable TV subscriptions, data bundle top-ups, and internet bills - all in one place." size="0.7" />
            <Desc />
            <Office />
            <AboutServies  />
        </Container>
    </Overview>
</template>
