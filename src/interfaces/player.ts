// Define the player interface
export interface Player {
    UID: string;
    SE: number;
    SL: number;
    IE: number;
    IL: number;
    Type: string;
    Health: number;
    Damage: number;
    Timer: number;
    IsBlocking:boolean
}

export const BaseStatsPlayer : Player = {
    UID: "",
    SE: 0,
    SL: 0,
    IE: 0,
    IL: 0,
    Type: "",
    Health: 5,
    Damage: 1,
    Timer: 5,
    IsBlocking:false
}