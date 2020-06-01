let cards = require("../src/memoryGame")
beforeEach,
function() {

    const dom = new jsDOM(fs.readfileSync('index.html'));
    global.document = dom.window.document;

}


beforeEach(function() {
    // make a fake DOM to interact with
    const dom = new jsdom.JSDOM(fs.readFileSync('memoryGame.html'));
    global.document = dom.window.document;
    global.window = dom.window;
    global.navigator = dom.window.navigator;
})
describe("flip", () => {
    it("should flip the cards", () => {
        let card = global.document.getElementByClassName("")
    })
    describe("match funtion", () => {

        it("should match the cards", () => {

        })
    })
})
describe(" disable cards", () => {
    it("should disable cards", () => {

    })
    describe("unflip cards", () => {
        it("should unflip cards", () => {

        })
        describe("unflip board", () => {
            it("should unflip the board")
        })
        describe("shuffle", () => {
            it("should shuffle the cards", () => {

            })
        })
    })
})