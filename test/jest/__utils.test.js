import * as utils from "../../dist/node/__utils";

describe("validateDatetime", () => {
    it("returns an error when an empty string is given", () => {
        const err = utils.validateDatetime("sent", "");
        expect(err?.message).toBe(
            "invalid datetime 'sent' of value '': does not match ISO8601 format"
        );
    });

    it("returns an error when an invalid datetime string is given", () => {
        const invalidDatetimeStr = "2000-13-01T13:59:59Z"; // No thirteenth month
        const err = utils.validateDatetime("sent", invalidDatetimeStr);
        expect(err?.message).toBe(
            "invalid datetime 'sent' of value '2000-13-01T13:59:59Z': not a parseable date"
        );
    });

    it("returns `undefined when a valid datetime string is given", () => {
        const invalidDatetimeStr = "2000-12-01T13:59:59Z";
        const err = utils.validateDatetime("sent", invalidDatetimeStr);
        expect(err).toBeUndefined();
    });
});

