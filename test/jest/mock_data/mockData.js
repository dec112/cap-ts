import * as CAP_1_2 from "../../../dist/node/CAP-1-2";

export const identifier = "PAAQ-1-rcz9ap";
export const language = "en-US";
export const sender = "ntwc@noaa.gov";
export const sent = "2022-06-05T00:05:50-00:00";
export const status = CAP_1_2.Alert_status_actual;
export const msgType = CAP_1_2.Alert_msgType_alert;
export const source = "NTWC";
export const scope = CAP_1_2.Alert_scope_public_;
export const restriction = "Restriction";
export const addresses = "Address1";
export const note = "Note";
export const references = "sender,identifier,sent";
export const code_list = ["IPAWSv1.0"];
export const incidents = "rcz9ap";
export const category_list = [
    CAP_1_2.Alert_info_list_info_category_list_category.geo,
];
export const event = "Tsunami Information";
export const responseType_list = [
    CAP_1_2.Alert_info_list_info_responseType_list_responseType.none,
];
export const urgency = CAP_1_2.Alert_info_list_info_urgency.unknown;
export const severity = CAP_1_2.Alert_info_list_info_severity.minor;
export const certainty = CAP_1_2.Alert_info_list_info_certainty.unlikely;
export const audience = "";
export const eventCode_list = [
    new CAP_1_2.Alert_info_list_info_eventCode_list_eventCode(
        "TsunamiSystemCategory",
        "Information"
    ),
];
export const elem_list = ["elem1"];

export const effectiveDatetime = "";
export const onsetDatetime = "";
export const expiresDatetime = "2022-06-05T01:05:50-00:00";
export const senderName = "NWS National Tsunami Warning Center Palmer AK";
export const headline = "This is a Tsunami Information Statement.";
export const description =
    "This is a Tsunami Information Statement.  - Event details: Preliminary magnitude 5.6 (mb) earthquake / Lat: 51.885, Lon: -131.076 at 2022-06-04T23:59:13 UTC An information statement indicates that an earthquake has occurred, but does not pose a tsunami threat, or that a tsunami warning, advisory, or watch has been issued for another section of the ocean.";
export const instruction =
    "An earthquake has occurred; a tsunami is not expected.  This will be the only U.S. National Tsunami Warning Center    message issued for this event unless additional information    becomes available.   The location and magnitude are based on preliminary information.   Further information will be issued by the United States    Geological Survey (earthquake.usgs.gov) or the appropriate    regional seismic network.";
export const web =
    "http://ntwc.arh.noaa.gov/events/PAAQ/2022/06/04/rcz9ap/1/WEAK53/WEAK53.txt";
export const contact = "";
export const parameter_list = [
    {
        valueName: "EventLocationName",
        value: "100 miles SE of Sandspit, Haida Gwaii",
    },
    {
        valueName: "EventPreliminaryMagnitude",
        // @ts-ignore; ts(2322) Type 'number' is not assignable to type 'string'.
        value: 5.6,
    },
    {
        value: "mb",
        valueName: "EventPreliminaryMagnitudeType",
    },
    {
        value: "2022-06-04T23:59:13-00:00",
        valueName: "EventOriginTime",
    },
    {
        value: "13 kilometers",
        valueName: "EventDepth",
    },
    {
        value: "51.885,-131.076 0.000",
        valueName: "EventLatLon",
    },
    {
        value:
            "Public Tsunami Information Statements for AK, BC, and US West Coast",
        valueName: "WEAK53",
    },
    {
        value: "WXR",
        valueName: "EAS-ORG",
    },
];
export const resource_list = [
    new CAP_1_2.Alert_info_list_info_resource_list_resource(
        "Event Data as a JSON document",
        "application/json",
        undefined,
        "http://ntwc.arh.noaa.gov/events/PAAQ/2022/06/04/rcz9ap/1/WEAK53/PAAQ.json",
        undefined,
        undefined
    ),
];
export const area_list = [
    new CAP_1_2.Alert_info_list_info_area_list_area(
        "100 miles SE of Sandspit, Haida Gwaii",
        [],
        ["51.885,-131.076 0.0"],
        [],
        undefined,
        undefined
    ),
];

export const info_list = [
    new CAP_1_2.Alert_info_list_info(
        language,
        category_list,
        event,
        responseType_list,
        urgency,
        severity,
        certainty,
        audience,
        eventCode_list,
        sent,
        onsetDatetime,
        expiresDatetime,
        senderName,
        headline,
        description,
        instruction,
        web,
        contact,
        parameter_list.map(
            (param) =>
                new CAP_1_2.Alert_info_list_info_parameter_list_parameter(
                    param.valueName,
                    param.value
                )
        ),
        resource_list.map(
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
        area_list
    ),
];

