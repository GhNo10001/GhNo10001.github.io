export const Config = {
    // 时间配置
    time: {
        start: { y: 1, s: 0, d: 0, h: 6 },
        seasons: ['春', '夏', '秋', '冬'],
        hourName: ['清晨', '上午', '正午', '下午', '傍晚', '夜晚', '深夜']
    },
    
    // 修为与境界配置
    expCurve: (lv) => Math.floor(100 * Math.pow(1.55, lv)),
    realm: ['凡人', '炼气', '筑基', '金丹', '元婴', '化神', '炼虚', '合体', '大乘', '渡劫', '飞升'],
    
    // 妖兽属性
    beastAtk: (tier) => 10 * Math.pow(1.5, tier),
    beastDef: (tier) => 5 * Math.pow(1.4, tier),
    beastExp: (tier) => 10 * tier * tier,
    
    // 事件配置
    eventCD: 2,
    baseChoices: 5,
    
    // 熵变系统配置
    entropy: {
        keys: ['spirit', 'morality', 'order', 'life'],
        names: ['灵脉', '正邪', '秩序', '生机'],
        max: 100,
        min: -100,
        critical: 60
    },
    
    // 物品效果配置
    pillPower: {
        '疗伤丹': { hp: 0.3 },
        '突破丹': { exp: 0.2 },
        '解毒丹': {},
        '淬体丹': { maxHp: 0.1 },
        '毒丹': { hp: -0.2, exp: -0.1 },
        '灵脉影像': {},
        '宗门谢礼': { exp: 50 },
        '祥瑞灵宠': { qiy: 20, life: 10 }
    }
};
