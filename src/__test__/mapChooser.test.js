import mapChooser from '../MapChooser';

describe("mapChooser", function () {
    it("returns an location image file name based on locationName given to it", function () {
        let expectedOutput = "portland.png";
        let actual = mapChooser("portland");

        expect(actual).toEqual(expectedOutput)
    });

    it("returns undefined when location name is not passed", function () {
        let expectedOutput = "none.png";
        let actual = mapChooser("");

        expect(actual).toEqual(expectedOutput)
    });
});

