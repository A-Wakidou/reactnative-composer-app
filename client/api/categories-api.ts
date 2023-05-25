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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CreateCategoryDto } from '../dto';
// @ts-ignore
import { UpdateCategoryDto } from '../dto';
/**
 * CategoriesApi - axios parameter creator
 * @export
 */
export const CategoriesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CreateCategoryDto} createCategoryDto 
         * @param {string} [authorization] JWT Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoriesControllerCreate: async (createCategoryDto: CreateCategoryDto, authorization?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createCategoryDto' is not null or undefined
            assertParamExists('categoriesControllerCreate', 'createCategoryDto', createCategoryDto)
            const localVarPath = `/categories`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (authorization != null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createCategoryDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoriesControllerFindAll: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/categories`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoriesControllerFindOne: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('categoriesControllerFindOne', 'id', id)
            const localVarPath = `/categories/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {string} [authorization] JWT Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoriesControllerRemove: async (id: string, authorization?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('categoriesControllerRemove', 'id', id)
            const localVarPath = `/categories/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (authorization != null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {UpdateCategoryDto} updateCategoryDto 
         * @param {string} [authorization] JWT Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoriesControllerUpdate: async (id: string, updateCategoryDto: UpdateCategoryDto, authorization?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('categoriesControllerUpdate', 'id', id)
            // verify required parameter 'updateCategoryDto' is not null or undefined
            assertParamExists('categoriesControllerUpdate', 'updateCategoryDto', updateCategoryDto)
            const localVarPath = `/categories/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (authorization != null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateCategoryDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CategoriesApi - functional programming interface
 * @export
 */
export const CategoriesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CategoriesApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {CreateCategoryDto} createCategoryDto 
         * @param {string} [authorization] JWT Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async categoriesControllerCreate(createCategoryDto: CreateCategoryDto, authorization?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.categoriesControllerCreate(createCategoryDto, authorization, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async categoriesControllerFindAll(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.categoriesControllerFindAll(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async categoriesControllerFindOne(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.categoriesControllerFindOne(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {string} [authorization] JWT Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async categoriesControllerRemove(id: string, authorization?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.categoriesControllerRemove(id, authorization, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {UpdateCategoryDto} updateCategoryDto 
         * @param {string} [authorization] JWT Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async categoriesControllerUpdate(id: string, updateCategoryDto: UpdateCategoryDto, authorization?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.categoriesControllerUpdate(id, updateCategoryDto, authorization, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CategoriesApi - factory interface
 * @export
 */
export const CategoriesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CategoriesApiFp(configuration)
    return {
        /**
         * 
         * @param {CreateCategoryDto} createCategoryDto 
         * @param {string} [authorization] JWT Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoriesControllerCreate(createCategoryDto: CreateCategoryDto, authorization?: string, options?: any): AxiosPromise<void> {
            return localVarFp.categoriesControllerCreate(createCategoryDto, authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoriesControllerFindAll(options?: any): AxiosPromise<void> {
            return localVarFp.categoriesControllerFindAll(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoriesControllerFindOne(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.categoriesControllerFindOne(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {string} [authorization] JWT Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoriesControllerRemove(id: string, authorization?: string, options?: any): AxiosPromise<void> {
            return localVarFp.categoriesControllerRemove(id, authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {UpdateCategoryDto} updateCategoryDto 
         * @param {string} [authorization] JWT Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoriesControllerUpdate(id: string, updateCategoryDto: UpdateCategoryDto, authorization?: string, options?: any): AxiosPromise<void> {
            return localVarFp.categoriesControllerUpdate(id, updateCategoryDto, authorization, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CategoriesApi - object-oriented interface
 * @export
 * @class CategoriesApi
 * @extends {BaseAPI}
 */
export class CategoriesApi extends BaseAPI {
    /**
     * 
     * @param {CreateCategoryDto} createCategoryDto 
     * @param {string} [authorization] JWT Token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    public categoriesControllerCreate(createCategoryDto: CreateCategoryDto, authorization?: string, options?: AxiosRequestConfig) {
        return CategoriesApiFp(this.configuration).categoriesControllerCreate(createCategoryDto, authorization, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    public categoriesControllerFindAll(options?: AxiosRequestConfig) {
        return CategoriesApiFp(this.configuration).categoriesControllerFindAll(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    public categoriesControllerFindOne(id: string, options?: AxiosRequestConfig) {
        return CategoriesApiFp(this.configuration).categoriesControllerFindOne(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {string} [authorization] JWT Token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    public categoriesControllerRemove(id: string, authorization?: string, options?: AxiosRequestConfig) {
        return CategoriesApiFp(this.configuration).categoriesControllerRemove(id, authorization, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {UpdateCategoryDto} updateCategoryDto 
     * @param {string} [authorization] JWT Token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    public categoriesControllerUpdate(id: string, updateCategoryDto: UpdateCategoryDto, authorization?: string, options?: AxiosRequestConfig) {
        return CategoriesApiFp(this.configuration).categoriesControllerUpdate(id, updateCategoryDto, authorization, options).then((request) => request(this.axios, this.basePath));
    }
}