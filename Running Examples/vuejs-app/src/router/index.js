import {createRouter, createWebHistory} from "vue-router";

import Home from "../components/homeComponent.vue";
import Trucks from "../components/trucksComponent.vue";

const router = createRouter({

    history: createWebHistory(),

    routes: [

        {
            path: "/",
            name: "home",
            component: Home
        },

        {
            path: "/Trucks",
            name: "trucks",
            component: Trucks
        }
        
    ]
    
})

export default router;







