const imp = require("../food");

describe("Filter", () => {
  test("Array length is equal 3", () => {
    expect(imp.filterFoodPrice(imp.food, 12, 40)).toHaveLength(3);
  });
  test("Array contain 'pepper' with price '27'", () => {
    expect(imp.filterFoodPrice(imp.food, 12, 40)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ kind: "pepper", price: 27 }),
      ])
    );
  });
});
