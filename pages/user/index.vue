<template>
  <div class="container user-grid">
    <header>
      <div class="profil-photo">foto</div>
      <div class="profil-detail">detail profile</div>
    </header>
    <menu>menu</menu>
    <content>content</content>
  </div>
</template>

<script>
export default {}
</script>
<style scoped>
.user-grid {
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-rows: auto auto;
  grid-template-areas: 'h h' 'm c';
  margin-top: 100px;
  grid-gap: 10px;
}
header {
  display: flex;
  grid-area: h;
  padding: 10px;
  background-color: darkorange;
  color: #fefefe;
  border-radius: 5px;
  box-shadow: 0 10px 40px -10px rgba(0, 64, 128, 0.2);
  padding: 20px 5px;
}
menu {
  grid-area: m;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 10px 40px -10px rgba(0, 64, 128, 0.2);
}
content {
  grid-area: c;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 10px 40px -10px rgba(0, 64, 128, 0.2);
}
.profil-photo {
  width: 200px;
  text-align: center;
}
.profil-detail {
  flex: 1;
}
</style>
