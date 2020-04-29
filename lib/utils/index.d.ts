import type { Networks } from '../tsc/types';
import type { TransactionObject } from '../tsc/web3/types';
import { PromiEvent, TransactionReceipt, TransactionConfig } from 'web3-core';
import { TransactionRevertInstructionError } from 'web3-core-helpers';
import { BlockTransactionString } from 'web3-eth';
import Web3 from 'web3';
import BN from 'bn.js';
import Debug from 'debug';
import { AccountId, Signature, Hash } from '../types';
import { ChannelStatus } from '../types/channel';
export declare function isPartyA(self: AccountId, counterparty: AccountId): boolean;
export declare function getParties(self: AccountId, counterparty: AccountId): [AccountId, AccountId];
export declare function getId(self: AccountId, counterparty: AccountId): Promise<Hash>;
export declare function privKeyToPubKey(privKey: Uint8Array): Promise<Uint8Array>;
export declare function pubKeyToAccountId(pubKey: Uint8Array): Promise<AccountId>;
export declare function hash(msg: Uint8Array): Promise<Hash>;
export declare function sign(msg: Uint8Array, privKey: Uint8Array, pubKey?: Uint8Array, arr?: {
    bytes: ArrayBuffer;
    offset: number;
}): Promise<Signature>;
export declare function signer(msg: Uint8Array, signature: Signature): Promise<Uint8Array>;
export declare function verify(msg: Uint8Array, signature: Signature, pubKey: Uint8Array): Promise<boolean>;
export declare function convertUnit(amount: BN, sourceUnit: string, targetUnit: 'eth' | 'wei'): BN;
export declare function waitForConfirmation<T extends PromiEvent<any>>(event: T): Promise<TransactionReceipt>;
export declare function advanceBlockAtTime(web3: Web3, time: number): Promise<string>;
export declare function wait(ms: number): Promise<unknown>;
export declare function waitFor({ web3, network, getCurrentBlock, timestamp, }: {
    web3: Web3;
    network: Networks;
    getCurrentBlock: () => Promise<BlockTransactionString>;
    timestamp?: number;
}): Promise<void>;
export declare function getNetworkId(web3: Web3): Promise<Networks>;
export declare function stateCountToStatus(stateCount: number): ChannelStatus;
export declare function TransactionSigner(web3: Web3, privKey: Uint8Array): <T extends any>(txObject: TransactionObject<T>, txConfig: TransactionConfig) => Promise<{
    send: () => PromiEvent<TransactionRevertInstructionError | TransactionReceipt>;
    transactionHash: string;
}>;
export declare function Log(suffixes?: string[]): Debug.Debugger;
