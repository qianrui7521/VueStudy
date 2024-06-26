<template>
    <div>
        <SchooName></SchooName>
        <StudentName></StudentName>
    </div>
</template>

<script>
    import SchooName from './components/SchooName.vue'
    import StudentName from './components/StudentName.vue'
    export default {
        name:'App',
        components:{
            SchooName,
            StudentName
        }
    }
</script>