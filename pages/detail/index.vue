/* eslint-disable vue/no-unused-components */
<template>
  <div>
    <Navbar />
    <div class="container detail-grid">
      <header>niceone</header>
      <aside>
        <h1>Nasi uduk</h1>
        <div class="location">
          <div>JL Pelabuhan Bakahuni no 53, Malang</div>
        </div>
        <div class="qty">
          Jumlah :
          <b>12</b>
        </div>
        <div class="button">
          <button>Ambil</button>
          <button>Hubungi Derma</button>
        </div>
        <div class="shared">
          <p>Bagikan :</p>
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
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </div>
          <div>
            <font-awesome-icon :icon="['fab', 'whatsapp']" />
          </div>
        </div>
      </aside>
      <content>
        <h4>Peraturan :</h4>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, ullam
        ab numquam cupiditate molestias excepturi assumenda iure consequatur
        dolore distinctio odio voluptates earum quam. Fugit, ad ea? Ad, ex
        maxime!
      </content>
    </div>
    <foot />
  </div>
</template>

<script>
import Navbar from '@/components/navbar'
import foot from '@/components/foot'

export default {
  components: {
    Navbar,
    foot
  }
}
</script>
<style scoped>
.detail-grid {
  margin-top: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas: 'h a' 'c .';
  grid-gap: 10px;
}
header {
  grid-area: h;
  width: 100%;
  height: 400px;
  background-color: salmon;
}

aside {
  grid-area: a;
  padding: 20px;
  color: #666;
}
aside > h1 {
  padding: 10px;
}
aside > .location {
  padding: 10px;
  font-size: 14px;
}
aside > .qty {
  padding: 10px;
  font-size: 12px;
}
aside > .button {
  padding: 10px;
  margin-top: 10px;
}
aside > .button > :first-child {
  padding: 10px;
  border-radius: 3px;
  font-size: 12px;
  border: none;
  background-color: darkorange;
  cursor: pointer;
  color: white;
  margin: 0;
  width: 100px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
}
aside > .button > :nth-child(2) {
  padding: 10px;
  border-radius: 3px;
  font-size: 12px;
  border: none;
  /* background-color: darkorange; */
  cursor: pointer;
  color: darkorange;
  margin: 0;
  border: 1px solid darkorange;
  width: 120px;
}
aside > .shared {
  margin-top: 50px;
  padding: 10px;
}
aside > .shared > p {
  font-weight: bold;
  font-size: 12px;
  padding: 0px;
}
aside > .shared > div {
  display: inline-block;
  font-size: 18px;
  padding: 5px;
  margin: 5px;
  cursor: pointer;
  color: #888;
}

content {
  grid-area: c;
  padding: 10px;
  color: #888;
  font-size: 14px;
  margin-bottom: 200px;
}
content > h3 {
  color: #666;
}
footer {
  grid-area: f;
}
</style>
