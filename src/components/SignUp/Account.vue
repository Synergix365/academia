<template>
    <div>
      <v-text-field
        placeholder="First Name"
        hint="ex: John"
        persistent-hint
        outlined
      />
      <v-text-field
        placeholder="Last Name"
        hint="ex: Smith"
        persistent-hint
        outlined
      />
      <v-text-field
        placeholder="Email Address"
        hint="ex: JohnSmith@gmail.com"
        persistent-hint
        outlined
      />
      <v-text-field
        placeholder="Password"
        hint="ex: ABCabc123"
        persistent-hint
        outlined
      />
      <v-text-field
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

<style>

</style>
