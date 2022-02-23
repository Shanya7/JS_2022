const circle = require('../calcCircle');

describe("Check circle size", () => {
    test("Get Circle Length", () => {
      expect((circle.getCircleLength(22)).toFixed(1)).toEqual('138.2');
    });
    test("Get Circle Area", ()=>{
        expect((circle.getCircleArea(9)).toFixed(2)).toEqual('254.47')
    });
    test("Get both function without params", ()=>{
        expect(circle.getCircleArea()).toBeNull;
        expect(circle.getCircleLength()).toBeNull;
    });
   
  });