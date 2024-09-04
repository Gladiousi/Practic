export const math = (a, b, c) => {
  if (a == 0 && b == 0 && c != 0) return false;
  if (a == 0) return -c/b;
  if (a == 0 && b == 0 && c == 0) return "Любое число";
  let res = {};
  let D = b * b - 4 * a * c;
  console.log("D = " + D);
  if (D < 0) return "Действительные корни не существуют";
  res["discriminant"] = D;
  if (D == 0) res["quadraticRoots"] = (-b + Math.sqrt(D)) / (2 * a);
  else if (D > 0) {
    let tmp = [];
    tmp.push((-b + Math.sqrt(D)) / (2 * a));
    tmp.push((-b - Math.sqrt(D)) / (2 * a));
    return tmp;
  }
  return res;
};
