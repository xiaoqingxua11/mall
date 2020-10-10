<template>
  <div class="category">
    <header class="g-header-container">
      <category-header />
    </header>
    <div class="g-content-container">
      <div class="sidebar">
        <category-tab @switch-tab="getCurrentId"></category-tab>
      </div>
      <div class="main">
        <category-content :curId="curId"></category-content>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryHeader from "./header";
import CategoryTab from "./tab";
import CategoryContent from "./content";
import storge from "assets/js/storage";
import {CATEGORY_CONTENT_KEY,CATEGORY_CONTENT_UPDATE_TIME_INTERVAL} from "./config"

export default {
  name: "Category",
  components: {
    CategoryHeader,
    CategoryTab,
    CategoryContent
  },
  data() {
    return {
      curId: ""
    };
  },
  methods: {
    getCurrentId(id) {
      this.curId = id;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

.category {
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: $bgc-theme;
}

.g-content-container {
  margin-top: 50px;
  display: flex;
}
.sidebar {
  width: 80px;
  height: 100%;
}
.main {
  flex: 1;
  height: 800px;
}
</style>
