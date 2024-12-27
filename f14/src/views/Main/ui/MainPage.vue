<template>
    <div class="flex flex-col pl-32 pr-32 pb-32 gap-4">
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
            <div class="flex flex-row gap-10 justify-between">
                <div class="w-96 h-52 bg-onBackgroundDark rounded-lg hover:scale-105 hover:shadow-sm hover:shadow-blue-800 duration-150">

                </div>
                <section class="flex flex-row gap-4">
                    <div class="flex flex-col gap-4">
                        <div class="w-36 h-24 p-2 bg-onBackgroundDark rounded-lg hover:scale-105 hover:shadow-sm hover:shadow-blue-800 duration-150">
                            <span>день 1</span>
                        </div>
                        <div class="w-36 h-24 p-2 bg-onBackgroundDark rounded-lg hover:scale-105 hover:shadow-sm hover:shadow-blue-800 duration-150">
                            <span>день 2</span>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div class="w-36 h-24 p-2 bg-onBackgroundDark rounded-lg hover:scale-105 hover:shadow-sm hover:shadow-blue-800 duration-150">
                            <span>день 3</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <div class="space-y-6">
            <span class="text-2xl">Курс валют</span>
            <div class="flex flex-row gap-10 justify-between">
                <section class="flex flex-col justify-evenly">
                    <input type="number" placeholder="" class="w-96 h-20 p-2 text-2xl bg-onBackgroundDark rounded-lg hover:scale-105 hover:shadow-sm hover:shadow-blue-800 duration-150">
                    <input type="number" class="w-96 h-20 p-2 text-2xl bg-onBackgroundDark rounded-lg hover:scale-105 hover:shadow-sm hover:shadow-blue-800 duration-150">
                </section>
                <div class="w-96 h-52 bg-onBackgroundDark rounded-lg">

                </div>
                <div class="w-96 h-52 bg-onBackgroundDark rounded-lg hover:scale-105 hover:shadow-sm hover:shadow-blue-800 duration-150">

                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>