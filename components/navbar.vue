<template>
  <div class="bgc">
    <div class="container">
      <div class="nav">
        <div class="logo">Ambildirumah.com</div>
        <div class="menu">
          <ul>
            <li>
              <nuxt-link to="/user/login">
                <i class="light-color fas fa-user-circle"></i>
                Login
              </nuxt-link>
            </li>
          </ul>
        </div>
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
.bgc {
  background-color: darkorange;
  color: white;
}
.logo {
  float: left;
  padding: 14px 16px;
}
.menu {
  float: right;
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
  color: white;
}
</style>
