<template>
  <div class="wrapper">
    <div class="title">
      Ready for a great User experience?
    </div>
    <div class="subtitle">
      Bring your media to the next level!
    </div>
    <div class="button-group">
      <div
        class="button-group__signup"
        @click="$router.push('/sign_up')"
      >
        Sign Up
      </div>
      <img
        class="button-group__next"
        src="@/assets/arrow-right.svg"
        alt="&#10140;"
      />
    </div>
    <img
      class="enter-img"
      src="@/assets/woman_enter.svg"
      alt=""
    />
  </div>
</template>

<style lang="sass" scoped>
.wrapper
  justify-content: space-between

.subtitle
  text-align: center
  padding: 0.5em

.button-group
  display: flex
  flex-flow: row nowrap
  justify-content: center
  padding: 0.5em

  & > *:not(& > :last-child)
    margin-right: 2em

  &__signup
    +ellipse
    +shadow
    background-color: white

  &__next
    +round
    +shadow
    background-color: #1E1A3E
    color: white
    padding: 12px
</style>
