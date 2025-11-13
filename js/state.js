import { Config } from './config.js';

export const State = {
    // 时间状态
    ...Config.time.start,
    
    // 角色属性
    hp: 100,
    maxHp: 100,
    mp: 50,
    maxMp: 50,
    exp: 0,
    lv: 0,
    atk: 10,
    def: 5,
    wux: 10,
    qiy: 50,
    root: '五行杂灵根',
    sect: '散修',
    reputation: 0,
    
    // 物品与冷却
    bag: [],
    cd: 0,
    
    // 熵变状态
    entropy: {
        spirit: 0,
        morality: 0,
        order: 0,
        life: 0
    },
    
    // 剧情标记
    flags: {},
    tags: new Set()
};
