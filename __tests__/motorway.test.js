import { getPrice, getFromCache } from "../motorway"
jest.mock('../__mocks__/external');

describe("async call to mock api", () => {
    it('should return the correct value', () => {
        expect.assertions(1);
        return expect(getPrice('123')).resolves.toEqual(23.5);
      });

      it('should return undefined', () => {
        expect.assertions(1);
        return expect(getPrice('128')).resolves.toEqual(undefined);
      });

    
  });

  
  describe("tests if the cache is populated with the right values", () => {
    

    test('should test if the data is added to the cache after its called from the api', () => {
        return getPrice('123').then(() => {
            expect(getFromCache('123')).resolves.toEqual(23.5);
        });
    });
        
  });