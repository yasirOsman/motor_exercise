let test_val = new Map();

//values used as test
test_val.set('123',23.5).set('124',50).set('125',19).set('126',78);

//mock function to retrieve prices
export function getExternalPrice(numberPlate: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(test_val.get(numberPlate));
    }, 1000);
  });
}