<template>
  <div>
    <TopNav />
    <section id="features" class="section has-company-bg my-5 mx-2" style="background-color: #FBFCFF;">
      <b-row class="mx-2">
        <b-col cols="2" class="mx-5">
          <b-row>
            <Box />
          </b-row>
          <b-row class="my-4 mx-4">
            <b-calendar v-model="value" @context="onContext" locale="en-US"></b-calendar>
          </b-row>
        </b-col>
        <b-col class="mx-5">
          <b-row class="mx-5">
            <p class="title">Task For Today</p>
          </b-row>
          <b-row class="my-3 mx-5">
            <b-col cols="2">
              <b-button @click="modalShow = !modalShow" class="button"><img src="~/assets/add.png"  alt=""> &nbsp;Created</b-button>

              <b-modal v-model="modalShow" title="New Task">
                 <div>
                  <label class="label-modal" for="input-live">Title</label>
                  <b-form-input
                    id="input-live"
                    v-model="name"
                    :state="nameState"
                    aria-describedby="input-live-help input-live-feedback"
                    placeholder="Enter your name"
                    trim
                  ></b-form-input>
                 </div>
                 <div class="mt-3">
                  <label class="label-modal" for="input-live">Description</label>
                  <b-form-textarea
                    id="textarea-formatter"
                    v-model="text1"
                    placeholder="Enter your text"
                    :formatter="formatter"
                  ></b-form-textarea>
                 </div>
                 <div class="mt-3">
                   <label class="label-modal" for="input-live">Choose Date</label>
                   <div>
                     <b-calendar v-model="value" @context="onContext" locale="en-US"></b-calendar>
                   </div>
                 </div>
              </b-modal>
            </b-col>
            <b-col cols="5" class="d-flex align-items-center">
              <b-input-group>
                <b-form-input class="search" type="search" placeholder="Search terms"></b-form-input>
              </b-input-group>
            </b-col>
          </b-row>
          <b-row  class="mx-5">
              <Card />
            </b-row>
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        modalShow: false
      }
    }
  }
</script>

<style>
.search {
  position: absolute;
  width: 712px;
  height: 43px;

  border: 1px solid #0442D0;
  box-sizing: border-box;
  border-radius: 15px;
}
.title {
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 41px;

  color: #525C77;
}

.label-modal {
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 29px;

  color: #525C77;
}

.button {
  background: #0442D0;
  border-radius: 15px;
  width: 157px;
  height: 43px;
}
</style>
