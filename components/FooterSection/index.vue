<script setup lang="ts">
import { useTimeLogic } from "@/composable/useTimeLogic";
import { useTemperatureLogic } from "@/composable/useTemperatureLogic";

const { minuteString, hourString, amPMValue, dotStyles } = useTimeLogic();
const { temperature } = useTemperatureLogic();
</script>

<template>
  <footer>
    <div class="container">
      <div class="additional-info">
        <div class="time">
          <span class="time-value"
            >{{ hourString }}<span :style="dotStyles">:</span
            >{{ minuteString }}</span
          >
          <span class="time-format">{{ amPMValue }}</span>
        </div>
        <div class="temperature">
          <span>{{ temperature?.current.temp_c || 0 }}°C</span>
          <small
            >Powered by
            <a href="https://www.weatherapi.com/" title="Weather API"
              >WeatherAPI.com</a
            ></small
          >
        </div>
      </div>
      <div class="address-info">
        <h3>Our Address</h3>
        <p>
          Jl. Rsi Markandya, Br. Bangkiang Sidem Desa Keliki, Tegalalang –
          Gianyar, Bali 80561 Indonesia
        </p>
        <div class="contact-info">
          <ul>
            <li>WhatsApp: +62 852 37998077</li>
            <li>Phone: +62 361 4792778</li>
            <li>Fax: +62 361 4792778</li>
            <li>Email: reservation@jannataresort.com</li>
          </ul>
        </div>
      </div>
      <div>
        <ul class="social-media">
          <li><Icon name="uil:facebook" color="white" /></li>
          <li><Icon name="uil:twitter" color="white" /></li>
          <li><Icon name="uil:instagram" color="white" /></li>
          <li><Icon name="simple-icons:tripadvisor" color="white" /></li>
        </ul>

        <div class="copyright">
          <span
            >© 2023 Jannata Bali Luxury Villas & Resort. Website by Fleava</span
          >
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  background: linear-gradient(
    0deg,
    var(--secondary-color),
    var(--green-light-color)
  );
  padding: 100px 0px 90px 0px;
  color: var(--white-color);
  .container {
    padding-left: 24px !important;
    padding-right: 24px !important;
    max-width: 100%;
  }
  .additional-info {
    font-family: Didot, "Playfair Display", serif;
    display: flex;
    column-gap: 1rem;
    align-items: center;
    .time {
      display: flex;
      column-gap: 1rem;
      align-items: center;
      .time-value {
        font-size: 45px;
        line-height: 55px;
      }

      .time-format {
        font-size: 20px;
        justify-self: center;
        position: relative;
        width: 120px;
        &::after {
          content: "";
          left: 36px;
          position: absolute;
          width: 90px;
          top: 45%;
          background-color: var(--white-color);
          height: 2px;
        }
      }
    }
    .temperature {
      font-size: 45px;
      display: flex;
      flex-direction: column;
      small {
        letter-spacing: 1px;
      }
      a {
        color: var(--gray-light-color);

        &:hover {
          color: var(--white-color);
        }
      }
    }
  }
  .address-info {
    margin-top: 80px;
    font-size: 12px;
    max-width: 100%;
    h3 {
      letter-spacing: 3px;
      text-transform: uppercase;
      font-weight: 600;
    }
  }
  .contact-info {
    margin-top: 40px;
    ul {
      list-style: none;
      font-size: 12px;
      line-height: 20px;
      &.social-media {
        margin-top: 40px;
        display: flex;
        flex-direction: row;
        column-gap: 2rem;
      }
    }
  }
  ul.social-media {
    list-style: none;
    font-size: 12px;
    line-height: 20px;
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    column-gap: 2rem;
  }
  .copyright {
    font-size: 12px;
    margin-top: 2rem;
    max-width: 250px;
  }
}
@media not all and (max-width: 767px) {
  footer {
    padding: 80px 0px 90px 0px;
    .container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 3rem;
      column-gap: 4rem;
      align-content: start;
      padding-left: 50 !important;
      padding-right: 50 !important;
    }
    .address-info {
      margin-top: 0px;
      grid-row: span 2;
    }
    .social-media {
      margin-top: 0px !important;
    }
    .time-format {
      width: 180px !important;
      &::after {
        width: 150px !important;
      }
    }
  }
}
</style>
