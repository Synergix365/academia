<template>
  <div class="agreement">
  <img class="backimg" src="@/assets/envatoelements-background.jpg">
    <div class="agreement-box">
      <img class="agreement-logo" src="@/assets/ecwpa_logo.png">
      <div class="login-desc">
        Please login to continue.
      </div>

      <div class="login-field">
        <v-text-field
          label="Email Address"
          placeholder="JohnDoe@gmail.com"
        />
      </div>

      <div class="login-field">
        <v-text-field
          label="Password"
          type="password"
        />
      </div>
      <!-- login button -->
      <button
        v-ripple
        class="login-button"
      >
        Login
      </button>

      <div class=login-links>
        <div class=login-links-group>
          <v-btn text small color="primary">Forgot Password</v-btn>
          <router-link to="/agreement">
            <v-btn text small color="primary">Sign Up</v-btn>
          </router-link>
        </div>
          <v-btn text small color="primary">Unlock Account</v-btn>
        <!-- <v-btn text small color="primary">Request Validation Email</v-btn> -->
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'Login',
};
</script>

<style lang="scss">
  @import "@/styles/login.scss";
</style>
