export default class Utils {

    static isNumber(value: any): boolean {
        return typeof value === 'number';
    }

    static isString(value: any): boolean {
        return typeof value === 'string';
    }

    static isFunction(value: any): boolean {
        return typeof value === 'function';
    }

    static isBoolean(value: any): boolean {
        return typeof value === 'boolean';
    }

    static isArray(value: any): boolean {
        return Array.isArray(value);
    }

    static isObject(value: any): boolean {
        return value !== null && typeof value === 'object';
    }

    static isDate(value: any): boolean {
        return Object.prototype.toString.call(value) === '[object Date]';
    }

    static isDefined(value: any): boolean {
        return typeof value !== 'undefined';
    }

    static isUndefined(value: any): boolean {
        return typeof value === 'undefined';
    }

    static isUndefinedOrNull(value: any): boolean {
        return this.isUndefined(value) || value === null;
    }

}
