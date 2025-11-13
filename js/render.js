import { State } from './state.js';
import { Config } from './config.js';
export const Render = {
  init(){
    this.roleCard();
    this.entropyCard();
    this.bagCard();
    this.logCard();
    this.update();
  },
  roleCard(){
    const card=document.getElementById('roleCard');
    card.innerHTML=`<div class="card-title">角色</div>
      <div class="stat"><span>境界</span><span class="stat-val" id="level">凡人</span></div>
      <div class="stat"><span>生命</span><span class="stat-val" id="hp">100/100</span></div>
      <div class="bar"><div class="bar-inner" id="hpBar" style="width:100%"></div></div>
      <div class="stat"><span>灵力</span><span class="stat-val" id="mp">50/50</span></div>
      <div class="bar"><div class="bar-inner" id="mpBar" style="width:100%"></div></div>
      <div class="stat"><span>修为</span><span class="stat-val" id="exp">0</span></div>
      <div class="stat"><span>攻击</span><span class="stat-val" id="atk">10</span></div>
      <div class="stat"><span>防御</span><span class="stat-val" id="def">5</span></div>
      <div class="stat"><span>悟性</span><span class="stat-val" id="wux">10</span></div>
      <div class="stat"><span>气运</span><span class="stat-val" id="qiy">50</span></div>
      <div class="stat"><span>灵根</span><span class="stat-val" id="root">五行杂灵根</span></div>
      <div class="stat"><span>宗门</span><span class="stat-val" id="sect">散修</span></div>`;
  },
  entropyCard(){
    const card=document.getElementById('entropyCard');
    card.innerHTML=`<div class="card-title">世界熵变</div>
      <div class="stat"><span>灵脉</span><span class="stat-val" id="spirit">0</span></div>
      <div class="stat"><span>正邪</span><span class="stat-val" id="morality">0</span></div>
      <div class="stat"><span>秩序</span><span class="stat-val" id="order">0</span></div>
      <div class="stat"><span>生机</span><span class="stat-val" id="life">0</span></div>`;
  },
  bagCard(){
    const card=document.getElementById('bagCard');
    card.innerHTML=`<div class="card-title">背包</div><div id="bag">空</div>`;
  },
  logCard(){
    const card=document.getElementById('logCard');
    card.innerHTML=`<div class="card-title">事件日志</div><div class="log" id="log"><span>你穿越到了修仙世界...</span></div>`;
  },
  update(){
    ui('level',Config.realm[State.lv]);
    ui('hp',`${State.hp}/${State.maxHp}`);this.bar('hpBar',State.hp/State.maxHp);
    ui('mp',`${State.mp}/${State.maxMp}`);this.bar('mpBar',State.mp/State.maxMp);
    ui('exp',State.exp);ui('atk',State.atk);ui('def',State.def);ui('wux',State.wux);ui('qiy',State.qiy);
    ui('root',State.root);ui('sect',State.sect);
    for(const k of Config.entropy.keys)ui(k,State.entropy[k]);
    this.renderBag();
  },
  bar(id,p){document.getElementById(id).style.width=(p*100).toFixed(1)+'%';},
  renderBag(){
    const b=document.getElementById('bag');
    if(!State.bag.length){b.textContent='空';return;}
    b.innerHTML='';
    State.bag.forEach((it,idx)=>{
      const span=document.createElement('span');span.textContent=it+' ';
      const use=document.createElement('span');use.className='item-use';use.textContent='使用';
      use.onclick=()=>Bag.useItem(it,idx);span.appendChild(use);b.appendChild(span);
    });
  },
  log(txt,cls=''){
    const l=document.getElementById('log');l.insertAdjacentHTML('beforeend',`<span class="${cls}">${txt}</span>`);l.scrollTop=l.scrollHeight;
  }
};
