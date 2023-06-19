<template>
    <button class="btn" @click.prevent="clickHandler">
        <slot>
            Кнопка
        </slot>
    </button>
</template>

<script>
export default {
    props: {
        clickHandler: Function
    }
}
</script>

<style scoped lang="scss">
.btn {
    width: max-content;
    padding: 10px;
    font-size: 14px;
    border-radius: 10px;
    border: none;
    cursor: pointer;

    &:hover{
        transform: scale(1.05);
    }
}
</style>