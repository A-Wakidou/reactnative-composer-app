/* tslint:disable */
/* eslint-disable */
/**
 * Final project\'s back-end API
 * Back-end API for final-project
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface CreateStripeProductDto
 */
export interface CreateStripeProductDto {
    /**
     * 
     * @type {string}
     * @memberof CreateStripeProductDto
     */
    'name': string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateStripeProductDto
     */
    'images'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CreateStripeProductDto
     */
    'description'?: string;
    /**
     * 
     * @type {object}
     * @memberof CreateStripeProductDto
     */
    'default_price_data': object;
}

