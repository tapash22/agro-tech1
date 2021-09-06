<template>
  <div class="partners">
    <div class="container">
      <h2>OUR PARTNERS</h2>
      <div class="row">
        <div class="col-md-12">
          <div class="card card-1">
            <h3>Ionic Native</h3>
            <p>
              A curated set of ES5/ES6/TypeScript wrappers for plugins to easily
              add any native functionality to your Ionic apps.
            </p>
          </div>
        </div>
        <div class="col-md-12">
          <div class="card card-2">
            <h3>UI Components</h3>
            <p>
              Tabs, buttons, inputs, lists, cards, and more! A comprehensive
              library of mobile UI components, ready to go.
            </p>
          </div>
        </div>
        <div class="col-md-12">
          <div class="card card-3">
            <h3>Theming</h3>
            <p>
              Learn how to easily customize and modify your app’s design to fit
              your brand across all mobile platform styles.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.partners {
  width: 100%;
  height: 100%;
  padding: 0;
margin: 0;
}
.container {
  width: 100%;
  height: 100%;
  background: #fff;
  margin-top: 130px;
}
.container h2 {
  margin-bottom: 20px;
  background: -webkit-linear-gradient(#fff, lighten(#5c4084, 20%));
  /* -webkit-text-fill-color: transparent;
    -webkit-background-clip: text; */
  text-align: center;
  font-weight: 700;
  font-size: 1.5rem;
  color: rgb(45, 206, 131);
  text-transform: uppercase;
}
.col-md-12{
  margin: 10px;
}
.card {
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
    0.3s box-shadow,
    0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  padding: 14px 80px 18px 36px;
  cursor: pointer;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}

.card h3 {
  font-weight: 600;
}

.card img {
  position: absolute;
  top: 20px;
  right: 15px;
  max-height: 120px;
}

.card-1 {
  background-image: url(https://ionicframework.com/img/getting-started/ionic-native-card.png);
  background-repeat: no-repeat;
  background-position: right;
  background-size: 80px;
}

.card-2 {
  background-image: url(https://ionicframework.com/img/getting-started/components-card.png);
  background-repeat: no-repeat;
  background-position: right;
  background-size: 80px;
}

.card-3 {
  background-image: url(https://ionicframework.com/img/getting-started/theming-card.png);
  background-repeat: no-repeat;
  background-position: right;
  background-size: 80px;
}
</style>