<template>
    <div class="flex flex-row items-center justify-center px-8 py-2 space-x-96">
        <TransitionGroup name="translate" mode="out-in">
            <img
            :src=logo alt="logo" class="w-16 h-16 bg-blue-800 shadow-xl shadow-blue-900">
            <section class="flex flex-row items-center space-x-6 font-medium">
                <i class="fa-solid fa-circle-user text-3xl"></i>
                <a href="/auth" class="hover:text-blue-500 duration-300">Войти</a>
                <p class="hover:text-blue-500 duration-300 cursor-default">|</p>
                <a href="/reg" class="hover:text-blue-500 duration-300">Зарегистрироваться</a>
            </section>
        </TransitionGroup>
        
    </div>
</template>

<script setup lang="ts">
import logo from "@/app/assets/wflogo.svg"
</script>

<style scoped>
.translate-enter-active, 
.translate-leave-active {
    transition: all 0.5s ease;
}

.translate-enter-from,
.translate-leave-to {
    opacity: 0;
    transform: translateY(-100px);
}
</style>