<template>
  <div class="card">
    <img src="https://picsum.photos/id/237/150/150" alt />
    <div class="info">
      <span>
        <font-awesome-icon icon="user" />
        @fazaio
      </span>
      <div class="tittle">{{ tittle }}</div>
      <div class="qty">Jumlah: {{ qty }}</div>
      <div class="address">{{ address }}</div>
      <div class="footer">
        <button class="btn">
          <font-awesome-icon :icon="['far', 'heart']" />
        </button>
        <button class="btn">Ambil</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedCard',
  props: {
    tittle: {
      type: String,
      required: true
    },
    qty: {
      type: Number,
      default: 0
    },
    address: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
/* card css */
.card {
  padding: 0px;
  margin: 10px 0px;
  background-color: #fff;
  color: #888;
  box-shadow: 0 10px 40px -10px rgba(0, 64, 128, 0.2);
  display: grid;
  grid-template-columns: 150px auto;
  grid-gap: 0px;
  border-radius: 5px;
}

.card > img {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  z-index: 1;
  background-color: #ffe3c7;
}
.card > .info {
  padding: 10px;
  position: relative;
}
.card > .info > span {
  position: absolute;
  bottom: 6px;
  font-size: 12px;
}
.card > .info > .tittle {
  color: #444;
  font-size: 15px;
  font-weight: bold;
}
.card > .info > .qty {
  padding: 5px 0px;
  font-size: 13px;
}
.card > .info > .address {
  /* position: absolute; */
  padding: 5px 0px;
  font-size: 12px;
  /* bottom: 0px; */
}
.card > .info > .footer {
  position: absolute;
  bottom: 6px;
  right: 6px;
  /* padding: 10px 0px; */
  text-align: right;
  font-size: 13px;
  border-bottom-right-radius: 5px;
}

.card > .info > .footer > :first-child {
  background-color: #fff;
  color: darkorange;
}
</style>
