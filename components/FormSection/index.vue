<script lang="ts" setup>
import DateInput from "./DateInput.vue";
const book = reactive({
  checkin: "",
  checkout: "",
  adults: 1,
  children: 1,
});
const today = computed(() => new Date().toISOString().split("T")[0]);
</script>
<template>
  <section class="form-section" id="book-now">
    <div class="bg-overlay">
      <div class="container">
        <form class="form-section__content">
          <div class="form-group">
            <DateInput
              type="date"
              name="checkin"
              placeholder="Check-in"
              v-model="book.checkin"
              :min="today"
            />
            <DateInput
              type="date"
              name="checkin"
              placeholder="Check-out"
              v-model="book.checkout"
              :min="today"
            />
          </div>
          <div class="form-group__member">
            <div class="form-control">
              <label for="adult">Adult(s)</label>
              <DateInput
                type="number"
                name="adult"
                id="adult"
                :min="1"
                placeholder="Adult"
                v-model="book.adults"
              />
            </div>
            <div class="form-control">
              <label for="children">Children</label>
              <DateInput
                type="number"
                name="children"
                id="children"
                :min="1"
                placeholder="Children"
                v-model="book.children"
              />
            </div>
          </div>
          <div class="form-action">
            <button class="form-book__btn">Rates & Availability</button>
            <div class="form-discover">
              <a class="form-discover__link">Discover Our Exclusive Deals</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.form-section {
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("/bg-form.jpeg");

  .bg-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    position: absolute;
  }
  .container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
  }
  .form-section__content {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    .form-group {
      display: flex;
      column-gap: 1rem;
    }
    .form-group__member {
      display: flex;
      flex-direction: column;
      row-gap: 1rem;
    }
    .form-discover {
      display: flex;
      justify-content: center;
    }
    .form-control {
      display: flex;
      row-gap: 1px;
      flex-direction: column;
      label {
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 12px;
      }
    }
    button.form-book__btn {
      background-color: #679334;
      color: #fff;
      padding: 14px 15px;
      font-size: 12px;
      letter-spacing: 1px;
      text-transform: uppercase;
      box-sizing: border-box;
      margin-top: 1rem;
      &:hover {
        background-color: #fff;
        color: #679334;
      }
    }
    a.form-discover__link {
      color: #fff;
      padding: 14px 15px;
      font-size: 12px;
      letter-spacing: 1px;
      text-transform: uppercase;
      text-align: center;
      position: relative;
      cursor: pointer;
      text-decoration: none;
      box-sizing: border-box;
      overflow: hidden;
      margin-top: 1rem;

      &::after {
        content: "";
        width: 0;
        background-color: #679334;
        height: 1px;
        transition: transform 0.3s ease-in-out;
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translateX(-100%);
        will-change: transform;
      }

      &:hover {
        color: #679334;
        &::after {
          width: 100%;
          transform: translateX(0);
        }
      }
    }
    .form-action {
      display: flex;
      flex-direction: row;
      column-gap: 1rem;
      width: 100%;
      position: relative;
    }
  }
}

@media not all and (max-width: 767px) {
  .form-section {
    .form-section__content {
      max-width: 450px !important;
      margin-right: 10rem;
      .form-action {
        button,
        div {
          width: 50%;
        }
      }

      .form-group__member {
        flex-direction: row;
        column-gap: 1rem;
        .form-control {
          width: 50%;
        }
      }
      .form-discover {
        display: flex;
      }
    }
  }
}
</style>
