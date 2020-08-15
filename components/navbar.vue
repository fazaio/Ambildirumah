<template>
  <div class="container">
    <div class="nav">
      <div class="logo">Logos</div>
      <div class="menu">
        <ul>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
<style scoped>
.logo {
  float: left;
  padding: 14px 16px;
}
.menu {
  float: right;
  color: #888;
}
.nav {
  display: block;
  overflow: auto;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
li {
  float: left;
}
li a {
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  color: #888;
}
</style>
