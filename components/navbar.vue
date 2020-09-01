<template>
  <div>
    <div class="intro">
      <div class="container">
        <div>
          <font-awesome-icon icon="phone" />
        </div>
        <div>
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </div>
        <div>
          <font-awesome-icon :icon="['fab', 'facebook-square']" />
        </div>
        <div>
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </div>
        <div>
          <img src="@/assets/img/indonesia.svg" alt />
        </div>
      </div>
    </div>
    <div class="bgc">
      <div class="container">
        <div class="nav">
          <div class="logo">Ambildirumah.com</div>
          <div class="menu">login</div>
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
.intro {
  color: #abadb0;
  background-color: whitesmoke;
  text-align: right;
}
.intro > .container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
}
.intro > .container > div {
  font-size: 14px;
  padding: 5px;
  margin: 2px 5px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
}

.intro > .container > div > img {
  width: 15px;
}

.bgc {
  background-color: darkorange;
  color: white;
}
.logo {
  float: left;
  padding: 18px 16px;
}
.menu {
  float: right;
  padding: 18px 16px;
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
