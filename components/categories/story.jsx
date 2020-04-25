import React from "react";
import Categories from "./index";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { times } from "lodash";
export default { title: "Categories", decorators: [withKnobs] };

Array.prototype.sample = function () {
  return this[Math.floor(Math.random() * this.length)];
};

const logos = [
  "https://recipe1.ezmember.co.kr/img/mobile/cate1_09.png",
  "https://recipe1.ezmember.co.kr/img/mobile/cate1_16.png",
  "https://recipe1.ezmember.co.kr/img/mobile/cate1_11.png",
  "https://recipe1.ezmember.co.kr/img/mobile/cate1_10.png",
  "https://recipe1.ezmember.co.kr/img/mobile/cate1_02.png",
  "https://recipe1.ezmember.co.kr/img/mobile/cate1_06.png",
];

export const withOneItem = () => {
  const categories = [
    {
      node: {
        id: 1,
        backgroundImage: { url: logos.sample() },
        name: "Category",
      },
    },
  ];

  return (
    <Categories categories={categories} setCateogires={action("clicked")} />
  );
};

export const withMultipleItem = () => {
  const categories = times(5, () => ({
    node: {
      id: 1,
      backgroundImage: { url: logos.sample() },
      name: "Category",
    },
  }));

  return (
    <Categories categories={categories} setCateogires={action("clicked")} />
  );
};
