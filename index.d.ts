export default interface TencentMap {
    elements: Object;
    mapKey: String;
    mapVer: String;
    mapApi: String,
    load(elements: any, config: Object): Promise
}