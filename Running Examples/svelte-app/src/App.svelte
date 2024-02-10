<script lang="ts">
  import Router from "svelte-spa-router";
  import "bootstrap/dist/css/bootstrap.min.css";

  import Home from "./routes/Home.svelte";
  import Trucks from "./routes/Trucks.svelte";
  import NotFound from "./routes/NotFound.svelte";

  import Footer from "./components/footer.svelte";

  const routes = {
    "/": Home,
    "/trucks": Trucks,
    "*": NotFound 
  }
</script>

<header>
  <nav class="navbar navbar-dark navbar-expand-lg bg-body-tertiary bg-primary">
    <div class="container">
      <a class="navbar-brand" href="/">MT International</a>
  
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link" href="#/">Home</a>
          <a class="nav-link" href="#/trucks">Trucks</a>
        </div>
      </div>
    </div>
  </nav>
  </header>

<main class="container">
  <Router {routes}/>
</main>

<Footer/>