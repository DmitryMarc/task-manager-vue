<template>
    <form class="form">
        <label 
            for="task" 
            class="form__description"
        >
            Введите новую задачу:
        </label>
        <input 
            id="task" 
            placeholder="Задача..." 
            v-model.trim="text" 
            class="form__input" 
        />
        <v-btn :clickHandler="submitHandler">
            Добавить задачу
        </v-btn>
    </form>
</template>

<script>
import VBtn from "@/components/UI/v-btn";
import {mapMutations} from 'vuex'

export default {
    components: {
        VBtn
    },
    data(){
        return {
            text: ''
        }
    },
    methods: {
        ...mapMutations({
            ADD_TASK: 'ADD_TASK'
        }),
        submitHandler(){
            if(this.text){
                this.ADD_TASK(this.text);
                this.text = '';
            }
        }
    }
}
</script>

<style scoped lang="scss">
.form{
    display: flex;
    flex-direction: column;
    gap: 10px;

    &__description{
        font-size: 16px;
        font-style: italic;
    }

    &__input{
        padding: 5px;
        border-radius: 5px;
        border: 2px solid lightgray;
    }
}
</style>