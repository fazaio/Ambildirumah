<template>
  <div>
    <header />
    <div class="container">
      <div class="grid">
        <div>
          <div class="profile-pic">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="profile-photo"
            />
          </div>
          <div class="profile">
            <h4>Reni styanti</h4>
            <span>08993774262</span>
          </div>
          <a href="#">Beranda</a>
          <a href="#">Profil</a>
          <a href="#">Derma</a>
          <a href="#">Riwayat</a>
          <div style="text-align: center;">
            <a href="#">Logout</a>
          </div>
        </div>
        <div>
          <h3>derma anda!</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
header {
  height: 200px;
  background-color: darkorange;
}
.grid {
  margin-top: -100px;
  display: grid;
  grid-template-columns: 250px auto;
  grid-gap: 10px;
}
.grid > div {
  padding: 10px;
  background-color: white;
  box-shadow: 0 10px 40px -10px rgba(0, 64, 128, 0.2);
  text-align: left;
}
.grid img:first-child {
  width: 80px;
  border-radius: 50%;
}
.grid .profile-pic {
  margin-top: 30px;
  text-align: center;
}
.grid .profile {
  padding: 10px 0px;
  color: #666;
  text-align: center;
}
.grid > :first-child a {
  text-decoration: none;
  cursor: pointer;
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 12px;
  background-color: #fefefe;
  color: #333;
  margin-top: 10px;
}
.grid > :first-child a:hover {
  background-color: whitesmoke;
}
.grid > :first-child a:last-child {
  margin-top: 50px;
  background-color: darkorange;
  color: white;
}
</style>
