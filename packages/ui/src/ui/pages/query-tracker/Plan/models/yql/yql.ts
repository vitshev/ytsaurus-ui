/**
 * This file was auto-generated by openapi-typescript.
 * npx openapi-typescript https://yql-api.yandex-team.ru/api/docs/swagger.json --output yql.ts
 */
import {yqlModel} from '../shared';

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface definitions {
    Attachment: {inline?: boolean};
    ClusterDto: {
        name?: string;
        remoteName?: string;
        type?:
            | 'UNKNOWN'
            | 'YT'
            | 'YTORM'
            | 'KIKIMR'
            | 'KIKIMR_MVP'
            | 'CLICKHOUSE'
            | 'RTMR'
            | 'STATFACE'
            | 'CHYT'
            | 'POSTGRESQL'
            | 'MYSQL'
            | 'PQ'
            | 'YDB';
    };
    ClusterSetDto: {
        clusters?: definitions['ClusterDto'][];
        issues?: definitions['OperationIssueDto'][];
    };
    OperationIssueDto: {
        file?: string;
        row?: number;
        column?: number;
        message?: string;
        code?: number;
        severity?: string;
        issues?: definitions['OperationIssueDto'][];
    };
    AclDto: {
        canRead?: string[];
        canUpdate?: string[];
        canPrivateExecute?: string[];
    };
    Page: {current?: number; count?: number; prev?: number; next?: number};
    PagedResult: {
        result?: {[key: string]: any}[];
        page?: definitions['Page'];
    };
    PagedResultQueryDto: {
        result?: definitions['QueryDto'][];
        page?: definitions['Page'];
    };
    QueryDataDto: {
        content?: string;
        type?:
            | 'UNKNOWN'
            | 'SQL'
            | 'YQL'
            | 'MKQL'
            | 'CLICKHOUSE'
            | 'UDF_META'
            | 'SQLv1'
            | 'LIBRARY_META'
            | 'YT_QL'
            | 'YTORM_QL'
            | 'PG';
        files?: definitions['QueryFileDto'][];
        attributes?: {[key: string]: string};
        parameters?: {[key: string]: string};
        clusterType?:
            | 'UNKNOWN'
            | 'YT'
            | 'YTORM'
            | 'KIKIMR'
            | 'KIKIMR_MVP'
            | 'CLICKHOUSE'
            | 'RTMR'
            | 'STATFACE'
            | 'CHYT'
            | 'POSTGRESQL'
            | 'MYSQL'
            | 'PQ'
            | 'YDB';
        cluster?: string;
        database?: string;
    };
    QueryDto: {
        id?: string;
        title?: string;
        data?: definitions['QueryDataDto'];
        username?: string;
        initialOperationId?: string;
        tags?: string[];
        createdAt?: string;
        updatedAt?: string;
        version?: number;
        acl?: definitions['AclDto'];
        score?: number;
        projectId?: string;
        updatedBy?: string;
    };
    QueryFileDto: {
        name?: string;
        type?: 'CONTENT' | 'URL' | 'PATH';
        data?: string;
        tokenName?: string;
    };
    OperationDto: {
        id?: string;
        queryId?: string;
        queryTitle?: string;
        title?: string;
        queryTags?: string[];
        queryData?: definitions['QueryDataDto'];
        queryType?:
            | 'UNKNOWN'
            | 'SQL'
            | 'YQL'
            | 'MKQL'
            | 'CLICKHOUSE'
            | 'UDF_META'
            | 'SQLv1'
            | 'LIBRARY_META'
            | 'YT_QL'
            | 'YTORM_QL'
            | 'PG';
        username?: string;
        execMode?:
            | 'UNKNOWN'
            | 'SAVE'
            | 'PARSE'
            | 'COMPILE'
            | 'VALIDATE'
            | 'OPTIMIZE'
            | 'RUN'
            | 'EXTRACT_PARAMS_META';
        notifyBy?: ('EMAIL' | 'JABBER' | 'SMS' | 'TELEGRAM')[];
        createdAt?: string;
        createdBy?: string;
        updatedAt?: string;
        acl?: definitions['AclDto'];
        status?:
            | 'IDLE'
            | 'PENDING'
            | 'RUNNING'
            | 'COMPLETED'
            | 'ABORTING'
            | 'ABORTED'
            | 'ERROR'
            | 'UNKNOWN';
        version?: number;
        workerId?: string;
        workerVersion?: string;
        workerPid?: string;
        workerHost?: string;
        externalQueryIds?: string[];
        clusterId?: string;
        projectId?: string;
        clusterType?:
            | 'UNKNOWN'
            | 'YT'
            | 'YTORM'
            | 'KIKIMR'
            | 'KIKIMR_MVP'
            | 'CLICKHOUSE'
            | 'RTMR'
            | 'STATFACE'
            | 'CHYT'
            | 'POSTGRESQL'
            | 'MYSQL'
            | 'PQ'
            | 'YDB';
        cluster?: string;
    };
    ObjectActionRequestDto: {
        action?: 'PARSE' | 'COMPILE' | 'VALIDATE' | 'OPTIMIZE' | 'RUN';
        notifyBy?: ('EMAIL' | 'JABBER' | 'SMS' | 'TELEGRAM')[];
        useYqlTokenAsYtToken?: boolean;
        useYqlTokenAsStatToken?: boolean;
        title?: string;
        parameters?: {[key: string]: string};
    };
    PagedResultOperationDto: {
        result?: definitions['OperationDto'][];
        page?: definitions['Page'];
    };
    QueryMetadataDto: {
        id?: string;
        title?: string;
        username?: string;
        projectId?: string;
    };
    Entry: {value?: {[key: string]: any}; key?: {[key: string]: any}};
    EntryStringInstant: {[key: string]: string}; // {value?: string; key?: string};
    NodeProgress: {
        category?: string;
        remoteId?: string;
        state?: 'Started' | 'InProgress' | 'Finished' | 'Failed' | 'Aborted';
        startedAt?: string;
        finishedAt?: string;
        completed?: number;
        running?: number;
        total?: number;
        stages?: definitions['EntryStringInstant'][];
    };
    OperationErrorDto: {
        file?: string;
        row?: number;
        column?: number;
        message?: string;
    };
    OperationResultDto: {
        id?: string;
        status?:
            | 'IDLE'
            | 'PENDING'
            | 'RUNNING'
            | 'COMPLETED'
            | 'ABORTING'
            | 'ABORTED'
            | 'ERROR'
            | 'UNKNOWN';
        data?: {[key: string]: any};
        ast?: string;
        plan?: {[key: string]: any};
        errors?: definitions['OperationErrorDto'][];
        issues?: definitions['OperationIssueDto'][];
        progress?: {[key: string]: definitions['NodeProgress']};
        updatedAt?: string;
        version?: number;
        filled?: 'PARTIALLY' | 'COMPLETELY';
        statistics?: {[key: string]: any};
    };
    DiscoverTablesRequestDto: {parameters?: {[key: string]: string}};
    DecoderResult: {success?: boolean; failure?: boolean; finished?: boolean};
    HttpResponse: {
        status?: definitions['HttpResponseStatus'];
        protocolVersion?: definitions['HttpVersion'];
        decoderResult?: definitions['DecoderResult'];
    };
    HttpResponseStatus: {[key: string]: any};
    HttpVersion: {keepAliveDefault?: boolean};
    TableField: {
        name?: string;
        clusterSortOrder?: number;
        ascending?: boolean;
        type?: yqlModel.value.TypeArray;
    };
    TableViewMetadata: {
        cluster?: string;
        name?: string;
        view?: string;
        sql?: string;
        fields?: definitions['TableField'][];
        rowType?: {[key: string]: any};
    };
    PathDto: {pathPrefix?: string; items?: definitions['PathItem'][]};
    PathItem: {
        type?:
            | 'FOLDER'
            | 'TABLE'
            | 'FILE'
            | 'DOCUMENT'
            | 'LINK'
            | 'PQ_TOPIC'
            | 'VIEW'
            | 'UNKNOWN'
            | 'DATABASE';
        name?: string;
        hasSchema?: boolean;
        targetType?: string;
    };
    ClusterObjectDto: {
        path?: string;
        type?:
            | 'FOLDER'
            | 'TABLE'
            | 'FILE'
            | 'DOCUMENT'
            | 'LINK'
            | 'PQ_TOPIC'
            | 'VIEW'
            | 'UNKNOWN'
            | 'DATABASE';
    };
    TableDataRequestDto: {
        cluster?: string;
        path?: string;
        view?: string;
        offset?: number;
        limit?: number;
        columns?: string[];
        filters?: string;
        inferScheme?: boolean;
        inferSchema?: number;
        forceInferSchema?: number;
        ignoreYamrDsv?: boolean;
        tokenId?: string;
        useYqlTokenAsYtToken?: boolean;
        useYqlTokenAsStatToken?: boolean;
        columnsPreset?: boolean;
        ytExternalTx?: string;
    };
    TableMetadata: {
        cluster?: string;
        name?: string;
        view?: string;
        sql?: string;
        fields?: definitions['TableField'][];
        doesExist?: boolean;
        uniqueKeys?: boolean;
        canWrite?: boolean;
        recordsCount?: number;
        dataSize?: number;
        chunkCount?: number;
        hasSchema?: boolean;
        views?: string[];
        sorted?: boolean;
        dynamic?: boolean;
        realData?: boolean;
        empty?: boolean;
        modifyTime?: string;
        rowType?: {[key: string]: any};
    };
    AdminDto: {
        id?: number;
        login?: string;
        permissions?: (
            | 'ADMINS'
            | 'USER_PROFILES'
            | 'TUTORIALS'
            | 'BANS'
            | 'OPERATIONS'
            | 'QUERIES'
            | 'CODE_REGISTRY'
            | 'GATEWAYS'
            | 'OPERATIONS_CONTROL'
        )[];
    };
    PagedResultAdminDto: {
        result?: definitions['AdminDto'][];
        page?: definitions['Page'];
    };
    CodePackageDto: {
        name?: string;
        version?: number;
        updatedAt?: string;
        updatedBy?: string;
        declaredModules?: string[];
        releaseSlotId?: number;
        resourceSlots?: definitions['CodeResourceSlotDto'][];
    };
    CodeProjectDto: {
        name?: string;
        description?: string;
        version?: number;
        updatedAt?: string;
        updatedBy?: string;
        packages?: definitions['CodePackageDto'][];
    };
    CodeResourceSlotDto: {resourceId?: string};
    CodeProjectUpdateRequestDto: {
        version?: number;
        name?: string;
        description?: string;
    };
    CodeResourceDto: {
        id?: string;
        updatedAt?: string;
        updatedBy?: string;
        type?: 'EXTRACT_UDF_META_BY_URL' | 'UPLOAD_CONTENT' | 'CUSTOM_QUERY' | 'SQL_LIBRARY';
        projectName?: string;
        packageName?: string;
        resolveState?: 'INITIAL' | 'SUCCESS' | 'ERROR';
        resolveOperationId?: string;
        issues?: definitions['OperationIssueDto'][];
        inputContent?: string;
        inputFiles?: {[key: string]: string};
        outputType?: 'UNKNOWN' | 'UDF_META' | 'CONTENT' | 'OPERATION_RESULT' | 'SQL_LIBRARY_META';
        outputFormat?: 'UNKNOWN' | 'UTF8_TEXT' | 'JSON';
        output?: string;
        modules?: string[];
    };
    CodeResourceUploadRequestDto: {
        packageName?: string;
        projectName?: string;
        targetSlotId?: number;
        type?: 'EXTRACT_UDF_META_BY_URL' | 'UPLOAD_CONTENT' | 'CUSTOM_QUERY' | 'SQL_LIBRARY';
        content?: string;
        files?: {[key: string]: string};
    };
    Optional: {empty?: boolean; present?: boolean};
    OptionalCodeResourceDto: {empty?: boolean; present?: boolean};
    CodePackageBatchReleaseRequestDto: {projects?: {[key: string]: object}};
    CodePackageUpdateRequestDto: {
        projectName?: string;
        packageName?: string;
        version?: number;
        declaredModules?: string[];
        releaseSlotId?: number;
    };
    OptionalCodePackageDto: {empty?: boolean; present?: boolean};
    AuthTokenDto: {
        id?: string;
        value?: string;
        clusterType?:
            | 'UNKNOWN'
            | 'YT'
            | 'YTORM'
            | 'KIKIMR'
            | 'KIKIMR_MVP'
            | 'CLICKHOUSE'
            | 'RTMR'
            | 'STATFACE'
            | 'CHYT'
            | 'POSTGRESQL'
            | 'MYSQL'
            | 'PQ'
            | 'YDB';
    };
    ProjectDto: {
        id: string;
        name: string;
        abcServiceId: number;
        status: 'ACTIVE' | 'ARCHIVED';
        created: string;
        type: 'PERSONAL' | 'REGULAR';
        role: 'VIEWER' | 'EDITOR' | 'ADMIN';
        username: string;
        projectServiceSlug: string;
    };
    UserProfileDto: {
        id?: number;
        login?: string;
        authTokens?: definitions['AuthTokenDto'][];
        notifyBy?: ('EMAIL' | 'JABBER' | 'SMS' | 'TELEGRAM')[];
        hasPublicOperationsOnly?: boolean;
    };
    PagedResultResourceDto: {
        result?: definitions['ResourceDto'][];
        page?: definitions['Page'];
    };
    ResourceDto: {
        id?: string;
        updatedAt?: string;
        url?: string;
        resolveOperationId?: string;
        result?: definitions['UdfInfoDto'];
        issues?: definitions['OperationIssueDto'][];
        version?: number;
    };
    UdfFunctionArgInfoDto: {name?: string; doc?: string; type?: string};
    UdfFunctionInfoDto: {
        name?: string;
        doc?: string;
        argCount?: number;
        optionalArgCount?: number;
        isTypeAwareness?: boolean;
        callableType?: string;
        runConfigType?: string;
        returnType?: string;
        returnDoc?: string;
        args?: definitions['UdfFunctionArgInfoDto'][];
    };
    UdfInfoDto: {
        size?: number;
        md5?: string;
        modules?: definitions['UdfModuleInfoDto'][];
    };
    UdfModuleInfoDto: {
        name?: string;
        doc?: string;
        functions?: definitions['UdfFunctionInfoDto'][];
    };
    ResourceUploadDto: {name?: string; url?: string};
    ColumnsPreset: {
        id?: string;
        owner?: string;
        columns?: string;
        preset?: string[];
    };
    PagedResultColumnsPreset: {
        result?: definitions['ColumnsPreset'][];
        page?: definitions['Page'];
    };
    SaveColumnsPresetDto: {columns?: string[]; preset?: string[]};
    PagedResultProjectDto: {
        result?: definitions['ProjectDto'][];
        page?: definitions['Page'];
    };
    AddProjectRequest: {name: string; abcServiceId: number};
    UpdateProjectRequest: {
        name: string;
        abcServiceId: number;
        status: 'ACTIVE' | 'ARCHIVED' | 'NEW';
    };
    AddUserToProjectRequest: {role: 'VIEWER' | 'EDITOR' | 'ADMIN'};
    PagedResultProjectRelationDto: {
        result?: definitions['ProjectRelationDto'][];
        page?: definitions['Page'];
    };
    ProjectRelationDto: {
        relationId: string;
        relationType: 'USER';
        role: 'VIEWER' | 'EDITOR' | 'ADMIN';
    };
    BanDto: {
        id?: number;
        login?: string;
        period?: 'HOUR' | 'DAY' | 'WEEK' | 'MONTH' | 'FOREVER';
        startedAt?: string;
        bannedBy?: string;
        reason?: string;
    };
    PagedResultBanDto: {
        result?: definitions['BanDto'][];
        page?: definitions['Page'];
    };
    ProcessOperationDto: {
        content?: string;
        type?:
            | 'UNKNOWN'
            | 'SQL'
            | 'YQL'
            | 'MKQL'
            | 'CLICKHOUSE'
            | 'UDF_META'
            | 'SQLv1'
            | 'LIBRARY_META'
            | 'YT_QL'
            | 'YTORM_QL'
            | 'PG';
        files?: definitions['QueryFileDto'][];
        attributes?: {[key: string]: object | string};
        parameters?: {[key: string]: string};
        clusterType?:
            | 'UNKNOWN'
            | 'YT'
            | 'YTORM'
            | 'KIKIMR'
            | 'KIKIMR_MVP'
            | 'CLICKHOUSE'
            | 'RTMR'
            | 'STATFACE'
            | 'CHYT'
            | 'POSTGRESQL'
            | 'MYSQL'
            | 'PQ'
            | 'YDB';
        cluster?: string;
        database?: string;
        action?:
            | 'SAVE'
            | 'PARSE'
            | 'COMPILE'
            | 'VALIDATE'
            | 'OPTIMIZE'
            | 'RUN'
            | 'ABORT'
            | 'STOP'
            | 'RESUME'
            | 'EXTRACT_PARAMS_META';
        notifyBy?: ('EMAIL' | 'JABBER' | 'SMS' | 'TELEGRAM')[];
        title?: string;
        queryId?: string;
        queryTitle?: string;
        acl?: definitions['AclDto'];
        useYqlTokenAsYtToken?: boolean;
        useYqlTokenAsStatToken?: boolean;
        projectId?: string;
    };
    UpdateOperationRequestDto: {queryTitle: string};
    OperationActionDto: {
        action?:
            | 'SAVE'
            | 'PARSE'
            | 'COMPILE'
            | 'VALIDATE'
            | 'OPTIMIZE'
            | 'RUN'
            | 'ABORT'
            | 'STOP'
            | 'RESUME'
            | 'EXTRACT_PARAMS_META';
        useYqlTokenAsYtToken?: boolean;
        useYqlTokenAsStatToken?: boolean;
    };
    OperationMetadataDto: {
        id?: string;
        status?:
            | 'IDLE'
            | 'PENDING'
            | 'RUNNING'
            | 'COMPLETED'
            | 'ABORTING'
            | 'ABORTED'
            | 'ERROR'
            | 'UNKNOWN';
        execMode?:
            | 'UNKNOWN'
            | 'SAVE'
            | 'PARSE'
            | 'COMPILE'
            | 'VALIDATE'
            | 'OPTIMIZE'
            | 'RUN'
            | 'EXTRACT_PARAMS_META';
        queryTitle?: string;
        username?: string;
    };
    PagedResultTutorialDto: {
        result?: definitions['TutorialDto'][];
        page?: definitions['Page'];
    };
    TutorialDto: {
        id?: string;
        title?: string;
        category?: string;
        data?: definitions['QueryDataDto'];
    };
    PagedResultUserProfileDto: {
        result?: definitions['UserProfileDto'][];
        page?: definitions['Page'];
    };
}