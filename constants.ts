export const ETHERSCAN_URL = "https://etherscan.io";
export const isDevEnvironment = process && process.env.NODE_ENV === "development";
export const TOKEN_DECIMALS = 18;
export const EMISSION_TYPE_MAPPING = {
    "0xf77bf06a76db4cf3e47e00a798e7dfb217e3fd61b63ce0ec4c447f3648d86404": "Treasury Yield",
    "0x60b54c1986b43275418006baba637cb29964609f76738f9d0c47dbd9c076bf11": "Funding Yield"
}