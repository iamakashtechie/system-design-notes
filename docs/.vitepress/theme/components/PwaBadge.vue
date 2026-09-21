<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isOffline = ref(false)
const offlineReady = ref(false)
const showBadge = ref(false)

onMounted(() => {
  if (typeof window !== 'undefined') {
    isOffline.value = !navigator.onLine

    window.addEventListener('online', () => {
      isOffline.value = false
    })

    window.addEventListener('offline', () => {
      isOffline.value = true
    })

    // Check if service worker is active
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(() => {
        offlineReady.value = true
        // Show brief "Available Offline" toast on first load if online
        const hasShownNotice = sessionStorage.getItem('pwa_offline_ready_shown')
        if (!hasShownNotice) {
          showBadge.value = true
          sessionStorage.setItem('pwa_offline_ready_shown', 'true')
          setTimeout(() => {
            showBadge.value = false
          }, 4000)
        }
      })
    }
  }
})
</script>

<template>
  <div class="pwa-status-container">
    <!-- Offline Indicator Banner -->
    <transition name="fade">
      <div v-if="isOffline" class="pwa-offline-pill" role="status">
        <span class="pulse-dot offline"></span>
        <span>Offline Mode — All notes are cached locally</span>
      </div>
    </transition>

    <!-- Brief toast on first load showing offline readiness -->
    <transition name="slide-fade">
      <div v-if="showBadge && !isOffline" class="pwa-ready-toast" role="status">
        <span class="icon">⚡</span>
        <span><strong>Offline Ready:</strong> All chapters and diagrams are cached for offline reading!</span>
        <button class="close-btn" @click="showBadge = false" aria-label="Close">✕</button>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.pwa-status-container {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: calc(100vw - 48px);
  pointer-events: none;
}

.pwa-offline-pill {
  pointer-events: auto;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 500;
  color: #f59e0b;
  background: rgba(30, 41, 59, 0.95);
  border: 1px solid rgba(245, 158, 11, 0.4);
  border-radius: 9999px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(8px);
}

.pwa-ready-toast {
  pointer-events: auto;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  font-size: 13px;
  line-height: 1.4;
  color: #f8fafc;
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 12px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
}

.pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #10b981;
}

.pulse-dot.offline {
  background-color: #f59e0b;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .4;
  }
}

.close-btn {
  background: transparent;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  padding: 2px 6px;
  margin-left: 6px;
  font-size: 12px;
  line-height: 1;
  border-radius: 4px;
}

.close-btn:hover {
  color: #f8fafc;
  background: rgba(255, 255, 255, 0.1);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.25s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(15px);
  opacity: 0;
}
</style>
