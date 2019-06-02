import mapChooser from '../MapChooser';

describe("mapChooser", function () {
    it("returns an location image file name based on locationName given to it", function () {
        let expectedOutput = "portland.jpg";
        let actual = mapChooser("portland");

        expect(actual).toEqual(expectedOutput)
    });

    it("returns undefined when location name is not passed", function () {
        let expectedOutput = "default.jpg";
        let actual = mapChooser("");

        expect(actual).toEqual(expectedOutput)
    });
});

