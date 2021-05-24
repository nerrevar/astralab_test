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
      <div class="button-group__next">
        <img
          src="@/assets/arrow-right.svg"
          alt="&#10140;"
        />
      </div>
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

    &:active::after
      +active
      width: 115px
      height: 48px
      margin-left: -31px
      margin-top: -34px

  &__next
    +round
    +shadow
    background-color: #1E1A3E
    color: white
    padding: 10px
    width: 48px
    text-align: center

    & > img
      width: 24px
      height: 24px

    &:active::after
      +active
      width: 48px
      height: 48px
      margin-left: -12px
      margin-top: -40px
</style>
