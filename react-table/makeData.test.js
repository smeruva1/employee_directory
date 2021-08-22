const rewire = require("rewire")
const makeData = rewire("./makeData")
const range = makeData.__get__("range")
// @ponicode
describe("range", () => {
    test("0", () => {
        let callFunction = () => {
            range(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            range(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            range(3)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            range(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            range(2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            range(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("makeData.default", () => {
    test("0", () => {
        let param1 = [["/dummy_name", "dummyName", "dummy_name", "dummyName"], ["dummy_name/", "dummy_name", "dummyname", "$dummy_name"], ["DUMMYNAME", "dummyName", "dummyname", "$dummy_name"], ["DUMMYNAME", "dummy_name/", "dummyName", "dummyname"], ["dummy_name", "/dummy_name", "dummy_name", "dummyname"], ["DUMMYNAME", "/dummy_name", "dummyname", "dummyName"]]
        let callFunction = () => {
            makeData.default(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [["dummy_name", "dummy_name", "dummyname", "DUMMYNAME"], ["/dummy_name", "dummy_name", "$dummy_name", "dummyName123"], ["dummy_name/", "$dummy_name", "dummyName123", "dummy_name"], ["$dummy_name", "dummyname", "$dummy_name", "$dummy_name"], ["dummyName", "/dummy_name", "dummyName", "DUMMYNAME"], ["dummyName", "$dummy_name", "dummyName", "dummy_name/"]]
        let callFunction = () => {
            makeData.default(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [["dummyname", "dummy_name/", "dummy_name", "dummy_name"], ["$dummy_name", "dummy_name", "dummyname", "dummy_name"], ["dummy_name/", "$dummy_name", "dummyname", "dummyName"], ["DUMMYNAME", "dummy_name", "$dummy_name", "/dummy_name"], ["dummyName", "DUMMYNAME", "/dummy_name", "$dummy_name"], ["dummyName", "dummyname", "dummyName123", "dummy_name/"]]
        let callFunction = () => {
            makeData.default(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [["dummyName", "dummyName", "dummyName", "dummyName"], ["dummy_name/", "dummy_name", "dummyName", "dummy_name"], ["$dummy_name", "DUMMYNAME", "dummy_name", "DUMMYNAME"], ["dummyName", "$dummy_name", "dummyName", "$dummy_name"], ["dummy_name", "dummyName123", "DUMMYNAME", "dummyName"], ["$dummy_name", "dummyName", "dummyName", "DUMMYNAME"]]
        let callFunction = () => {
            makeData.default(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [["dummy_name", "DUMMYNAME", "$dummy_name", "dummyname"], ["dummyName123", "dummyName", "dummyName123", "dummyname"], ["dummyname", "dummyName123", "dummy_name", "dummy_name"], ["dummy_name/", "dummyName", "dummyname", "DUMMYNAME"], ["DUMMYNAME", "dummyName", "dummyname", "$dummy_name"], ["dummyName123", "/dummy_name", "dummyName", "dummyName123"]]
        let callFunction = () => {
            makeData.default(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            makeData.default(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
