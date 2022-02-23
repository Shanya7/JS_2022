const userList = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2'];

describe("Check array", () => {
    test("Check if array has 'admin' value", () => {
      expect(userList).toContain("admin");
    });
    test("Check if array first array element is 'Nick'", ()=>{
        expect(userList[0]).toBe("Nick")
    });
    test("Check if array last array element is 'new_user_2'", ()=>{
        expect(userList[userList.length-1]).toBe("new_user_2")
    });
    test("Check if array length is 5", ()=>{
        expect(userList).toHaveLength(5)
    });
    test("Check if third element in array has type string", ()=>{
        expect(typeof userList[2]).toBe("string")
    });
    test("Check array doesn't have element #8", ()=>{
        expect(userList).not.toHaveLength(8)
    });
  });