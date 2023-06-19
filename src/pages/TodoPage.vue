<template>
    <div class="container">
        <h2>
            Список задач
        </h2>
        <v-form />
        <TodoList />
    </div>
</template>

<script>
import VForm from '@/components/v-form'
import TodoList from '@/components/TodoList'

export default {
    components: {
        VForm,
        TodoList
    }
}
</script>