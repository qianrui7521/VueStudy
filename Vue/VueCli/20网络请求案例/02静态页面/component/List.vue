<template>
    <div class="list">
        <div class="item">
            <a href="#">
                <img src="../assets/yy.jpg" style="width: 100px;">
            </a>
            <p>杨超越</p>
        </div>
        <div class="item">
            <a href="#">
                <img src="../assets/yy.jpg" style="width: 100px;">
            </a>
            <p>杨超越</p>
        </div>
        <div class="item">
            <a href="#">
                <img src="../assets/yy.jpg" style="width: 100px;">
            </a>
            <p>杨超越</p>
        </div>
        <div class="item">
            <a href="#">
                <img src="../assets/yy.jpg" style="width: 100px;">
            </a>
            <p>杨超越</p>
        </div>
        <div class="item">
            <a href="#">
                <img src="../assets/yy.jpg" style="width: 100px;">
            </a>
            <p>杨超越</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:'List',
    }
</script>

<style scoped>
    .item {
        float: left;
        width: 25%;
        padding: .75rem;
        border: 1px solid #efefef;
        text-align: center;
        margin-bottom: 2rem;
    }
    .item > img {
        margin-bottom: .75rem;
        border-radius: 100px;
    }
    .item > p {
        font-size: 85%;
    }
</style>