<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <CaseHeader/>
                <CaseList/>
                <CaseFooter/>
            </div>
        </div>
    </div>
</template>

<script>
    import CaseHeader from './components/CaseHeader.vue'
    import CaseList from './components/CaseList.vue'
    import CaseFooter from './components/CaseFooter.vue'

    export default {
        name:'App',
        components:{CaseHeader, CaseList, CaseFooter}
    }
</script>

<style>
    .todo-container {
        width: 600px;
        margin: 0 auto;
    }
    .todo-wrap {
        border: 1px solid #ddd;
        border-radius: 5px;
        padding: 10px;
    }

    .btn {
        /* display: inline-block; */
        padding: 4px 12px;
        font-size: 14px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        border: 1px solid #bd362f;
        border-radius: 4px;
        background-color: #da4f49;
        color: #fff;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    }
    .btn:hover {
        background-color: #bd362f;
        color: #fff;
    }
    .btn:focus {
        outline: none;
    }
</style>