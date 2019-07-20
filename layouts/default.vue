<template>
  <div>
    <nav>
      <div class="nav-wrapper">
<!--        <a href="#!" class="brand-logo"><i class="material-icons">cloud</i>Logo</a>-->
        <ul class="left">
          <li>
            <nuxt-link to="/">
              <i class="material-icons small">dashboard</i>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <i class=" material-icons small">home</i>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <i class="material-icons small">refresh</i>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>

    <br>

    <nuxt />
  </div>
</template>

<style>

  nav i.small {
    font-size: 3rem;
  }
</style>
