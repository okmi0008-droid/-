export type ImageItem={id:string;title:string;image:string;thumbnail:string;source:string;page:string;license?:string;author?:string};
export type SearchAdapter={id:string;name:string;search:(query:string,page?:number)=>Promise<ImageItem[]>};
