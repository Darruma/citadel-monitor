import { EMISSION_TYPE_MAPPING } from "./constants"

export function formatTokenAmount(amount: number, decimals: number): number {
    return amount / Math.pow(10, decimals)
}
export function getEmissionType(hash: string): string {
    if (!(hash in EMISSION_TYPE_MAPPING)) {
        return "None"
    }
    return EMISSION_TYPE_MAPPING[hash]
}