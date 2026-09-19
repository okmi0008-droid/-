export type ImageItem={id:string;title:string;image:string;thumbnail:string;source:string;page:string;license?:string;author?:string};

export async function searchOpenverse(query:string,page=1):Promise<ImageItem[]>{
  const endpoint=`https://api.openverse.org/v1/images/?q=${encodeURIComponent(query)}&page=${page}&page_size=30`;
  const res=await fetch(endpoint);
  if(!res.ok) throw new Error(`Openverse ${res.status}`);
  const data=await res.json();
  return (data.results||[]).map((x:any)=>({
    id:String(x.id||x.foreign_landing_url||Math.random()),
    title:x.title||"Untitled",
    image:x.url,
    thumbnail:x.thumbnail||x.url,
    source:x.source||"Openverse",
    page:x.foreign_landing_url||x.url,
    license:x.license,
    author:x.creator
  })).filter((x:ImageItem)=>x.image);
}
