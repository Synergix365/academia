<template>
    <div class="account-body">

    <!--<make this cleaner-->
      <v-text-field
        class="account-inputs"
        placeholder="First Name"
        hint="ex: John"
        persistent-hint
        outlined
      />
      <v-text-field
        class="account-inputs"
        placeholder="Last Name"
        hint="ex: Smith"
        persistent-hint
        outlined
      />
      <v-text-field
        class="account-inputs"
        placeholder="Email Address"
        hint="ex: JohnSmith@gmail.com"
        persistent-hint
        outlined
      />
      <v-text-field
        class="account-inputs"
        placeholder="Password"
        hint="ex: ABCabc123"
        persistent-hint
        outlined
      />
      <v-text-field
        class="account-inputs"
        placeholder="Confirm Password"
        hint="ex: ABCabc123"
        persistent-hint
        outlined
      />
      </div>
</template>

<script>
export default {
  name: 'Account',
};
</script>

<style lang="scss">
@import "@/styles/account.scss";
</style>
