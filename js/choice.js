import { State } from './state.js';
import { Config } from './config.js';
import { Render } from './render.js';
import { Event } from './event.js';
import { Bag } from './bag.js';

export const Choice = {
  dailyChoices(){
    return [
      {txt:'闭关修炼',req:{mp:10},eff:{exp:Math.floor(Math.random()*11)+15,mp:-10}},
      {txt:'四周探索',eff:{},act:'explore'},
      {txt:'寻找妖兽',eff:{},act:'hunt'},
      {txt:'前往坊市',eff:{},act:'market'},
      {txt:'占卜吉凶',req:{mp:5},eff:{qiy:Math.floor(Math.random()*16)-5,mp:-5}}
    ];
  },
  handle(c,ev){
    if(c.act==='explore'){Render.log('你探查到四周灵气波动...');State.exp+=Math.floor(Math.random()*11)+5;}
    if(c.act==='hunt'){const tier=Math.floor(Math.random()*3)+1;import('./combat.js').then(m=>m.Combat.fight(tier));}
    if(c.act==='market'){Render.log('坊市热闹，你交易了一番...');State.bag.push('随机道具');State.exp+=Math.floor(Math.random()*6)+5;}
    if(c.act==='protectPet'){const tier=Math.floor(Math.random()*3)+3;import('./combat.js').then(m=>m.Combat.fight(tier,()=>{State.bag.push('祥瑞灵宠');}));}
    if(c.eff)Bag.applyEff(c.eff);
    State.cd=Config.eventCD;
    setTimeout(()=>Event.create(),100);
  }
};
