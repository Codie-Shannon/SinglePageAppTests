<script setup>
  import {RouterView, RouterLink} from "vue-router";
  import Footer from "./components/footerComponent.vue";
</script>


<template>
  <header>
    <nav class="navbar navbar-dark navbar-expand-lg bg-body-tertiary bg-primary">
      <div class="container">
        <a class="navbar-brand" href="/">MT International</a>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <RouterLink class="nav-link" to="/">Home</RouterLink>
            <RouterLink class="nav-link" to="/Trucks">Trucks</RouterLink>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <main class="container">
    <RouterView/>
  </main>

  <Footer/>
</template>