<template>
  <div class="container">
    <div>
      <h1>404 Not Found</h1>
      <p>Sorry, but the page you were trying to view does not exist.</p>
      <p>There could be a lots of reason behind this.</p>
      <ul>
        <li>You are a <strong>All-time</strong> unlucky person, thus.</li>
        <li>God doesn't <strong>Love</strong> you at all, thus.</li>
        <li>Doomsday is here, server are <strong>Dying</strong>, thus.</li>
        <li>You killed a <strong>Kitten</strong> recently, thus.</li>
        <li>You mistyped a <strong>URL</strong>, thus.</li>
        <li>You followed a <strong>OLD, DEAD, BROKEN</strong> url, thus.</li>
        <li>
          Or you are just missing <strong>Windows Blue Screen</strong>, thus.
        </li>
      </ul>
      <p>
        'nough Said, now <a href="javascript:history.back()">GO BACK</a> // Or
        return To <a href="/">HOMEPAGE</a>.
      </p>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.container
  height 100%
  display grid
  place-items center
  background #0001ab
  font-family Lucida, monospace
  font-size 20px
  line-height 1.4
  color #fff
  h1
    background-color #fff
    color #0001ab
    text-align center
    font-size 50px
  a
    color orange
    text-decoration none
</style>
