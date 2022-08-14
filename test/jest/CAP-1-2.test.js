import * as CAP_1_2 from "../../dist/node/CAP-1-2";
import * as mock from "./mock_data/mockData";

describe("Alert", () => {
    describe("validate", () => {
        /** `testValidateHelper` is a test-only helper that creates an Alert
         * constructed with default args and any `overrideArgs` and validates that alert.
         */
        const testValidateHelper = (overrideArgs) => {
            const args = { ...mock, ...overrideArgs };
            const alert = new CAP_1_2.Alert(
                args.identifier,
                args.sender,
                args.sent,
                args.status,
                args.msgType,
                args.source,
                args.scope,
                args.restriction,
                args.addresses,
                args.code_list,
                args.note,
                args.references,
                args.incidents,
                [args.info_list],
                args.elem_list
            );
            return alert.validate();
        };

        it("should catch an invalid `identifier`", () => {
            let err = testValidateHelper({
                identifier: "",
            });
            expect(err?.message).toBe("invalid 'identifier' of value ''");
            err = testValidateHelper(); // No override values
            expect(err).toBeUndefined();
        });

        it("should catch an invalid `sender`", () => {
            let err = testValidateHelper({
                sender: "",
            });
            expect(err?.message).toBe("invalid 'sender' of value ''");
            err = testValidateHelper(); // No override values
            expect(err).toBeUndefined();
        });

        it("should catch an invalid `sent`", () => {
            let err = testValidateHelper({
                sent: "",
            });
            expect(err?.message).toBe(
                "invalid datetime 'sent' of value '': does not match ISO8601 format"
            );
            err = testValidateHelper(); // No override values
            expect(err).toBeUndefined();
        });

        describe("status", () => {
            it("should catch an empty string", () => {
                let err = testValidateHelper({
                    status: "",
                });
                expect(err?.message).toBe("invalid 'status' of value ''");
                err = testValidateHelper(); // No override values
                expect(err).toBeUndefined();
            });

            it("should catch `undefined`", () => {
                let err = testValidateHelper({
                    status: undefined,
                });
                expect(err?.message).toBe(
                    "invalid 'status' of value 'undefined'"
                );
                err = testValidateHelper(); // No override values
                expect(err).toBeUndefined();
            });

            it("should catch an invalid string", () => {
                let err = testValidateHelper({
                    status: "not-a-valid-status",
                });
                expect(err?.message).toBe(
                    "invalid 'status' of value 'not-a-valid-status'"
                );
                err = testValidateHelper(); // No override values
                expect(err).toBeUndefined();
            });
        });

        describe("msgType", () => {
            it("should catch an empty string", () => {
                let err = testValidateHelper({
                    msgType: "",
                });
                expect(err?.message).toBe("invalid 'msgType' of value ''");
                err = testValidateHelper(); // No override values
                expect(err).toBeUndefined();
            });

            it("should catch `undefined`", () => {
                let err = testValidateHelper({
                    msgType: undefined,
                });
                expect(err?.message).toBe(
                    "invalid 'msgType' of value 'undefined'"
                );
                err = testValidateHelper(); // No override values
                expect(err).toBeUndefined();
            });

            it("should catch an invalid string", () => {
                let err = testValidateHelper({
                    msgType: "not-a-valid-msgType",
                });
                expect(err?.message).toBe(
                    "invalid 'msgType' of value 'not-a-valid-msgType'"
                );
                err = testValidateHelper(); // No override values
                expect(err).toBeUndefined();
            });
        });

        describe("scope", () => {
            it("should catch an empty string", () => {
                let err = testValidateHelper({
                    scope: "",
                });
                expect(err?.message).toBe("invalid 'scope' of value ''");
                err = testValidateHelper(); // No override values
                expect(err).toBeUndefined();
            });

            it("should catch `undefined`", () => {
                let err = testValidateHelper({
                    scope: undefined,
                });
                expect(err?.message).toBe(
                    "invalid 'scope' of value 'undefined'"
                );
                err = testValidateHelper(); // No override values
                expect(err).toBeUndefined();
            });

            it("should catch an invalid string", () => {
                let err = testValidateHelper({
                    scope: "not-a-valid-scope",
                });
                expect(err?.message).toBe(
                    "invalid 'scope' of value 'not-a-valid-scope'"
                );
                err = testValidateHelper(); // No override values
                expect(err).toBeUndefined();
            });
        });

        describe("code_list", () => {
            it("should catch an empty array", () => {
                let err = testValidateHelper({
                    code_list: [],
                });
                expect(err?.message).toBe("invalid 'code' of value ''");
                err = testValidateHelper(); // No override values
                expect(err).toBeUndefined();
            });

            it("should catch a value of `undefined`", () => {
                let err = testValidateHelper({
                    code_list: [undefined],
                });
                expect(err?.message).toBe("invalid 'code' of value ''");
                err = testValidateHelper(); // No override values
                expect(err).toBeUndefined();
            });
        });

        describe("elem_list", () => {
            it("should catch a value of `undefined`", () => {
                let err = testValidateHelper({
                    elem_list: [undefined],
                });
                expect(err?.message).toBe("invalid 'elem_list' of value ''");
                err = testValidateHelper(); // No override values
                expect(err).toBeUndefined();
            });

            it("should allow an empty array", () => {
                let err = testValidateHelper({
                    elem_list: [],
                });
                expect(err).toBeUndefined();
            });
        });

        describe("info_list", () => {
            it("should catch a value of `undefined`", () => {
                let err = testValidateHelper({
                    info_list: undefined,
                });
                expect(err?.message).toBe("`info_list` cannot be empty");
                err = testValidateHelper(); // No override values
                expect(err).toBeUndefined();
            });

            it("should catch an empty array", () => {
                let err = testValidateHelper({
                    info_list: [],
                });
                expect(err?.message).toBe("`info_list` cannot be empty");
                err = testValidateHelper(); // No override values
                expect(err).toBeUndefined();
            });
        });
    });
});

