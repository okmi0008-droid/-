export type Collection={id:string;name:string};
export const DEFAULT_COLLECTIONS:Collection[]=[{id:'all',name:'全部收藏'},{id:'poster',name:'海报'},{id:'people',name:'人物'},{id:'3d',name:'3D'},{id:'background',name:'背景'},{id:'ui',name:'UI'}];
export const DEFAULT_TAGS=['新中式','国潮','高级感','极简','金色','夜景'];
const KEY='mh-collections',TAG_KEY='mh-tags';
export function getCollections():Collection[]{try{return JSON.parse(localStorage.getItem(KEY)||'null')||DEFAULT_COLLECTIONS}catch{return DEFAULT_COLLECTIONS}}
export function saveCollections(v:Collection[]){localStorage.setItem(KEY,JSON.stringify(v))}
export function addCollection(name:string){const n=name.trim();if(!n)return getCollections();const v=getCollections();if(!v.some(x=>x.name===n))v.push({id:crypto.randomUUID(),name:n});saveCollections(v);return v}
export function removeCollection(id:string){if(id==='all')return getCollections();const v=getCollections().filter(x=>x.id!==id);saveCollections(v);return v}
export function getTags():string[]{try{return JSON.parse(localStorage.getItem(TAG_KEY)||'null')||DEFAULT_TAGS}catch{return DEFAULT_TAGS}}
export function saveTags(v:string[]){localStorage.setItem(TAG_KEY,JSON.stringify(v))}
export function addTag(name:string){const n=name.trim();const v=getTags();if(n&&!v.includes(n))v.push(n);saveTags(v);return v}
