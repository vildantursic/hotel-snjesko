<template>
  <div class="">
    <form class="" method="post">
      <input type="text" placeholder="Full Name" name="" value="">
      <input type="text" placeholder="Email" name="" value="">
      <input type="text" placeholder="Subject" name="" value="">
      <textarea name="name" placeholder="Message" rows="8" cols="80"></textarea>
      <button type="button" name="button">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  @import 'assets/mixins';

  * {
    font-size: 1em;
    font-family: inherit;
  }

  input, textarea {
    width: 100%;
    border: solid 2px #016ff9;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
  }
  textarea {
    resize: vertical;
  }

  button {
    width: 40%;
    height: 40px;
    text-align: center;
    background: #016ff9;
    border: solid 2px #016ff9;
    color: white;
    border-radius: 5px;
    transition: ease .2s;
    cursor: pointer;

    @include responsiveness('sm', 'xs') {
       width: 100%;
    };

    &:hover {
      background: #4396ff;
      border: solid 2px #4396ff;
    }
  }
</style>
