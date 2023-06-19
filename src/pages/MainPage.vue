<template>
    <div class="container">
        <h2>
            Task manager
        </h2>
        <v-btn :clickHandler="clickHandler">
            Start
        </v-btn>
    </div>
</template>

<script>
import VBtn from "@/components/UI/v-btn";

export default {
    components: {
        VBtn
    },
    methods: {
        clickHandler(){
            this.$router.push({ name: 'TodoPage' })
        }
    }
}
</script>