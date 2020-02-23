<template>
    <div>
      <v-text-field
        placeholder="PhoneNumber"
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
export default {
  name: 'Profile',
};
</script>

<style>

</style>
