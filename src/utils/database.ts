import { ACCableProps, InverterType, PanelType, SigurantaACBase, SystemTypes } from "./types";

// #region TablouStringsPrices Type and Data
type TablouStringsPrices = {
    "8P": { Positions: "8P"; price: number };
    "12P": { Positions: "12P"; price: number };
};

const TablouPrices: TablouStringsPrices = {
    "8P": { Positions: "8P", price: 60 },
    "12P": { Positions: "12P", price: 60 },
};

export const TablouStrings = {
    name: "Tablou Stringuri",
    quantity: 1,
    price: TablouPrices
}
// #endregion

// #region TablouStrings Type and Data
type TablouSmartMeterPrices = {
    "4P": { Positions: "4P"; price: number };
};

const SmartMeterPrices: TablouSmartMeterPrices = {
    "4P": { Positions: "4P", price: 44 },
};

export const TablouSmartMeter = {
    name: "Tablou Smart Meter",
    quantity: 1,
    price: SmartMeterPrices
}
// #endregion

// #region Siguranta AC Monofazata Type and Data
type SigurantaACMonofazataPreturi = Record<
    "16A" | "20A" | "25A" | "32A" | "40A",
    { Ampere: "16" | "20" | "25" | "32" | "40"; price: number }
>;

const SigurantaACMonofazataPreturi: SigurantaACMonofazataPreturi = {
    "16A": { Ampere: "16", price: 29.5 },
    "20A": { Ampere: "20", price: 26.71 },
    "25A": { Ampere: "25", price: 26.71 },
    "32A": { Ampere: "32", price: 26.71 },
    "40A": { Ampere: "40", price: 26.71 },
};

export const SigurantaACMonofazata: SigurantaACBase = {
    name: "Siguranta AC Monofazata",
    quantity: 1,
    price: SigurantaACMonofazataPreturi,
};
// #endregion

// #region Siguranta AC Trifazata Type and Data
type SigurantaACTrifazataPreturi = Record<
    "10A" | "16A" | "20A" | "25A" | "32A" | "40A" | "50A" | "60A",
    { Ampere: "10" | "16" | "20" | "25" | "32" | "40" | "50" | "60"; price: number }
>;

export const SigurantaACTrifazataPreturi: SigurantaACTrifazataPreturi = {
    "10A": { Ampere: "10", price: 71.79 },
    "16A": { Ampere: "16", price: 63 },
    "20A": { Ampere: "20", price: 68 },
    "25A": { Ampere: "25", price: 77.22 },
    "32A": { Ampere: "32", price: 81.06 },
    "40A": { Ampere: "40", price: 84.03 },
    "50A": { Ampere: "50", price: 151 },
    "60A": { Ampere: "60", price: 166 },
};

export const SigurantaACTrifazata: SigurantaACBase = {
    name: "Siguranta AC Trifazata",
    quantity: 1,
    price: SigurantaACTrifazataPreturi,
};
// #endregion

// #region Photovoltaic Panels Type and Data

export const Panels : PanelType[] = [{
    Name : "Canadian Solar",
    W : 435,
    KG : 22,
    Price : 274.69
},
{
    Name : "Longi",
    W : 425,
    KG : 22,
    Price : 291.73
}]
// #endregion

// #region AcCableBase Data
export const  ACCables: ACCableProps[] = [{
    SystemType: SystemTypes.Mono,
    InverterPower: 3,
    Type: "3x4mm",
    Price: 6.63,
    FirstMaxLength: 57,
    FirstFallbackType: "3x6mm",
    FirstFallbackPrice: 8.3,
    SecondMaxLength: 85,
    SecondFallbackType: "3x10mm",
    SecondFallbackPrice: 19.29,
    MaxLength: 150,
    Length: 0,
    Total: 0
},{
    SystemType: SystemTypes.MonoHybrid,
    InverterPower: 3,
    Type: "3x4mm",
    Price: 6.63,
    FirstMaxLength: 57,
    FirstFallbackType: "3x6mm",
    FirstFallbackPrice: 8.3,
    SecondMaxLength: 85,
    SecondFallbackType: "3x10mm",
    SecondFallbackPrice: 19.29,
    MaxLength: 150,
    Length: 0,Total: 0
},{
    SystemType: SystemTypes.Mono,

    InverterPower: 4,
    Type: "3x4mm",
    Price: 6.63,
    FirstMaxLength: 43,
    FirstFallbackType: "3x6mm",
    FirstFallbackPrice: 8.3,
    SecondMaxLength: 64,
    SecondFallbackType: "3x10mm",
    SecondFallbackPrice: 19.29,
    MaxLength: 85,
    Length: 0,Total: 0
},{
    SystemType: SystemTypes.MonoHybrid,

    InverterPower: 4,
    Type: "3x4mm",
    Price: 6.63,
    FirstMaxLength: 43,
    FirstFallbackType: "3x6mm",
    FirstFallbackPrice: 8.3,
    SecondMaxLength: 64,
    SecondFallbackType: "3x10mm",
    SecondFallbackPrice: 19.29,
    MaxLength: 85,
    Length: 0,Total: 0
},{
    SystemType: SystemTypes.Mono,
    InverterPower: 5,
    Type: "3x4mm",
    Price: 6.63,
    FirstMaxLength: 34,
    FirstFallbackType: "3x6mm",
    FirstFallbackPrice: 8.3,
    SecondMaxLength: 53,
    SecondFallbackType: "3x10mm",
    SecondFallbackPrice: 19.29,
    MaxLength: 85,
    Length: 0,Total: 0
},{
    SystemType: SystemTypes.MonoHybrid,
    InverterPower: 5,
    Type: "3x4mm",
    Price: 6.63,
    FirstMaxLength: 34,
    FirstFallbackType: "3x6mm",
    FirstFallbackPrice: 8.3,
    SecondMaxLength: 53,
    SecondFallbackType: "3x10mm",
    SecondFallbackPrice: 19.29,
    MaxLength: 85,
    Length: 0,Total: 0
},{
    SystemType: SystemTypes.Mono,
    InverterPower: 6,
    Type: "3x6mm",
    Price: 8.30,
    FirstMaxLength: 44,
    FirstFallbackType: "3x10mm",
    FirstFallbackPrice: 19.29,
    SecondMaxLength: 70,
    SecondFallbackType: "3x10mm",
    SecondFallbackPrice: 19.29,
    MaxLength: 70,
    Length: 0,Total: 0
},{
    SystemType: SystemTypes.MonoHybrid,
    InverterPower: 6,
    Type: "3x6mm",
    Price: 8.30,
    FirstMaxLength: 44,
    FirstFallbackType: "3x10mm",
    FirstFallbackPrice: 19.29,
    SecondMaxLength: 70,
    SecondFallbackType: "3x10mm",
    SecondFallbackPrice: 19.29,
    MaxLength: 70,
    Length: 0,Total: 0
},{
    SystemType: SystemTypes.MonoHybrid,
    InverterPower: 8,
    Type: "3x10mm",
    Price: 19.29,
    FirstMaxLength: 53,
    FirstFallbackType: "3x10mm",
    FirstFallbackPrice: 19.29,
    SecondMaxLength: 53,
    SecondFallbackType: "3x10mm",
    SecondFallbackPrice: 19.29,
    MaxLength: 53,
    Length: 0,Total: 0
}]
//#endregion

export const SigurantaFuzibila = {
    name: "Siguranta Fuzibila",
    quantity: 1,
    price: 50
}

export const Descarcator = {
    name: "Descarcator",
    quantity: 1,
    price: 100
}

export const CabluSolar = {
    name: "Cablu Solar 6mm",
    pricePerM: 3.3,
    metersIncluded: 125,
    startingPrice: 412.5
}

export const CabluImpamantare = {
    name: "Cablu Impamantare",
    pricePerM: 3.3,
    metersIncluded: 30,
    startingPrice: 99
}

export const Copex = {
    name: "Copex",
    pricePerM: 6,
    metersIncluded: 30,
    startingPrice: 180
}

export const Melci = {
    name: "Melci",
    pricePerPiece: 3,
    quantity : 25,
    startingPrice: 75
}

export const Obo = {
    name: "Obo",
    pricePerPiece: 2.5,
    quantity : 25,
    startingPrice: 62
}

export const Suruburi = {
    name: "Suruburi",
    pricePerPiece: 0.3,
    quantity : 50,
    startingPrice: 15
}

export const MC4 = {
    name: "MC4",
    pricePerPiece: 5,
    quantity : 8,
    startingPrice: 40
}

export const DosarProsumator = {
    name: "Dosar Prosumator",
    price: 350
}

export const Masina = {
    name: "Masina",
    price: 250
}

export const ManoperaPrinJTS = {
    name: "Manopera",
    price: 380
}

export const ChirieHala = {
    name: "Chirie Hala",
    price: 82.5
}


export const Inverters: InverterType[] = [
    { Brand: "Solax", kW: 3, Type: SystemTypes.Mono, Price: 1925 },
    { Brand: "Solax", kW: 4, Type: SystemTypes.Mono, Price: 2257.2 },
    { Brand: "Solax", kW: 5, Type: SystemTypes.Mono, Price: 2428.8 },
    { Brand: "Solax", kW: 6, Type: SystemTypes.Mono, Price: 2546.5 },
    { Brand: "Solax", kW: 5, Type: SystemTypes.Trifazat, Price: 3190 },
    { Brand: "Solax", kW: 6, Type: SystemTypes.Trifazat, Price: 3547.5 },
    { Brand: "Solax", kW: 8, Type: SystemTypes.Trifazat, Price: 3608 },
    { Brand: "Solax", kW: 10, Type: SystemTypes.Trifazat, Price: 4475 },
    { Brand: "Solax", kW: 15, Type: SystemTypes.Trifazat, Price: 4975 },
    { Brand: "Solax", kW: 20, Type: SystemTypes.Trifazat, Price: 5808 },
    { Brand: "Solax", kW: 25, Type: SystemTypes.Trifazat, Price: 6440.5 },
    { Brand: "Deye", kW: 5, Type: SystemTypes.MonoHybrid, Price: 4650 },
    { Brand: "Deye", kW: 6, Type: SystemTypes.MonoHybrid, Price: 5250 },
    { Brand: "Deye", kW: 8, Type: SystemTypes.MonoHybrid, Price: 7900 },
    { Brand: "Deye", kW: 5, Type: SystemTypes.TrifazatHybrid, Price: 8250 },
    { Brand: "Deye", kW: 6, Type: SystemTypes.TrifazatHybrid, Price: 8500 },
    { Brand: "Deye", kW: 8, Type: SystemTypes.TrifazatHybrid, Price: 8600 },
    { Brand: "Deye", kW: 10, Type: SystemTypes.TrifazatHybrid, Price: 9000 },
    { Brand: "Deye", kW: 12, Type: SystemTypes.TrifazatHybrid, Price: 9500 },
    { Brand: "Huawei", kW: 3, Type: SystemTypes.MonoHybrid, Price: 2185 },
    { Brand: "Huawei", kW: 4, Type: SystemTypes.MonoHybrid, Price: 2765 },
    { Brand: "Huawei", kW: 5, Type: SystemTypes.MonoHybrid, Price: 2445 },
    { Brand: "Huawei", kW: 6, Type: SystemTypes.MonoHybrid, Price: 3790 },
    { Brand: "Huawei", kW: 3, Type: SystemTypes.TrifazatHybrid, Price: 4205 },
    { Brand: "Huawei", kW: 4, Type: SystemTypes.TrifazatHybrid, Price: 4395 },
    { Brand: "Huawei", kW: 5, Type: SystemTypes.TrifazatHybrid, Price: 4640 },
    { Brand: "Huawei", kW: 6, Type: SystemTypes.TrifazatHybrid, Price: 4840 },
    { Brand: "Huawei", kW: 8, Type: SystemTypes.TrifazatHybrid, Price: 6145 },
    { Brand: "Huawei", kW: 10, Type: SystemTypes.TrifazatHybrid, Price: 6840 },
    { Brand: "Huawei", kW: 12, Type: SystemTypes.Trifazat, Price: 4750 },
    { Brand: "Huawei", kW: 15, Type: SystemTypes.Trifazat, Price: 5870 },
    { Brand: "Huawei", kW: 17, Type: SystemTypes.Trifazat, Price: 6280 },
    { Brand: "Huawei", kW: 20, Type: SystemTypes.Trifazat, Price: 6725 },
    { Brand: "Huawei", kW: 25, Type: SystemTypes.Trifazat, Price: 6475 },
    { Brand: "Huawei", kW: 30, Type: SystemTypes.Trifazat, Price: 9965 },
    { Brand: "Huawei", kW: 36, Type: SystemTypes.Trifazat, Price: 10990 },
    { Brand: "Huawei", kW: 40, Type: SystemTypes.Trifazat, Price: 11840 },
    { Brand: "Huawei", kW: 50, Type: SystemTypes.Trifazat, Price: 9950 },
    { Brand: "Huawei", kW: 100, Type: SystemTypes.Trifazat, Price: 18850 },
    { Brand: "Solis", kW: 5, Type: SystemTypes.MonoHybrid, Price: 3450 },
    { Brand: "Solis", kW: 6, Type: SystemTypes.MonoHybrid, Price: 3600 },
    { Brand: "Solis", kW: 8, Type: SystemTypes.MonoHybrid, Price: 5250 },
    { Brand: "Solis", kW: 8, Type: SystemTypes.TrifazatHybrid, Price: 7535 },
    { Brand: "Solis", kW: 10, Type: SystemTypes.TrifazatHybrid, Price: 7780 },
    { Brand: "Solis", kW: 12, Type: SystemTypes.TrifazatHybrid, Price: 8020 },
    { Brand: "Solis", kW: 15, Type: SystemTypes.TrifazatHybrid, Price: 8985 },
    { Brand: "Soplanet", kW: 4, Type: SystemTypes.MonoHybrid, Price: 3645 },
    { Brand: "Soplanet", kW: 5, Type: SystemTypes.MonoHybrid, Price: 3745 },
    { Brand: "Soplanet", kW: 6, Type: SystemTypes.MonoHybrid, Price: 3945 },
    { Brand: "Soplanet", kW: 5, Type: SystemTypes.TrifazatHybrid, Price: 4545 },
    { Brand: "Soplanet", kW: 6, Type: SystemTypes.TrifazatHybrid, Price: 4945 },
    { Brand: "Soplanet", kW: 8, Type: SystemTypes.TrifazatHybrid, Price: 5300 },
    { Brand: "Soplanet", kW: 10, Type: SystemTypes.TrifazatHybrid, Price: 6045 },
    { Brand: "Soplanet", kW: 12, Type: SystemTypes.TrifazatHybrid, Price: 6545 }
];

export const SiguranteAC = [
    { Power: 16, Inverter: 3, InverterType: SystemTypes.Mono, Price: 29.5 },
    { Power: 20, Inverter: 4, InverterType: SystemTypes.Mono, Price: 26.71 },
    { Power: 25, Inverter: 5, InverterType: SystemTypes.Mono, Price: 26.71 },
    { Power: 32, Inverter: 6, InverterType: SystemTypes.Mono, Price: 26.71 },
    { Power: 40, Inverter: 8, InverterType: SystemTypes.Mono, Price: 26.71 },
    { Power: 10, Inverter: 3, InverterType: SystemTypes.Trifazat, Price: 71.79 },
    { Power: 10, Inverter: 4, InverterType: SystemTypes.Trifazat, Price: 71.79 },
    { Power: 10, Inverter: 5, InverterType: SystemTypes.Trifazat, Price: 71.79 },
    { Power: 16, Inverter: 6, InverterType: SystemTypes.Trifazat, Price: 63.00 },
    { Power: 16, Inverter: 8, InverterType: SystemTypes.Trifazat, Price: 63.00 },
    { Power: 20, Inverter: 10, InverterType: SystemTypes.Trifazat, Price: 68.00 },
    { Power: 25, Inverter: 12, InverterType: SystemTypes.Trifazat, Price: 77.22 },
    { Power: 32, Inverter: 15, InverterType: SystemTypes.Trifazat, Price: 81.06 },
    { Power: 40, Inverter: 20, InverterType: SystemTypes.Trifazat, Price: 84.03 },
    { Power: 50, Inverter: 25, InverterType: SystemTypes.Trifazat, Price: 151.00 },
    { Power: 63, Inverter: 30, InverterType: SystemTypes.Trifazat, Price: 166.00 },
]

export const batteries = [
    {
      model: "V-Tac 9,6 kWh",
      price: 6835.00,
    },
    {
      model: "V-Tac 5,2 kWh Rack Mount",
      price: 4225.00,
    },
    {
      model: "V-Tac 5,2 kWh Wall Mount",
      price: 4485.00,
    },
    {
      model: "Pytes 5,12 kWh",
      price: 4600.00,
    },
    {
      model: "Deye 6.2 kWh",
      price: 7000.00,
    },
    {
      model: "Dahai 5,1 kWh",
      price: 2300.00,
    },
    {
      model: "Sunplus 10,37",
      price: 6385.00,
    },
    {
      model: "Felicity Solar 15 kWh",
      price: 9972.00,
    },
  ];