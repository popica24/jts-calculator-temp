export enum SystemTypes {
    Mono = "Monofazat",
    Trifazat = "Trifazat",
    MonoHybrid = "Monofazat Hybrid",
    TrifazatHybrid = "Trifazat Hybrid",
    OffGrid = "Off-grid"
}

export type InverterType = {
    Brand: string,
    kW: number,
    Type: SystemTypes,
    Price: number
};

export type SigurantaACBase = {
    name: string;
    quantity: number;
    price: Record<string, { Ampere: string; price: number }>;
};

export type PanelType = {
    Name: string;
    W: number;
    KG: number;
    Price: number
}

export type StringPanel = {
    Position : string;
    Price: number
}

export type SmartMeterPanel = {
    Position : string;
    Price: number
}

export type ACCableProps = {
    SystemType: SystemTypes

    InverterPower:number;
    Type: string;
    Price: number
    
    FirstMaxLength : number;
    FirstFallbackType: string;
    FirstFallbackPrice: number;

    SecondMaxLength: number;
    SecondFallbackType: string;
    SecondFallbackPrice: number

    MaxLength: number;

    Length: number

    Total?: number
}

export type SolarCableProps = {
    Length: number;
    PricePerM : 3.3;
    Total: number
}

export type GroundingCableProps = {
    Length: number;
    PricePerM : 3.3;
    Total: number
}

export type CopexCableProps = {
    Length: number;
    PricePerM : 6;
    Total: number
}

export type WoodScrewsProps = {
    Quantity: number;
    PricePerPiece : 3;
    Total: number
}

export type OboProps = {
    Quantity: number;
    PricePerPiece : 2.5;
    Total: number
}

export type ScrewProps = {
    Quantity: number;
    PricePerPiece : 2.5;
    Total: number
}

export type MC4Props = {
    Quantity: number;
    PricePerPiece : 2.5;
    Total: number
}

export type AluminiumProfileProps = {
    Quantity: number;
    PricePerPiece : 65;
    Total: number
}

export type FusibleFuseProps = {
    Quantity: number;
    PricePerPiece : 65;
    Total: number
}

export type SurgesProps = {
    Quantity: number;
    PricePerPiece : 65;
    Total: number
}

export type CableDuctProps = {
    Quantity: number;
    PricePerPiece : 20;
    Total: number
}

export type CarProps = {
    Total: number;
    PricePerPiece: 250
}

export type GasProps = {
    Liters: number;
    Total: number,
    PricePerLiter: 7.5,
}