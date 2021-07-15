<template>
  <div class="main">
    <div class="_body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {EventBus} from '../event-bus'

export default {
  components: {},
  data() {
    return {
      eventBus: EventBus,
    }
  },
  provide() {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  computed: {},
}
</script>
<style lang="less">
</style>
