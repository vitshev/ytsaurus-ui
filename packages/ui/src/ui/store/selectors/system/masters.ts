import ypath from '../../../common/thor/ypath';

export interface AddressData {
    host: string;
    physicalHost?: string;
    state: 'online' | 'offline' | 'unknown';
}

export class MasterInstance {
    $attributes: unknown;

    $rowAddress: AddressData;
    $address: string;
    $physicalAddress: string;
    $type: string;
    $cell?: number;
    $state: AddressData['state'];
    state?:
        | 'elections'
        | 'follower_recovery'
        | 'following'
        | 'leader_recovery'
        | 'leading'
        | 'stopped'
        | 'unknown';
    committedVersion?: string;

    constructor(address: AddressData, type: string, cell?: number) {
        this.$rowAddress = address;
        this.$address = address.host;
        this.$physicalAddress = address.physicalHost || address.host;
        this.$state = address.state;
        this.$type = type; // 'primary' | 'secondary' | 'provider'
        this.$cell = cell; // Cell tag
    }
    toObject() {
        return {
            host: this.$address,
            type: this.$type,
            cellTag: this.$cell,
        };
    }
    clone() {
        return new MasterInstance(this.$rowAddress, this.$type, this.$cell);
    }

    update(data: unknown) {
        this.$attributes = data;
        this.state = ypath.getValue(this.$attributes, '/state') || 'unknown';
        this.committedVersion = ypath.getValue(this.$attributes, '/committed_version');
        return this;
    }
}
