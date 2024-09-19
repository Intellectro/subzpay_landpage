import { createRouter, createWebHistory } from "vue-router";
import { Home, Contact, Company, Terms, Personal, ErrorPage, About, Faq } from "../pages/index.js";

const routes = [
    {
        name: "home",
        path: "/",
        component: Home,
        children: [
            {
                name: "global",
                path: "global",
                component: Home,
            },
        ],
    },
    {
        name: "about-us",
        path: "/about-us",
        component: About,
        children: [],
    },
    {
        name: "contact",
        path: "/contact",
        component: Contact,
        children: [],
    },
    {
        name: "company",
        path: "/company",
        component: Company,
        children: []
    },
    {
        name: "terms",
        path: "/terms",
        component: Terms,
        children: []
    },
    {
        name: "error",
        path: '/*',
        component: ErrorPage,
    },
    {
        path: "/faq",
        name: "faq",
        component: Faq
    },
    {
        name: "user",
        path: "/user",
        children: [
            {
                name: "signin-user",
                path: "signin",
                component: "<h1>Sign In</h1>"
            },
            {
                name: "signup-user",
                path: "signup",
                component: "<h1>Sign Up</h1>"
            },
            {
                name: "account",
                path: "account",
                component: "<h1>Account</h1>"
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
