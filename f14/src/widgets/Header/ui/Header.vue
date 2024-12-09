<template>
    <div class="flex flex-row items-center justify-center px-8 py-2">
        <Transition name="translate" mode="out-in" appear>
            <img
            :src=logo alt="logo" class="w-16 h-16 bg-blue-800 shadow-xl shadow-blue-900">
        </Transition>
        
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
    transform: translateX(-100px);
}
</style>