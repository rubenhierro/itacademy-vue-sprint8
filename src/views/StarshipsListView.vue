<script>
import StarshipsView from "./StarshipsView.vue";
export default {
  components: {
    StarshipsView
  }
}
</script>
<template>
<Suspense>
  <template #default>
    <StarshipsView />
  </template>
  <template #fallback>
    <p>Loading...</p>
  </template>
</Suspense>
</template>
