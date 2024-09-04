import { expect, test } from "vitest";

import { math } from "./main";

test("D>0", () => {
  expect(math(1, 1, -2)).toStrictEqual([1, -2]);
});

test("D=0", () => {
  expect(math(1, 2, 1)).toStrictEqual({
    discriminant: 0,
    quadraticRoots: -1,
  });
});

test("D < 0", () => {
  expect(math(2, 1, 2)).toBe("Действительные корни не существуют");
});

test("a=0, b=0, c=0", () => {
  expect(math(2, 1, 2)).toBe("Действительные корни не существуют");
});

test("a=0, b=0 c!=0", () => {
  expect(math(0, 0, 2)).toBe(false);
});

test("a=0, b!=0", () => {
  expect(math(0, 2, 1)).toBe(-0.5);
});

test("a!=0, b!=0, c=0", () => {
  expect(math(2, 1, 0)).toStrictEqual([0, -0.5]);
});
