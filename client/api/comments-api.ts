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
import { CreateCommentDto } from '../dto';
// @ts-ignore
import { UpdateCommentDto } from '../dto';
/**
 * CommentsApi - axios parameter creator
 * @export
 */
export const CommentsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CreateCommentDto} createCommentDto 
         * @param {string} [authorization] JWT Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentsControllerCreate: async (createCommentDto: CreateCommentDto, authorization?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createCommentDto' is not null or undefined
            assertParamExists('commentsControllerCreate', 'createCommentDto', createCommentDto)
            const localVarPath = `/comments`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createCommentDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} [authorization] JWT Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentsControllerFindAll: async (authorization?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/comments`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
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
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentsControllerFindOne: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('commentsControllerFindOne', 'id', id)
            const localVarPath = `/comments/{id}`
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
         * @param {number} id 
         * @param {string} [authorization] JWT Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentsControllerRemove: async (id: number, authorization?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('commentsControllerRemove', 'id', id)
            const localVarPath = `/comments/{id}`
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
         * @param {number} id 
         * @param {UpdateCommentDto} updateCommentDto 
         * @param {string} [authorization] JWT Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentsControllerUpdate: async (id: number, updateCommentDto: UpdateCommentDto, authorization?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('commentsControllerUpdate', 'id', id)
            // verify required parameter 'updateCommentDto' is not null or undefined
            assertParamExists('commentsControllerUpdate', 'updateCommentDto', updateCommentDto)
            const localVarPath = `/comments/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateCommentDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CommentsApi - functional programming interface
 * @export
 */
export const CommentsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CommentsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {CreateCommentDto} createCommentDto 
         * @param {string} [authorization] JWT Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async commentsControllerCreate(createCommentDto: CreateCommentDto, authorization?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.commentsControllerCreate(createCommentDto, authorization, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} [authorization] JWT Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async commentsControllerFindAll(authorization?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.commentsControllerFindAll(authorization, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async commentsControllerFindOne(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.commentsControllerFindOne(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {string} [authorization] JWT Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async commentsControllerRemove(id: number, authorization?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.commentsControllerRemove(id, authorization, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {UpdateCommentDto} updateCommentDto 
         * @param {string} [authorization] JWT Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async commentsControllerUpdate(id: number, updateCommentDto: UpdateCommentDto, authorization?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.commentsControllerUpdate(id, updateCommentDto, authorization, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CommentsApi - factory interface
 * @export
 */
export const CommentsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CommentsApiFp(configuration)
    return {
        /**
         * 
         * @param {CreateCommentDto} createCommentDto 
         * @param {string} [authorization] JWT Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentsControllerCreate(createCommentDto: CreateCommentDto, authorization?: string, options?: any): AxiosPromise<void> {
            return localVarFp.commentsControllerCreate(createCommentDto, authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [authorization] JWT Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentsControllerFindAll(authorization?: string, options?: any): AxiosPromise<void> {
            return localVarFp.commentsControllerFindAll(authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentsControllerFindOne(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.commentsControllerFindOne(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {string} [authorization] JWT Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentsControllerRemove(id: number, authorization?: string, options?: any): AxiosPromise<void> {
            return localVarFp.commentsControllerRemove(id, authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {UpdateCommentDto} updateCommentDto 
         * @param {string} [authorization] JWT Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentsControllerUpdate(id: number, updateCommentDto: UpdateCommentDto, authorization?: string, options?: any): AxiosPromise<void> {
            return localVarFp.commentsControllerUpdate(id, updateCommentDto, authorization, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CommentsApi - object-oriented interface
 * @export
 * @class CommentsApi
 * @extends {BaseAPI}
 */
export class CommentsApi extends BaseAPI {
    /**
     * 
     * @param {CreateCommentDto} createCommentDto 
     * @param {string} [authorization] JWT Token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentsApi
     */
    public commentsControllerCreate(createCommentDto: CreateCommentDto, authorization?: string, options?: AxiosRequestConfig) {
        return CommentsApiFp(this.configuration).commentsControllerCreate(createCommentDto, authorization, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} [authorization] JWT Token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentsApi
     */
    public commentsControllerFindAll(authorization?: string, options?: AxiosRequestConfig) {
        return CommentsApiFp(this.configuration).commentsControllerFindAll(authorization, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentsApi
     */
    public commentsControllerFindOne(id: number, options?: AxiosRequestConfig) {
        return CommentsApiFp(this.configuration).commentsControllerFindOne(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {string} [authorization] JWT Token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentsApi
     */
    public commentsControllerRemove(id: number, authorization?: string, options?: AxiosRequestConfig) {
        return CommentsApiFp(this.configuration).commentsControllerRemove(id, authorization, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {UpdateCommentDto} updateCommentDto 
     * @param {string} [authorization] JWT Token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentsApi
     */
    public commentsControllerUpdate(id: number, updateCommentDto: UpdateCommentDto, authorization?: string, options?: AxiosRequestConfig) {
        return CommentsApiFp(this.configuration).commentsControllerUpdate(id, updateCommentDto, authorization, options).then((request) => request(this.axios, this.basePath));
    }
}
