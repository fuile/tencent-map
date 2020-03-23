export default interface TencentMap {
    elements: Object;
    mapKey: String;
    mapVer: String;
    mapApi: String,
    load(elements: any, config: { mapKey: String, mapVer: String, mapApi: String }): Promise
    load(elements: any, config: { mapKey: String, mapVer: String }): Promise
    load(elements: any, config: { mapKey: String }): Promise
}