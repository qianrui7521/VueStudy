<template>
    <div class="container">
        <Search/>
        <List/>
    </div>
</template>

<script>
    // import './assets/css/bootstrap.css'
    import Search from './component/Search'
    import List from './component/List'

    export default {
        name:'App',
        components:{Search, List},
    }
</script>