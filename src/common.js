// let ENVIRONMENT = 'ONLINE'
let ENVIRONMENT = 'TEST'
// let ENVIRONMENT = 'LICHEN'
/**
 *
 * @type {{API_HOST: string, STORAGE_NAME: string, TEST_FLAG: boolean, STORAGE_TOKEN: string, ERROR_MSG_COMMON: string, ENVIRONMENT: string, TOKEN_NAME: string, STORAGE_TOKEN_ENCRYPT: string, API_PATH: string}}
 */
let obj = {
    ENVIRONMENT: ENVIRONMENT,
    /** 服务器相关 */

    API_HOST: ENVIRONMENT == 'ONLINE' ? '' :
        (ENVIRONMENT == 'TEST' ? '' : ''),

    API_PATH: 'or',

    // HTTP_SUCCESS: '000000',
    // CODE_ID: '1274518339', // 统计代码ID
    // IMG_HOST: '',
    /** 是否测试模式 */
    TEST_FLAG: false,
    /** 存储相关 */
    STORAGE_TOKEN: ENVIRONMENT == 'ONLINE' ? 'elsid' :
        (ENVIRONMENT == 'SANDBOX' ? 'elsid' : 'elsid'),
    STORAGE_NAME: 'name',
    TOKEN_NAME: 'elsid',
    STORAGE_TOKEN_ENCRYPT: 'dttokenencrypt',
    /** 错误提示 */
    ERROR_MSG_COMMON: '系统异常',
    /**用户不操作时间**/
    logoutTime: 300,
}

export default obj
