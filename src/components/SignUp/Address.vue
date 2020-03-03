<template>
    <div>
      <v-text-field
        placeholder="Address 1"
        hint="ex: 1234 Seseme St."
        persistent-hint
        outlined
      />
      <v-text-field
        placeholder="Address 2"
        hint="ex: Lot 5"
        persistent-hint
        outlined
      />
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
      <v-text-field
        placeholder="Country"
        outlined
      />
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

<style>

</style>
