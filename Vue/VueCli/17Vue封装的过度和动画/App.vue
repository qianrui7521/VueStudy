<template>
    <div id="root">
        <div>
            <Test/>
            <Test2/>
            <Test3/>
            <Test4/>
        </div>
    </div>
</template>

<script>
    import Test from './components/Test'
    import Test2 from './components/Test2'
    import Test3 from './components/Test3'
    import Test4 from './components/Test4'

    export default {
        name:'App',
        components:{Test, Test2, Test3, Test4},
    }
</script>

<style>

</style>