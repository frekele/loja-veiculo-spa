<template>
  <div>
    <header>
      <navbar />
    </header>
    <div style="background-color: #f6f6f6; min-height: 100vh; padding: 20px;">
      <div class="container" style="margin-top: 30px">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>

import Navbar from '@/components/layout/navbar'
import '@/../static/js/materialize.min'

export default {
  name: 'App',
  components: {
    Navbar,
  },
}
</script>

<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/

:root {
  --input-color: #212225;
}

body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1 0 auto;
}

/* label color */
.input-field label {
  color: var(--input-color) !important;
}
/* label focus color */
.input-field input[type=text]:focus + label {
  color: var(--input-color) !important;
}
/* label underline focus color */
.input-field input[type=text]:focus {
  border-bottom: 1px solid var(--input-color) !important;
  box-shadow: 0 1px 0 0 var(--input-color) !important;
}
.input-field input[type=password]:focus {
  border-bottom: 1px solid var(--input-color) !important;
  box-shadow: 0 1px 0 0 var(--input-color) !important;
}
.input-field input[type=date]:focus {
  border-bottom: 1px solid var(--input-color) !important;
  box-shadow: 0 1px 0 0 var(--input-color) !important;
}
/* valid color */
.input-field input[type=text].valid {
  border-bottom: 1px solid var(--input-color) !important;
  box-shadow: 0 1px 0 0 var(--input-color) !important;
}
/* invalid color */
.input-field input[type=text].invalid {
  border-bottom: 1px solid var(--input-color) !important;
  box-shadow: 0 1px 0 0 var(--input-color) !important;
}
/* icon prefix focus color */
.input-field .prefix.active {
  color: var(--input-color) !important;
}

[type="radio"]:checked+span:after, [type="radio"].with-gap:checked+span:after {
  background-color: var(--input-color) !important;
}

[type="radio"]:checked+span:after, [type="radio"].with-gap:checked+span:after {
  background-color: var(--input-color) !important;
}

[type="radio"]:checked+span:after, [type="radio"].with-gap:checked+span:before, [type="radio"].with-gap:checked+span:after {
  border: 2px solid var(--input-color) !important;
}

.dropdown-content li>span {
  color: var(--input-color) !important;
}

.tabs .tab a {
  color: var(--input-color) !important;
}

.tabs .indicator {
  background-color: var(--input-color);
}

.tabs .tab a:hover, .tabs .tab a.active {
  background-color: transparent !important;
}
</style>
