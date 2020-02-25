<template>
  <div class="agreement">
    <img class="backimg" src="@/assets/envatoelements-background.jpg">
    <div class="agreement-box">
      <img class="agreement-logo" src="@/assets/ecwpa_logo.png">
      <div class="agreement-desc">
        <!-- TODO Dynamic hook-up -->
        The Enrichment Center of Wester PA is a 501 (c)(3) non-
        profit corporation. We work to minimize our teaching and
        technical costs while maintaining quality, and we take
        advantage of financial donations and volunteer support
        whenever we can. Our goal is to strengthen homeschooling
        families by promoting the initiative, diligence, and excellence
        in academics and service, all at the lowest cost we can
        sustain.
      </div>
      <div class="agreement-desc">
        As a non-profit corporation comprised of member families,
        members are admitted by household and must (1) Pay
        annual dues, and (2) Be actively engaged in homeschooling
        and/or have homeschooled children in the past. All families
        cooperative level, at The Enrichment Center must become
        members of The Enrichment Center. To become a member
        and participate, each family be actively engaged in
        $43 per family per year. The dues cover all students in your
        immediate family and must be paid by August 15th as
        required by our Bylaws.
      </div>
      <div class="agreement-desc">
        More information about our tuition and fees can be found
        here: <a href="https://ecwpa.org/tuition">https://ecwpa.org/tuition</a>
      </div>
      <div class="agreebox">
        <v-checkbox
          v-model="agree"
          color="#2FBE76"
          label="I have read and agree to the Terms & Conditions"
        />
      </div>
      <router-link to="/register">
        <button
          v-ripple
          class="agreenext"
          :class="[agree ? '' : 'disablebtn']"
          :disabled="!agree"
        >
          Next
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'agreement',

  data: () => ({
    agree: false,
  }),
};
</script>

<style lang="scss">
@import "@/styles/register.scss";
</style>
