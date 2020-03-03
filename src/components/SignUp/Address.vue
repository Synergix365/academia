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
      <div class="account-field">
        <v-text-field
          placeholder="State"
          outlined
        /><span class="asterisk">*</span>
      </div>
      <div class="account-field">
        <v-text-field
          placeholder="City"
          hint="ex: Jackson"
          persistent-hint
          outlined
        /><span class="asterisk">*</span>
      </div>
      <div class="account-field">
        <v-text-field
          placeholder="Zip Code"
          hint="ex: 50611"
          persistent-hint
          outlined
        /><span class="asterisk">*</span>
      </div>
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
export default {
  name: 'Address',
};
</script>

<style lang="scss">
@import "@/styles/account.scss"
</style>
