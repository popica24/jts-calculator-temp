import { InverterType, SigurantaACBase, SystemTypes } from "./types"

export type SystemInputs = {
    SystemType: SystemTypes,
    Inverter: string,
    SigurantaAC : SigurantaACBase
}