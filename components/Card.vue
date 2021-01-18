<template>
    <div>
        <b-card class="task mb-4 mt-3">
            <h3 class="title-card">Daily Stand Up</h3>
            <b-card-text>
                <p>1. Dont't forget to prepare your report and any blocker in Front end.</p>
                <p>2. Telling Project Manager for new assignment.</p> 
                <b-row class="mb-5 image-card">
                    <img class="mr-4" src="~/assets/edit.png"  alt=""> 
                    <img class="mr-4" src="~/assets/delete.png"  alt="">
                </b-row>
            </b-card-text>
        </b-card>
        <b-card class="task mb-4">
            <h3 class="title-card">Meeting With Client A</h3>
            <b-card-text class="mb-4">
                <p>1. Loream Ipsum Dolor Amet.</p>
                <p>2. Loream Ipsum Dolor Amet.</p>
                <b-row class="mb-5 image-card">
                    <img class="mr-4" src="~/assets/edit.png"  alt=""> 
                    <img class="mr-4" src="~/assets/delete.png"  alt="">
                </b-row>
            </b-card-text>
        </b-card>
        <b-card class="task mb-4">
            <h3 class="title-card">Meeting With Client B</h3>
            <b-card-text>
                <p>1. Loream Ipsum Dolor Amet.</p>
                <p>2. Loream Ipsum Dolor Amet.</p>
                <b-row class="mb-5 image-card">
                    <img class="mr-4" src="~/assets/edit.png"  alt=""> 
                    <img class="mr-4" src="~/assets/delete.png"  alt="">
                </b-row>
            </b-card-text>
        </b-card>
    </div>
</template>

<style>
.task {
    width: 894px;
    height: 166px;
    background: #FFFFFF;
    box-shadow: 10px 10px 50px 10px #EEF3FD;
    border-radius: 15px;
}
.title-card {
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 29px;

    color: #525C77;
}
p {
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    color: #525C77;
}

.image-card {
    margin-left: 780px;
}
</style>



