<template>
  <div class="products__item">
    <span>{{ productItem.title }}</span>
    <img :src="productItem.thumbnail" alt="Product Image" />
    <span ref="span" @click="handlerDelete(productItem.id)">delete</span>
  </div>
</template>

<script setup lang="ts">
import { onMounted, defineProps, defineEmits, type PropType, ref } from "vue";
import {useTodoStore} from "@/stores/todo";
import type {IProduct} from "@/services/api/types";

const storeTodo = useTodoStore()

defineProps({
    productItem: {
        type: Object as PropType<IProduct>
    }
})

const emit = defineEmits(['delete'])

const span = ref<HTMLInputElement | null>(null)

function handlerDelete(id:number):void {
    emit('delete', id)
}

onMounted(() => {
    console.log(span.value?.innerHTML)

    storeTodo.getTodos(3, 10)
})
</script>

<style lang="scss" scoped>
.products__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 300px;
  margin: 16px;
  padding: 16px;
  border-radius: 10px;
  max-width: 400px;
  background: #ffffff;
  border: 1px solid #e7e6eb;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);

  img {
    width: 50%;
    height: 80%;
    object-fit: cover;
  }
}
</style>