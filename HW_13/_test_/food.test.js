const imp = require("../food");
const min = 12;
const max = 40;
describe("Filter", () => {
  test("Array length is equal 3", () => {
    expect(imp.filterFoodPrice(imp.food, min, max)).toHaveLength(3);
  });
  test("Array contain 'pepper' with price '27'", () => {
    expect(imp.filterFoodPrice(imp.food, min, max)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ kind: "pepper", price: 27 }),
      ])
    );
  });
  test("Filtered Array contains '2nd', '3rd' and '4th' elements of array", () => {
      const expected = [imp.food[1],imp.food[2], imp.food[3]];
    expect(imp.filterFoodPrice(imp.food, min, max)).toEqual(expect.arrayContaining(expected));
  });
  test("Price of first element is bigger than min", () => {
  expect(imp.filterFoodPrice(imp.food, min, max)[0].price).toBeGreaterThan(min);
});
   test("Price if third element value is less than max", () => {
    expect(imp.filterFoodPrice(imp.food, min, max)[2].price).toBeLessThan(max);

  });
  test("Array doesn't contain 'lemon' with price '50'", () => {
    expect(imp.filterFoodPrice(imp.food, min, max)).not.toEqual(
      expect.arrayContaining([
        expect.objectContaining({ kind: "lemon", price: 50 }),
      ])
    );
  });
});
