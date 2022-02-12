<template>
  <div class="text">
    <p>"The best doctor in the world is the veterinarian.They can't ask their patients what is the matter they've got to just know.Thanks to all veterinarian."</p>
  </div>
</template>

<style scoped>
.text {
  position: fixed;
  right: 0;
  width: 100%;
  top: 120px;
  height: 35px;
  z-index:99;
  background: linear-gradient(
    to right,
    rgb(35, 2, 58) 0%,
    rgb(35, 2, 58) 50%,
    #fff 0%,
    #fff 50%,
    rgba(35, 2, 58, 0.74) 50%,
    rgba(35, 2, 58, 0.562) 100%
  );
  display: inline;
}
.text p {
  font-size: 1.2em;
  font-weight: 500;
  color: #fff;
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  right: 0;
  text-align: center;
  transform: translateX(100%);
  animation: text 20s linear infinite;
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
  .text {
    position: fixed;
    right: 0;
    width: 100%;
    top: 110px;
    height: 35px;
    margin-left: 2px;
    z-index: 99;
    background: linear-gradient(
      to right,
      rgb(18, 13, 85) 0%,
      rgb(49, 27, 99) 50%,
      #fff 0%,
      #fff 50%,
      #08ce33 50%,
      #1eda0d 100%
    );
  }
  .text p {
    font-size: 1.2em;
    font-weight: 500;
    color: #fff;
    position: absolute;
    width: 50%;
    height: 100%;
    margin: 0;
    right: 0;
    text-align: center;
    transform: translateX(100%);
    animation: text 20s linear infinite;
  }

  @keyframes text {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
}
</style>

