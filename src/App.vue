<template>
  <div class="container main">
    <div class="row">
      <div class="col-12">
        <nav-bar></nav-bar>
      </div>
    </div>

    <div class="row">
      <div class="col-2"><menu-bar></menu-bar></div>
      <div class="col-5">
        <base-page class="list"></base-page>
      </div>
      <div class="col-5">
        <options-page class="list"></options-page>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <footer-bar></footer-bar>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import MenuBar from "@/components/MenuBar.vue";
import FooterBar from "@/components/FooterBar.vue";
import BasePage from "@/pages/BasePage.vue";
import OptionsPage from "@/pages/OptionsPage.vue";
export default {
  components: {
    NavBar,
    FooterBar,
    MenuBar,
    BasePage,
    OptionsPage,
  },
  // data() {
  //   return {
  //     lines: [
  //       {
  //         numberVariant: "1",
  //         num1: "11",
  //         num2: "12",
  //         num3: "13",
  //         num4: "14",
  //         num5: "15",
  //         num6: "16",
  //         additionalNumber: "7",
  //       },
  //       {
  //         numberVariant: "2",
  //         num1: "11",
  //         num2: "12",
  //         num3: "13",
  //         num4: "14",
  //         num5: "15",
  //         num6: "16",
  //         additionalNumber: "7",
  //       },
  //       {
  //         numberVariant: "3",
  //         num1: "11",
  //         num2: "12",
  //         num3: "13",
  //         num4: "14",
  //         num5: "15",
  //         num6: "16",
  //         additionalNumber: "7",
  //       },
  //     ],
  //   };
  // },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main {
  margin: auto;
}

.list {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
}
</style>
