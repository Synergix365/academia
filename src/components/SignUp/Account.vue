<template>
    <div class="account-body">
      <div class="account-field">
        <v-text-field
          class="account-inputs"
          placeholder="First Name"
          hint="ex: John"
          persistent-hint
          outlined
        /><span class="asterisk">*</span>
      </div>
      <div class="account-field">
        <v-text-field
          class="account-inputs"
          placeholder="Last Name"
          hint="ex: Smith"
          persistent-hint
          outlined
        /><span class="asterisk">*</span>
      </div>
      <div class="account-field">
        <v-text-field
          class="account-inputs"
          placeholder="Email Address"
          hint="ex: JohnSmith@gmail.com"
          persistent-hint
          outlined
        /><span class="asterisk">*</span>
      </div>
      <div class="account-field">
        <v-text-field
          class="account-inputs"
          placeholder="Password"
          hint="ex: ABCabc123"
          persistent-hint
          outlined
        /><span class="asterisk">*</span>
      </div>
      <div class="account-field">
        <v-text-field
          class="account-inputs"
          placeholder="Confirm Password"
          hint="ex: ABCabc123"
          persistent-hint
          outlined
        /><span class="asterisk">*</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Account',
};
</script>

<style lang="scss">
@import "@/styles/account.scss"
</style>
