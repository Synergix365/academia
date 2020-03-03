<template>
    <div>
      <v-text-field
        placeholder="PhoneNumber"
        v-mask="mask"
        hint="ex: (412) 555-5555"
        persistent-hint
        outlined
      />
      <!--Change: DropDown and allign with phone number-->
      <v-text-field
        placeholder="PhoneType"
        outlined
      />
      <!--Change: DropDown-->
      <v-text-field
        placeholder="Gender"
        outlined
      />
      <!--Change: DropDown-->
      <v-text-field
        placeholder="Marital Status"
        outlined
      />
      <!--Change: DropDown-->
      <v-text-field
        placeholder="Date of Birth"
        outlined
      />
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
    mask: '(###) ###-####',
  }),
};
</script>

<style>

</style>
