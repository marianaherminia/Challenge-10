function maxMultiple(divisor, bound) {
    for( let i = bound; i > 0; i--){
        if( i % divisor === 0){
            return i;
        }
    }
    
}



/**
* Test Suite 
*/
describe('maxMultiple()', () => {
    it('returns largest integer up to boundary', () => {
        // arrange
        const divisor = 1;
        const bound = 10;
        
        // act
        const result = maxMultiple(divisor, bound);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(9);
    });
});