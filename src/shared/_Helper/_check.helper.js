export default class CheckHelper {
    static isNotNullOrUndefined(value) {
        return typeof value !== 'undefined' || value !== null
    }

    static isNotEmptyString(value) {
        return typeof value === 'string' && value !== ''
    }

    static hasArrayItem(value) {
        return value?.length > 0
    }

    static isClientSide() {
        return typeof window !== 'undefined'
    }
}
