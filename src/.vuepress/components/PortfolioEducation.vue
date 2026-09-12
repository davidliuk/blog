<template>
  <EducationItem
    v-for="item in education"
    :key="item.school"
    :school="item.school"
    :abbr="item.abbr"
    :degree="item.degree"
    :major="item.major"
    :location="item.location"
    :time="item.time"
    :logo="item.logo"
    :gpa="item.gpa"
    :rank="item.rank"
    :honors="item.honors"
  />
</template>

<script setup lang="ts">
import { education } from "../data/portfolio.js";
import EducationItem from "./EducationItem.vue";
</script>
