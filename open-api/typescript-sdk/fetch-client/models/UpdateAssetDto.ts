/* tslint:disable */
/* eslint-disable */
/**
 * Immich
 * Immich API
 *
 * The version of the OpenAPI document: 1.94.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UpdateAssetDto
 */
export interface UpdateAssetDto {
    /**
     * 
     * @type {string}
     * @memberof UpdateAssetDto
     */
    dateTimeOriginal?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateAssetDto
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateAssetDto
     */
    isArchived?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateAssetDto
     */
    isFavorite?: boolean;
    /**
     * 
     * @type {number}
     * @memberof UpdateAssetDto
     */
    latitude?: number;
    /**
     * 
     * @type {number}
     * @memberof UpdateAssetDto
     */
    longitude?: number;
}

/**
 * Check if a given object implements the UpdateAssetDto interface.
 */
export function instanceOfUpdateAssetDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateAssetDtoFromJSON(json: any): UpdateAssetDto {
    return UpdateAssetDtoFromJSONTyped(json, false);
}

export function UpdateAssetDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateAssetDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dateTimeOriginal': !exists(json, 'dateTimeOriginal') ? undefined : json['dateTimeOriginal'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'isArchived': !exists(json, 'isArchived') ? undefined : json['isArchived'],
        'isFavorite': !exists(json, 'isFavorite') ? undefined : json['isFavorite'],
        'latitude': !exists(json, 'latitude') ? undefined : json['latitude'],
        'longitude': !exists(json, 'longitude') ? undefined : json['longitude'],
    };
}

export function UpdateAssetDtoToJSON(value?: UpdateAssetDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dateTimeOriginal': value.dateTimeOriginal,
        'description': value.description,
        'isArchived': value.isArchived,
        'isFavorite': value.isFavorite,
        'latitude': value.latitude,
        'longitude': value.longitude,
    };
}
