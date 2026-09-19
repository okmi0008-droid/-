export async function downloadImage(url:string,filename:string){
 const response=await fetch(url); if(!response.ok) throw new Error(`Download failed: ${response.status}`);
 const blob=await response.blob(); const objectUrl=URL.createObjectURL(blob);
 const a=document.createElement('a'); a.href=objectUrl; a.download=filename.replace(/[^\w\-.\u4e00-\u9fff ]/g,'_');
 document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(objectUrl),1000);
}
export async function copyImageUrl(url:string){await navigator.clipboard.writeText(url);}
