<template>
    <div class="register">
        <img class="backimg" src="@/assets/envatoelements-background.jpg">
        <div class="agreement">
            <img class="agreement-logo" src="@/assets/ecwpa_logo.png">
            <div class="agreement-desc">
                Please enter account information below and press the "Next"
                button when complete. Note, all required fields are marked
                with a * next to the field.
            </div>

            <!--Sign-Up Body-->
            <div>
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
            <div>
                <v-btn depressed color="primary" @Click="nextStep">Back</v-btn>
                <v-btn depressed color="primary" @Click="backStep">Next</v-btn>
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
  name: 'signUp',
  components: {
    Account,
    Address,
    Profile,
    Confirm,
  },
  data: () => ({
    currentPage: 0,
  }),
  methods: {
    nextStep() {
      this.currentPage += 1;
      console.log(this.currentPage);
    },
    backStep() {
      this.currentPage -= 1;
      console.log(this.currentPage);
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/register.scss";
</style>
