<template>
    <div class="flex flex-col p-6 gap-4">
        <div class="space-y-6">
            <span class="text-2xl">Новости</span>
            <div class="flex gap-6">
                <a href="#" v-for="i in 3" 
                    class="w-96 h-52 bg-onBackgroundDark rounded-lg hover:scale-105 hover:shadow-sm hover:shadow-blue-800 duration-150"
                >
                    
                </a>
            </div>
        </div>
        <div class="space-y-6">
            <span class="text-2xl">Погода</span>
        </div>
        <div class="space-y-6">
            <span class="text-2xl">Курс валют</span>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>