<template>
    <div class="slider">
        <div class="row">
            <div class="col-md-6">
                <h3>Add image for slide</h3>
                <form>
                    <div class="form-group">
                        <label>Event Name </label>
                        <input class="form-control" type="text" placeholder="Event Name .."/>
                    </div>
                    <div class="form-group my-2 upload">
                        <label>Upload Image</label>
                        <input class="form-control" type="file" />
                    </div>
                    <div class="btn">
                        <button class="btn btn-primary" type="submit">Add Event</button>
                    </div>
                </form>
            </div>
            <div class="col-md-6">
                <h3> Event List</h3>
                <hr>
                <table>
                    <thead>
                        <tr><th>Event Name</th><th>Detail</th></tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default{
  name:'slider',
}
</script>
<style scoped>
.slider {
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 10px;
}
.row {
  display: flex;
  justify-content: space-between;

}
.col-md-6{
    padding: 10px;
    margin-top: 50px;
      width: 50%;
  height: 100%;
}
form{
    width: 100%;
    height: 100%;
    border: 2px solid black;
    padding: 20px;
}
form label{
    font-size: 1.2rem;
    font-weight: 500;
    color: #000;
    text-align: left;
    padding: 20px;
}
.col-md-6 h3{
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    color: #000;
    padding: 10px;
}
</style>