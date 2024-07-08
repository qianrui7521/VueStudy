<template>
    <ul class="todo-list">
        <transition-group name="todo" appear>
            <CaseItem 
                v-for="todo in todos" 
                :key="todo.id" 
                :t="todo" 
            />
        </transition-group>
    </ul>
</template>

<script>
    import CaseItem from './CaseItem.vue'

    export default {
        name:'CaseList',
        components:{CaseItem},
        props:['todos']
    }
</script>

<style scoped>
    .todo-list {
        margin-left: 0;
        padding: 0;
        border: 1px solid #ddd;
        border-radius: 2px;
    }
    .todo-enter-active {
        animation: donghua 1s linear;
    }
    .todo-leave-active {
        animation: donghua 1s linear reverse;
    }
    @keyframes donghua {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }
</style>