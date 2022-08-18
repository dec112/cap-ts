import * as CAP_1_2 from "../../dist/node/CAP-1-2";
import * as mock from "./mock_data/mockData";

describe("Alert_info_list_info_eventCode_list_eventCode", () => {
    describe("validate", () => {
        it("catches undefined 'valueName'", () => {
            const eventCode = new CAP_1_2.Alert_info_list_info_eventCode_list_eventCode(
                undefined,
                "value"
            );
            expect(eventCode.validate()?.message).toBe(
                "invalid 'eventCode.valueName' of value 'undefined'"
            );
        });

        it("catches empty-string 'valueName'", () => {
            const eventCode = new CAP_1_2.Alert_info_list_info_eventCode_list_eventCode(
                "",
                "value"
            );
            expect(eventCode.validate()?.message).toBe(
                "invalid 'eventCode.valueName' of value ''"
            );
        });
    });
});

describe("Alert_info_list_info_parameter_list_parameter", () => {
    describe("validate", () => {
        it("catches undefined 'valueName'", () => {
            const parameter = new CAP_1_2.Alert_info_list_info_parameter_list_parameter(
                undefined,
                "value"
            );
            expect(parameter.validate()?.message).toBe(
                "invalid 'parameter.valueName' of value 'undefined'"
            );
        });

        it("catches empty-string 'valueName'", () => {
            const parameter = new CAP_1_2.Alert_info_list_info_parameter_list_parameter(
                "",
                "value"
            );
            expect(parameter.validate()?.message).toBe(
                "invalid 'parameter.valueName' of value ''"
            );
        });
    });
});

describe("Alert_info_list_info_area_list_area_geocode_list_geocode", () => {
    describe("validate", () => {
        it("catches undefined 'valueName'", () => {
            const geocode = new CAP_1_2.Alert_info_list_info_area_list_area_geocode_list_geocode(
                undefined,
                "value"
            );
            expect(geocode.validate()?.message).toBe(
                "invalid 'geocode.valueName' of value 'undefined'"
            );
        });

        it("catches empty-string 'valueName'", () => {
            const geocode = new CAP_1_2.Alert_info_list_info_area_list_area_geocode_list_geocode(
                "",
                "value"
            );
            expect(geocode.validate()?.message).toBe(
                "invalid 'geocode.valueName' of value ''"
            );
        });
    });
});

describe("Alert_info_list_info_resource_list_resource", () => {
    describe("validate", () => {
        let resource;
        beforeEach(() => {
            resource = Object.assign(
                new CAP_1_2.Alert_info_list_info_resource_list_resource(),
                mock.resource_list[0]
            );
        });

        it("catches invalid 'resourceDesc'", () => {
            resource.resourceDesc = undefined;
            expect(resource.validate()?.message).toBe(
                "invalid 'resource.resourceDesc' of value 'undefined'"
            );
            resource.resourceDesc = "";
            expect(resource.validate()?.message).toBe(
                "invalid 'resource.resourceDesc' of value ''"
            );
        });

        it("catches invalid 'mimeType'", () => {
            resource.mimeType = undefined;
            expect(resource.validate()?.message).toBe(
                "invalid 'resource.mimeType' of value 'undefined'"
            );
            resource.mimeType = "";
            expect(resource.validate()?.message).toBe(
                "invalid 'resource.mimeType' of value ''"
            );
        });
    });
});

describe("Alert_info_list_info_area_list_area", () => {
    describe("validate", () => {
        let area;
        beforeEach(() => {
            area = Object.assign(
                new CAP_1_2.Alert_info_list_info_area_list_area(),
                mock.area_list[0]
            );
        });

        it("catches invalid 'areaDesc'", () => {
            area.areaDesc = undefined;
            expect(area.validate()?.message).toBe(
                "invalid 'area.areaDesc' of value 'undefined'"
            );
            area.areaDesc = "";
            expect(area.validate()?.message).toBe(
                "invalid 'area.areaDesc' of value ''"
            );
        });
    });
});

describe("Alert_info_list_info", () => {
    describe("validate", () => {
        /** `testValidateHelper` is a test-only helper that creates an Alert
         * constructed with default args and any `overrideArgs` and validates that alert.
         */
        const testValidateHelper = (overrideArgs) => {
            const args = { ...mock, ...overrideArgs };
            const info = new CAP_1_2.Alert_info_list_info(
                args.language,
                args.category_list,
                args.event,
                args.responseType_list,
                args.urgency,
                args.severity,
                args.certainty,
                args.audience,
                args.eventCode_list,
                args.sent,
                args.onsetDatetime,
                args.expiresDatetime,
                args.senderName,
                args.headline,
                args.description,
                args.instruction,
                args.web,
                args.contact,
                (args.parameter_list ?? []).map(
                    (param) =>
                        new CAP_1_2.Alert_info_list_info_parameter_list_parameter(
                            param.valueName,
                            param.value
                        )
                ),
                (args.resource_list ?? []).map(
                    (resource) =>
                        new CAP_1_2.Alert_info_list_info_resource_list_resource(
                            resource.resourceDesc,
                            resource.mimeType,
                            resource.size,
                            resource.uri,
                            resource.derefUri,
                            resource.digest
                        )
                ),
                args.areaList
            );
            return info.validate();
        };
        const testValidateHelperErr = testValidateHelper();
        expect(testValidateHelperErr).toBeUndefined();

        describe("category_list", () => {
            it("should catch a value of 'undefined'", () => {
                const err = testValidateHelper({
                    category_list: undefined,
                });
                expect(err?.message).toBe("'category_list' cannot be empty");
            });

            it("should catch an empty array", () => {
                const err = testValidateHelper({
                    category_list: [],
                });
                expect(err?.message).toBe("'category_list' cannot be empty");
            });

            it("should catch invalid values", () => {
                const err = testValidateHelper({
                    category_list: ["not-a-real-category"],
                });
                expect(err?.message).toBe(
                    "invalid 'category' of value 'not-a-real-category'"
                );
            });
        });

        describe("event", () => {
            it("should catch a value of 'undefined'", () => {
                const err = testValidateHelper({
                    event: undefined,
                });
                expect(err?.message).toBe(
                    "invalid 'event' of value 'undefined'"
                );
            });

            it("should catch an empty string", () => {
                const err = testValidateHelper({
                    event: "",
                });
                expect(err?.message).toBe("invalid 'event' of value ''");
            });
        });

        describe("responseType_list", () => {
            it("should catch a value of 'undefined'", () => {
                const err = testValidateHelper({
                    responseType_list: undefined,
                });
                expect(err?.message).toBe(
                    "'responseType_list' cannot be empty"
                );
            });

            it("should catch an empty array", () => {
                const err = testValidateHelper({
                    responseType_list: [],
                });
                expect(err?.message).toBe(
                    "'responseType_list' cannot be empty"
                );
            });

            it("should catch invalid values", () => {
                const err = testValidateHelper({
                    responseType_list: ["not-a-real-responseType"],
                });
                expect(err?.message).toBe(
                    "invalid 'responseType' of value 'not-a-real-responseType'"
                );
            });
        });

        describe("urgency", () => {
            it("should catch a value of 'undefined'", () => {
                const err = testValidateHelper({
                    urgency: undefined,
                });
                expect(err?.message).toBe(
                    "invalid 'urgency' of value 'undefined'"
                );
            });

            it("should catch invalid values", () => {
                const err = testValidateHelper({
                    urgency: "not-a-real-urgency",
                });
                expect(err?.message).toBe(
                    "invalid 'urgency' of value 'not-a-real-urgency'"
                );
            });
        });

        describe("severity", () => {
            it("should catch a value of 'undefined'", () => {
                const err = testValidateHelper({
                    severity: undefined,
                });
                expect(err?.message).toBe(
                    "invalid 'severity' of value 'undefined'"
                );
            });

            it("should catch invalid values", () => {
                const err = testValidateHelper({
                    severity: "not-a-real-severity",
                });
                expect(err?.message).toBe(
                    "invalid 'severity' of value 'not-a-real-severity'"
                );
            });
        });

        describe("certainty", () => {
            it("should catch a value of 'undefined'", () => {
                const err = testValidateHelper({
                    certainty: undefined,
                });
                expect(err?.message).toBe(
                    "invalid 'certainty' of value 'undefined'"
                );
            });

            it("should catch invalid values", () => {
                const err = testValidateHelper({
                    certainty: "not-a-real-certainty",
                });
                expect(err?.message).toBe(
                    "invalid 'certainty' of value 'not-a-real-certainty'"
                );
            });
        });
    });
});

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
                args.info_list,
                args.elem_list
            );
            return alert.validate();
        };
        const testValidateHelperErr = testValidateHelper();
        expect(testValidateHelperErr).toBeUndefined();

        it("should catch an invalid 'identifier'", () => {
            const err = testValidateHelper({
                identifier: "",
            });
            expect(err?.message).toBe("invalid 'identifier' of value ''");
        });

        it("should catch an invalid 'sender'", () => {
            const err = testValidateHelper({
                sender: "",
            });
            expect(err?.message).toBe("invalid 'sender' of value ''");
        });

        it("should catch an invalid 'sent'", () => {
            const err = testValidateHelper({
                sent: "",
            });
            expect(err?.message).toBe(
                "invalid datetime 'sent' of value '': does not match ISO8601 format"
            );
        });

        describe("status", () => {
            it("should catch an empty string", () => {
                const err = testValidateHelper({
                    status: "",
                });
                expect(err?.message).toBe("invalid 'status' of value ''");
            });

            it("should catch 'undefined'", () => {
                const err = testValidateHelper({
                    status: undefined,
                });
                expect(err?.message).toBe(
                    "invalid 'status' of value 'undefined'"
                );
            });

            it("should catch an invalid string", () => {
                const err = testValidateHelper({
                    status: "not-a-valid-status",
                });
                expect(err?.message).toBe(
                    "invalid 'status' of value 'not-a-valid-status'"
                );
            });
        });

        describe("msgType", () => {
            it("should catch an empty string", () => {
                const err = testValidateHelper({
                    msgType: "",
                });
                expect(err?.message).toBe("invalid 'msgType' of value ''");
            });

            it("should catch 'undefined'", () => {
                const err = testValidateHelper({
                    msgType: undefined,
                });
                expect(err?.message).toBe(
                    "invalid 'msgType' of value 'undefined'"
                );
            });

            it("should catch an invalid string", () => {
                const err = testValidateHelper({
                    msgType: "not-a-valid-msgType",
                });
                expect(err?.message).toBe(
                    "invalid 'msgType' of value 'not-a-valid-msgType'"
                );
            });
        });

        describe("scope", () => {
            it("should catch an empty string", () => {
                const err = testValidateHelper({
                    scope: "",
                });
                expect(err?.message).toBe("invalid 'scope' of value ''");
            });

            it("should catch 'undefined'", () => {
                const err = testValidateHelper({
                    scope: undefined,
                });
                expect(err?.message).toBe(
                    "invalid 'scope' of value 'undefined'"
                );
            });

            it("should catch an invalid string", () => {
                const err = testValidateHelper({
                    scope: "not-a-valid-scope",
                });
                expect(err?.message).toBe(
                    "invalid 'scope' of value 'not-a-valid-scope'"
                );
            });
        });

        describe("code_list", () => {
            it("should catch an empty array", () => {
                const err = testValidateHelper({
                    code_list: [],
                });
                expect(err?.message).toBe("invalid 'code' of value ''");
            });

            it("should catch a value of 'undefined'", () => {
                const err = testValidateHelper({
                    code_list: [undefined],
                });
                expect(err?.message).toBe("invalid 'code' of value ''");
            });
        });

        describe("elem_list", () => {
            it("should catch a value of 'undefined'", () => {
                const err = testValidateHelper({
                    elem_list: [undefined],
                });
                expect(err?.message).toBe("invalid 'elem_list' of value ''");
            });

            it("should allow an empty array", () => {
                const err = testValidateHelper({
                    elem_list: [],
                });
                expect(err).toBeUndefined();
            });
        });

        describe("info_list", () => {
            it("should catch a value of 'undefined'", () => {
                const err = testValidateHelper({
                    info_list: undefined,
                });
                expect(err?.message).toBe("'info_list' cannot be empty");
            });

            it("should catch an empty array", () => {
                const err = testValidateHelper({
                    info_list: [],
                });
                expect(err?.message).toBe("'info_list' cannot be empty");
            });
        });
    });
});

