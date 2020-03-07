<template>
    <div class="account-body">
      <div class="account-field">
        <div class="account-field">
          <v-text-field
            placeholder="Phone Number"
            hint="ex: (412) 555-5555"
            v-mask="phoneNumberMask"
            persistent-hint
            outlined
          /><span class="asterisk">*</span>
        </div>
        <!--Change: DropDown and allign with phone number-->
        <div class="account-field shift-right">
          <v-autocomplete
            :items="phoneType"
            placeholder="Phone Type"
            outlined
          /><span class="asterisk">*</span>
        </div>
      </div>
      <!--Change: DropDown-->
      <div class="account-field">
        <v-autocomplete
          :items="gender"
          placeholder="Gender"
          outlined
        /><span class="asterisk">*</span>
      </div>
      <!--Change: DropDown-->
      <div class="account-field">
        <v-autocomplete
          :items="maritalStatus"
          placeholder="Marital Status"
          outlined
        /><span class="asterisk">*</span>
      </div>
      <!--Change: DropDown-->
      <div class="account-field">
        <v-text-field
          placeholder="Date of Birth"
          v-mask="dateOfBirthMask"
          outlined
        /><span class="asterisk">*</span>
      </div>
    </div>
</template>

<script>
import { mask } from 'vue-the-mask';

export default {
  name: 'Profile',
  directives: {
    mask,
  },
  data: () => ({
    phoneType: ['Mobile', 'Home', 'Work'],
    gender: ['Female', 'Male'],
    maritalStatus: ['Married', 'Single', 'Divorced', 'Widowed'],
    phoneNumberMask: '(###) ###-####',
    dateOfBirthMask: '##/##/####',
  }),
};
</script>

<style>

</style>
