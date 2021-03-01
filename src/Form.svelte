<form
  action="https://developer.mozilla.org/en-US/search"
  class="form"
  role="search"
>
  <label for="main-q">Search MDN</label>
  <input
    type="search"
    name="q"
    class="input-field"
    placeholder="Search MDN"
    pattern="(.|\s)*\S(.|\s)*"
    required
  />
  <input type="submit" class="button" aria-label="Search" value="" />
</form>

<style lang="scss">
  .form {
    position: relative;
    display: inline-block;
    margin-right: 80px;

    & label {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }
  }

  .input-field {
    border: 2px solid #212121;
    -webkit-appearance: none;
    color: #212121;
    min-width: 320px;
    padding: 6px 12px;
    width: 100%;
    letter-spacing: -0.0027777778rem;
    font-size: 16px;

    &:focus,
    &:invalid {
      outline: none;
      box-shadow: none;
    }
  }

  .button {
    background: #fff
      url(https://developer.mozilla.org/static/media/search.db31d27c.svg) 0 0
      no-repeat;
    height: 21px;
    padding: 12px;
    position: absolute;
    right: 8px;
    top: 0px;
    width: 21px;
    border: 0;
    cursor: pointer;
  }
</style>
