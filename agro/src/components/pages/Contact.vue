<template>
    <div class="row mt-3">
        <div class="col-md-6">
            <h2 class="mt-1">Contact Us</h2>
            <form @submit.prevent="seneMessage" class="msg">
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control " v-model="user_email"/>
                </div>
                <div class="form-group">
                    <label>Massage</label>
                    <textarea class="form-control" v-model="msg"></textarea>
                </div>
                <div class="mt-3">
                    <button type="submit" class="btn btn-lg btn-primary">Send</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.row{
    justify-content: center;
    width: 105%;
    height: 600px;
    background-image: url('../../assets/contact.jpg');
    background-position: center;
    background-size: cover;
    padding-top: 20px;
    opacity: 0.9;
}
h2{
    color: rgb(45, 206, 131);
    text-align: center;
    padding: 10px;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    padding-top: 80px;
}
hr{
    border: 2px solid #000;
}
.msg{
    border:2px solid #fff;
    padding: 10px;
    margin-top: 50px;
    justify-content: center;
}
label{
    font-size: 2rem;
    font-weight: 500;
    color: rgb(45, 206, 131);
}

</style>