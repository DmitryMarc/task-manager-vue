<template>
    <ul class="list">
        <li v-for="task in tasks" 
            :key="task.id" 
            @dblclick="setIsEdit(task.id, task.text)" 
            class="list__item"
        >
            <div v-if="task.id !== idOfEditable" 
                class="list__item-content"
            >
                <span class="list__item-text">
                    {{ task.text }}
                </span>
                <close-btn 
                    :id="task.id" 
                    :clickHandler="DELETE_TASK" 
                />
            </div>
            <div v-else> 
                <input 
                    v-model.trim="editableText" 
                    @keydown.enter="editText(task.id)" 
                    class="list__item-input" 
                />
            </div>
        </li>
    </ul>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
import CloseBtn from '@/components/UI/close-btn'
import {setTasksToLocalStorage} from '@/helpers/setTasksToLocalStorage'

export default {
    components: {
        CloseBtn
    },
    data(){
        return {
            idOfEditable: null,
            editableText: ''
        }
    },
    computed: {
        ...mapGetters([
            'getTasks'
        ]),
        tasks(){
            return this.getTasks.tasks
        } 
    },
    methods: {
        ...mapMutations({
            DELETE_TASK: 'DELETE_TASK',
            EDIT_TASK: 'EDIT_TASK'
        }),
        setIsEdit(id, text){
            this.idOfEditable = id;
            this.editableText = text;
        }, 
        editText(id){
            this.EDIT_TASK({id, text: this.editableText});
            this.idOfEditable = null;
            this.editableText = '';
        }
    },
    watch:{
        editableText(newValue, prevValue){
            if(prevValue && !newValue){
                this.DELETE_TASK(this.idOfEditable);
            }
        },
        getTasks(newValue){
            setTasksToLocalStorage(newValue);
        }
    },
}
</script>

<style scoped lang="scss">
.list{
    margin: 0;
    padding: 0;
    list-style: none;
    max-width: 300px;
    text-align: left;

    &__item{
        padding: 10px 0 10px;
        border-bottom: 2px solid lightgray;
        
        &-content{
            display: flex;
            justify-content: space-between;
            cursor: pointer;
        }

        &-text{
            display: flex;
            align-items: center;
            word-wrap: break-word;
        }

        &-input{
            width: 100%;
            border-radius: 5px;
            border-color: lightgray;
            box-sizing: border-box;
            padding: 5px;
        }
    }
}
</style>