import { KeyOptions } from "./Key";

/**
 * Types of lattice crypto algorithm actions
 */
export enum LatticeTypes {
    SHARED_SECRET = 'SHARED_SECRET',
    SIGN_AND_VERIFY = 'SIGN_AND_VERIFY',
    ENCRYPT_DECRYPT = 'ENCRYPT_DECRYPT'
}

/**
 * Actions to perform
 */
export enum Action {
    ENCRYPT = 'encrypt',
    DECRYPT = 'decrypt',
}

/**
 * Settings for the algorithm to use for cryptographic actions
 */
export interface AlgorithmSettings {
    algorithm: Algorithm,
    algorithmVariant: AlgorithmVariants,
    keyPairOptions: KeyOptions
}


/**
 * This contains the algorithm variants for the supported types.
 */
export type AlgorithmVariants = NewHopeVariant;

/**
 * Supported types for New Hope algorithm
 */
export enum NewHopeVariant {
    NEW_HOPE_512 = 'NewHope-512-CCA', // TODO
    NEW_HOPE_1024 = 'NewHope-1024-CCA'
}