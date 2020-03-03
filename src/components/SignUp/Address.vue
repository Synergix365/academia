<template>
    <div class="account-body">
      <div class="account-field">
        <v-text-field
          placeholder="Address 1"
          hint="ex: 1234 Seseme St."
          persistent-hint
          outlined
        /><span class="asterisk">*</span>
      </div>
      <div class="account-field">
        <v-text-field
          placeholder="Address 2"
          hint="ex: Lot 5"
          persistent-hint
          outlined
        /><span class="asterisk colorless">*</span>
      </div>
      <!--Change: DropDown-->
      <v-text-field
        placeholder="State"
        outlined
      />
      <v-text-field
        placeholder="City"
        hint="ex: Jackson"
        persistent-hint
        outlined
      />
      <v-text-field
        placeholder="Zip Code"
        v-mask="mask"
        hint="ex: 50611"
        persistent-hint
        outlined
      />
      <!--Change: DropDown-->
      <div class="account-field">
        <v-text-field
          placeholder="Country"
          outlined
        /><span class="asterisk">*</span>
      </div>
    </div>
</template>

<script>
import { mask } from 'vue-the-mask';

export default {
  name: 'Address',
  directives: {
    mask,
  },
  data: () => ({
    mask: '#####',
  }),
};
</script>

<style lang="scss">
@import "@/styles/account.scss"
</style>
