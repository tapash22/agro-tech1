<template>
  <div class="row">
    <div class="text">
      <p>"Quality is foremost vigor"</p>
    </div>
  </div>
</template>

<style scoped>
.row {
  position: fixed;
  right: 0;
  width: 700px;
  margin-top: -15px;
  height: 35px;
  background:green;
  margin-left: 2px;
  z-index: 1;
  border-bottom-left-radius: 90%;
}
.text {
  position: relative;
  overflow: hidden;
  margin-left: 25%;
  padding: 5px;
}
.text p {
  font-size: 1.2em;
  font-weight: 500;
  color: #fff;
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  text-align: center;
  transform: translateX(100%);
  animation: text 10s linear infinite;
}

@keyframes text {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
@media only screen and (max-width: 767px) {
  .row {
    position: fixed;
    width: 600px;
    height: 35px;
    background: rgb(3, 77, 7);
    z-index: 1;
  }
}
</style>