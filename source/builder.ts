// This builder interface should make it easier to create
// CAP objects by hand.
//
// The original interface follows the CAP specification closely
// which includes the order of all properties.
// However, the original order mixes required and non-required
// and does not provide default values for empty lists,
// which is not very handy if you create CAP alerts by hand.
//
// Furthermore the original interface uses very long names for 
// classes and enums. The builder interface provides short names
// which make source code more readable

import * as asn1 from "asn1-ts";
import { XSD } from ".";
import {
  Alert,
  Alert_info_list_info as Info,
  Alert_info_list_info_area_list_area as Area,
  Alert_info_list_info_area_list_area_geocode_list_geocode as Geocode,
  Alert_info_list_info_category_list_category as Category,
  Alert_info_list_info_certainty as Certainty,
  Alert_info_list_info_eventCode_list_eventCode as EventCode,
  Alert_info_list_info_parameter_list_parameter as Parameter,
  Alert_info_list_info_resource_list_resource as Resource,
  Alert_info_list_info_responseType_list_responseType as ResponseType,
  Alert_info_list_info_severity as Severity,
  Alert_info_list_info_urgency as Urgency,
  Alert_msgType as MsgType,
  Alert_scope as Scope,
  Alert_status as Status,
  _from_string_Alert_info_list_info_category_list_category,
  _from_string_Alert_info_list_info_certainty,
  _from_string_Alert_info_list_info_responseType_list_responseType,
  _from_string_Alert_info_list_info_severity,
  _from_string_Alert_info_list_info_urgency,
  _from_string_Alert_msgType,
  _from_string_Alert_scope,
  _from_string_Alert_status,
} from "./CAP-1-2";

export class ResourceBuilder {
  // only mandatory properties in constructor
  constructor(
    public resourceDesc: XSD.String,
    public mimeType: XSD.String,
  ) { }

  public size: asn1.OPTIONAL<asn1.INTEGER>;
  public uri: asn1.OPTIONAL<XSD.AnyURI>;
  public derefUri: asn1.OPTIONAL<XSD.String>;
  public digest: asn1.OPTIONAL<XSD.String>;

  build = (): Resource => new Resource(
    this.resourceDesc,
    this.mimeType,
    this.size,
    this.uri,
    this.derefUri,
    this.digest,
  );
}

export class AreaBuilder {
  // only mandatory properties in constructor
  constructor(
    public areaDesc: XSD.String,
  ) { }

  public altitude: asn1.OPTIONAL<XSD.Decimal>;
  public ceiling: asn1.OPTIONAL<XSD.Decimal>;

  // lists are empty by default
  public polygon_list: XSD.String[] = [];
  public circle_list: XSD.String[] = [];
  public geocode_list: Geocode[] = [];

  build = (): Area => new Area(
    this.areaDesc,
    this.polygon_list,
    this.circle_list,
    this.geocode_list,
    this.altitude,
    this.ceiling,
  );
}

export class InfoBuilder {
  // only mandatory properties in constructor
  constructor(
    public event: XSD.String,
    public urgency: Urgency,
    public severity: Severity,
    public certainty: Certainty,
    public category_list: Category[],
  ) { }

  public language: asn1.OPTIONAL<XSD.Language>;
  public audience: asn1.OPTIONAL<XSD.String>;
  public effective: asn1.OPTIONAL<XSD.DateTime>;
  public onset: asn1.OPTIONAL<XSD.DateTime>;
  public expires: asn1.OPTIONAL<XSD.DateTime>;
  public senderName: asn1.OPTIONAL<XSD.String>;
  public headline: asn1.OPTIONAL<XSD.String>;
  public description: asn1.OPTIONAL<XSD.String>;
  public instruction: asn1.OPTIONAL<XSD.String>;
  public web: asn1.OPTIONAL<XSD.AnyURI>;
  public contact: asn1.OPTIONAL<XSD.String>;

  // lists are empty by default
  public responseType_list: ResponseType[] = [];
  public eventCode_list: EventCode[] = [];
  public parameter_list: Parameter[] = [];
  public resource_list: Resource[] = [];
  public area_list: Area[] = [];

  build = (): Info => new Info(
    this.language,
    this.category_list,
    this.event,
    this.responseType_list,
    this.urgency,
    this.severity,
    this.certainty,
    this.audience,
    this.eventCode_list,
    this.effective,
    this.onset,
    this.expires,
    this.senderName,
    this.headline,
    this.description,
    this.instruction,
    this.web,
    this.contact,
    this.parameter_list,
    this.resource_list,
    this.area_list,
  );
}

export class AlertBuilder {
  // only mandatory properties in constructor
  constructor(
    public identifier: XSD.String,
    public sender: XSD.String,
    public sent: XSD.DateTime,
    public status: Status,
    public msgType: MsgType,
    public scope: Scope,
  ) { }

  public source: asn1.OPTIONAL<XSD.String>;
  public restriction: asn1.OPTIONAL<XSD.String>;
  public addresses: asn1.OPTIONAL<XSD.String>;
  public note: asn1.OPTIONAL<XSD.String>;
  public references: asn1.OPTIONAL<XSD.String>;
  public incidents: asn1.OPTIONAL<XSD.String>;

  // lists are empty by default
  public code_list: XSD.String[] = [];
  public info_list: InfoBuilder[] = [];

  // This property is actually not specified in the CAP specification
  // http://docs.oasis-open.org/emergency/cap/v1.2/CAP-v1.2-os.html
  public elem_list: XSD.String[] = [];

  build = (): Alert => new Alert(
    this.identifier,
    this.sender,
    this.sent,
    this.status,
    this.msgType,
    this.source,
    this.scope,
    this.restriction,
    this.addresses,
    this.code_list,
    this.note,
    this.references,
    this.incidents,
    this.info_list.map(x => x.build()),
    this.elem_list,
  )
}

export abstract class FromString {
  static getCategory = (value: string) => _from_string_Alert_info_list_info_category_list_category(value);
  static getCertainty = (value: string) => _from_string_Alert_info_list_info_certainty(value);
  static getResponseType = (value: string) => _from_string_Alert_info_list_info_responseType_list_responseType(value);
  static getSeverity = (value: string) => _from_string_Alert_info_list_info_severity(value);
  static getUrgency = (value: string) => _from_string_Alert_info_list_info_urgency(value);
  static getMsgType = (value: string) => _from_string_Alert_msgType(value);
  static getScope = (value: string) => _from_string_Alert_scope(value);
  static getStatus = (value: string) => _from_string_Alert_status(value);
}

export {
  Info,
  Area,
  Geocode,
  Category,
  Certainty,
  EventCode,
  Parameter,
  Resource,
  ResponseType,
  Severity,
  Urgency,
  MsgType,
  Scope,
  Status,
};