<template>
  <footer>
    <section class="testimonial">
      <h2>
        "WE LOOK FOR WORLD-CLASS SUPPLIERS TO SUPPORT THE SUCCESSFUL DELIVERY OF
        THE WIMBLEDON CHAMPIONSHIPS.
      </h2>

      <h2>
        LIFE FITNESS WAS ABLE TO PROVIDE US WITH QUALITY FITNESS EQUIPMENT AND A
        SEAMLESS SOLUTION, AND THE SUPPORT WE'VE RECEIVED HAS BEEN FANTASTIC. "
      </h2>
      <br />
      <p>Andrew Ambrose, GM - All England Lawn Tennis Club</p>
    </section>
    <app-footer-links />
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.testimonial {
  width: 100%;
  height: 280px;

  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(/images/testimonial-bg.jpg) 50% no-repeat;

  h2 {
    padding: 0 30px;
    text-align: center;
  }
}
.project-credit {
  width: 100%;
  padding: 10px 30px;
  background: black;
  color: white;
  text-align: center;

  a,
  a:visited,
  a:active {
    color: #22aaff;
    font-weight: bold;
  }
}
</style>
