<template>
    <div class="account-body">
      <div class="account-field">
        <v-text-field
          class="account-inputs"
          :rules="firstNameRules"
          placeholder="First Name"
          hint="ex: John"
          persistent-hint
          required
          outlined
        /><span class="asterisk">*</span>
      </div>
      <div class="account-field">
        <v-text-field
          class="account-inputs"
          :rules="lastNameRules"
          placeholder="Last Name"
          hint="ex: Smith"
          persistent-hint
          required
          outlined
        /><span class="asterisk">*</span>
      </div>
      <div class="account-field">
        <v-text-field
          class="account-inputs"
          :rules="emailRules"
          placeholder="Email Address"
          hint="ex: JohnSmith@gmail.com"
          persistent-hint
          required
          outlined
        /><span class="asterisk">*</span>
      </div>
      <div class="account-field">
        <v-text-field
          class="account-inputs"
          v-model="userPassword"
          :rules="passwordRules"
          placeholder="Password"
          hint="ex: ABCabc123"
          persistent-hint
          required
          outlined
        /><span class="asterisk">*</span>
      </div>
      <div class="account-field">
        <v-text-field
          class="account-inputs"
          v-model="confirmUserPassword"
          :rules="confirmPasswordRules"
          placeholder="Confirm Password"
          hint="ex: ABCabc123"
          persistent-hint
          required
          outlined
        /><span class="asterisk">*</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Account',
  data: () => ({
    // email
    emailRules: [
      v => !v || v.length <= 200 || 'Please enter an E-mail that is 200 characters or less.',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || /^$/.test(v) || 'Please enter a valid E-mail address',
    ],

    // first name
    firstNameRules: [
      v => !!v || 'Please enter a first name',
      v => (v && v.length <= 50) || 'Please enter a first name less than 50 characters',
      v => /^[a-zA-Z\s-,/\\.']+$/.test(v) || 'Only enter letters, spaces, slashes, dashes, periods, or commas',
      v => /[a-zA-Z]/.test(v) || 'First name must contain at least one letter',
      v => /^\S+(?: \s+)*$/.test(v) || 'First name cannot start/end with a space or contain a double space',
    ],

    // last name
    lastNameRules: [
      v => !!v || 'Please enter a last name',
      v => (v && v.length <= 50) || 'Please enter a last name less than 50 characters',
      v => /^[a-zA-Z\s-,/\\.']+$/.test(v) || 'Only enter letters, spaces, slashes, dashes, periods, or commas',
      v => /[a-zA-Z]/.test(v) || 'Last name must contain at least one letter',
      v => /^\S+(?: \s+)*$/.test(v) || 'Last name cannot start/end with a space or contain a double space',
    ],

    // password
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 5) || 'Password must have 5+ characters',
      v => /(?=.*[A-Z])/.test(v) || 'Must have one uppercase character',
      v => /(?=.*\d)/.test(v) || 'Must have one number',
      v => /([!@$%])/.test(v) || 'Must have one special character [!@#$%]',
    ],

    // confirm password
    confirmPasswordRules: [
      v => !!v || 'Password is required',
    ],

    userPassword: '',
    confirmUserPassword: '',
  }),
};
</script>

<style lang="scss">
@import "@/styles/account.scss"
</style>
