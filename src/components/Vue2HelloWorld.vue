<template>
  <h1>{{ msg }}</h1>
</template>

<script>
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  name: 'Vue2HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  }
})
</script>
