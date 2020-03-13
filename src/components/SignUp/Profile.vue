<template>
    <div class="account-body">
      <div class="account-field">
        <div class="account-field">
          <v-text-field
            :rules="requiredPhoneNumber"
            placeholder="Phone Number"
            hint="ex: (412) 555-5555"
            v-mask="phoneNumberMask"
            persistent-hint
            required
            outlined
          /><span class="asterisk">*</span>
        </div>
        <!--Change: DropDown and allign with phone number-->
        <div class="account-field shift-right">
          <v-autocomplete
            :rules="phoneTypeRules"
            :items="phoneType"
            placeholder="Phone Type"
            required
            outlined
          /><span class="asterisk">*</span>
        </div>
      </div>
      <!--Change: DropDown-->
      <div class="account-field account-dropdown">
        <v-autocomplete
          :rules="genderRules"
          :items="gender"
          placeholder="Gender"
          required
          outlined
        /><span class="asterisk">*</span>
      </div>
      <!--Change: DropDown-->
      <div class="account-field account-dropdown">
        <v-autocomplete
          :rules="maritalStatusRules"
          :items="maritalStatus"
          placeholder="Marital Status"
          required
          outlined
        /><span class="asterisk">*</span>
      </div>
      <!--Change: DropDown-->
      <div class="account-field account-dropdown">
        <v-text-field
          :rules="dateOfBirthRules"
          placeholder="Date of Birth"
          v-mask="dateOfBirthMask"
          required
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

    // required phone number
    requiredPhoneNumber: [
      v => !!v || 'Phone number is required',
      v => (v && v.length >= 14) || 'Please enter a 10-digit phone number.',
    ],
    // optional phone number
    optionalPhoneNumber: [
      v => (v && v.length >= 14) || /^$/.test(v) || 'Please enter a 10-digit phone number.',
    ],
    // phone type
    phoneTypeRules: [
      v => !!v || 'Phone type is required',
    ],
    // gender
    genderRules: [
      v => !!v || 'Gender is required',
    ],
    // marital status
    maritalStatusRules: [
      v => !!v || 'Marital status is required',
    ],
    // DOB
    dateOfBirthRules: [
      v => !!v || 'Date of birth is required',
    ],
  }),
};
</script>

<style>
</style>
