<template>
  <div class="agreement">
    <img class="backimg" src="@/assets/envatoelements-background.jpg">
    <div class="agreement-box">
      <img class="agreement-logo" src="@/assets/ecwpa_logo.png">
      <div class="stepper-container">
        <div
          :class="[
            currentPage === 0 ? 'step-boxes'
            : stepProgress > 0 ? 'faded-boxes'
            : 'disabled-boxes'
          ]"
          @click="stepperChange(0)"
          v-ripple
        >
          Account
        </div>
        <v-divider></v-divider>
        <div
          :class="[
            currentPage === 1? 'step-boxes'
            : stepProgress > 1 ? 'faded-boxes'
            : 'disabled-boxes'
        ]"
          @click="stepperChange(1)"
          v-ripple
        >
          Address
        </div>
        <v-divider></v-divider>
        <div
          :class="[
            currentPage === 2? 'step-boxes'
            : stepProgress > 2 ? 'faded-boxes'
            : 'disabled-boxes'
          ]"
          @click="stepperChange(2)"
          v-ripple
        >
          Profile
        </div>
        <v-divider></v-divider>
        <div
          :class="[
            currentPage === 3? 'step-boxes'
            : stepProgress > 3 ? 'faded-boxes'
            : 'disabled-boxes'
          ]"
          @click="stepperChange(3)"
          v-ripple
        >
          Confirm
        </div>
      </div>
      <div class="agreement-desc">
        Please enter account information below and press the "Next"
        button when complete. Note, all required fields are marked
        with a * next to the field.
      </div>

      <!--Sign-Up Body-->
      <div class="register-body">
        <!--Account-->
        <template v-if="currentPage === 0">
          <Account />
        </template>

        <!--Address-->
        <template v-if="currentPage === 1">
          <Address />
        </template>

        <!--Profile-->
        <template v-if="currentPage === 2">
          <Profile />
        </template>

        <!--Confirm-->
        <template v-if="currentPage === 3">
          <Confirm />
        </template>
      </div>

      <!--Buttons-->
      <div class="register-buttons">
        <template v-if="currentPage !== 0">
          <v-btn depressed color="primary" @click="backStep">Back</v-btn>
        </template>
        <template v-if="currentPage === 0">
          <v-btn depressed color="primary" to="/">Cancel Sign-Up</v-btn>
        </template>
        <v-btn depressed color="primary" @click="nextStep">Next</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Account from '@/components/SignUp/Account.vue';
import Address from '@/components/SignUp/Address.vue';
import Profile from '@/components/SignUp/Profile.vue';
import Confirm from '@/components/SignUp/Confirm.vue';


export default {
  name: 'register',
  components: {
    Account,
    Address,
    Profile,
    Confirm,
  },
  data: () => ({
    currentPage: 0,
    stepProgress: 1,
  }),
  methods: {
    // increments the user through the sign-up steps
    nextStep() {
      if (this.currentPage !== 3) {
        this.currentPage += 1;
        if (this.stepProgress <= this.currentPage) {
          this.stepProgress += 1;
        }
      }
    },
    // decrements the user through the sign-up steps
    backStep() {
      if (this.currentPage !== 0) {
        this.currentPage -= 1;
      }
    },
    stepperChange(currentPage) {
      if (this.stepProgress > currentPage) {
        this.currentPage = currentPage;
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/register.scss";
</style>
