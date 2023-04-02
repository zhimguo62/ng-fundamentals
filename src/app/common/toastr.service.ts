import { Injectable } from "@angular/core";
// import { info } from "console";

declare let toastr:any

@Injectable()
export class ToastrService{

success(massage: string, title?: string){
    toastr.success(massage,title)
}

info(massage: string, title?: string){
    toastr.info(massage,title)
}

warning(massage: string, title?: string){
    toastr.warning(massage,title)
}

error(massage: string, title?: string){
    toastr.error(massage,title)
}
}