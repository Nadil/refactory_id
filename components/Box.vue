<template>
    <b-card no-body class="overflow-hidden box" style="max-width: 540px;">
        <b-row no-gutters class="my-3">
            <b-col cols="3" class="mx-4">
                <figure class="image is-64x64">
                    <img src="~/assets/to-do-list.png" alt="Image">
                </figure>
            </b-col>
            <b-col>
                <h5 class="name">Hallo, Sam!</h5>
                <p class="text">You have 2 tasks left for today. Already completed Task today?</p>    
            </b-col>
        </b-row>
    </b-card>
</template>

<style>
.box {
    background-color: #0442D0;
    border-radius: 20px;
}
.name {
    color: #FABE2C;
    font-style: normal;
    font-weight: 900;
    font-size: 22px;
    line-height: 26px;
}
.text {
    color: white;
}
</style>
