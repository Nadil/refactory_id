<template>
    <nav class="navbar navbar-expand-lg">
        <b-col cols="9">
            <img src="~/assets/Logo.png" class="d-inline-block align-top ml-4" alt="">
        </b-col>
        <b-col>
            <b-row>
                <b-col cols="2">
                    <img src="~/assets/user.png" width="52" height="52" class="d-inline-block align-top ml-4" alt="">
                </b-col>
                <b-col cols="4" class="d-flex align-items-center mt-3 ml-3">
                    <p class="user">Samsul Arifin</p>
                    <mdb-icon icon="cog" />
                </b-col>
                <b-col cols="1" class="d-flex align-items-center">
                    <img src="~/assets/Icon.png"  alt="">
                </b-col>
            </b-row>
        </b-col>
    </nav>
</template>

<style>
nav {
    background-color: #0442D0;
    height: 94px;
}
.user {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 26px;
    color: #FFFFFF;
}
</style>