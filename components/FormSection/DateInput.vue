<script setup lang="ts">
import IconDots from "./IconDots.vue";
const inputEl = ref<HTMLInputElement | null>(null);
const emit = defineEmits(["update:modelValue"]);

const props = defineProps<{
  type?: string;
  placeholder: string;
  name: string;
  modelValue: string | number;
  max?: number | string;
  min?: number | string;
}>();
const isNumberInput = computed(() => props.type === "number");
const isDateInput = computed(() => props.type === "date");

const inputValue = computed({
  get(): string | number {
    return props.modelValue;
  },
  set(value: number | string) {
    emit("update:modelValue", value);
  },
});

const valueExceedMax = computed(
  () => props.max && Number(inputValue.value) >= Number(props.max)
);
const valueExceedMin = computed(
  () => props.min && Number(inputValue.value) <= Number(props.min)
);

const increaseValue = () => {
  if (typeof inputValue.value === "number" && !valueExceedMax.value) {
    inputValue.value += 1;
  }
};
const decreaseValue = () => {
  if (props.type === "number")
    if (typeof inputValue.value === "number" && !valueExceedMin.value) {
      inputValue.value -= 1;
    }
};

const toggleCalendar = () => {
  inputEl.value?.showPicker();
};
</script>
<template>
  <div
    class="field-wrapper"
    :class="{
      'field-wrapper__number': isNumberInput,
      'field-wrapper__date': isDateInput,
    }"
  >
    <input
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :max="max"
      :min="min"
      v-model="inputValue"
      ref="inputEl"
    />
    <IconDots v-if="isDateInput" @click="toggleCalendar" />
    <span class="input-addon left" v-if="isNumberInput" @click="decreaseValue">
      &#8722;
    </span>
    <span class="input-addon right" v-if="isNumberInput" @click="increaseValue">
      +
    </span>
  </div>
</template>
<style lang="scss" setup>
.field-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  border: 1px solid var(--secondary-color);
  padding: 15px;
  box-sizing: border-box;
  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    color: var(--secondary-color);
    letter-spacing: 1px;
    text-align: center;
  }
  span.input-addon {
    width: 20px;
    position: absolute;
    color: var(--white-color);
    font-size: 20px;
    cursor: pointer;
    user-select: none;
    text-align: center;
    &.left {
      left: 10% !important;
      &::before {
        content: "";
      }
    }
    &.right {
      right: 10% !important;
    }
  }
}
</style>
