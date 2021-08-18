<template>
  <transition name="modal" appear>
    <section class="modal">
      <div class="modal__window absolute top-0 -right-146">
        <div class="modal__title">
          <slot name="title" />
        </div>
        <div class="modal__content">
          <slot name="content" />
        </div>
        <div class="modal__footer">
          <slot name="footer" />
        </div>
      </div>
      <div class="modal__overlay" @click.self="$emit('close')"></div>
    </section>
  </transition>
</template>

<style lang="scss">
.modal {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  &__window {
    width: 320px;
    height: 300px;
    border-radius: 0.4rem;
    overflow: hidden;
    padding: 20px;
    z-index: 1;

    background-color: #f9f9f9;
  }

  &__title {
  }

  &__content {
  }

  &__footer {
  }

  // 상황에 따라 transition 변경가능 enter,leave class는 상단 문서 참고
  &-enter,
  &-leave-to {
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &-enter-to,
  &-leave {
    transition: opacity 0.4s ease;
  }
}
</style>
