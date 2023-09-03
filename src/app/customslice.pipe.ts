import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'customslice'
})

export class CustomSlice implements PipeTransform{
    transform(value:string){
        if (!value){
            return null;
        }
        return value.substring(0,30);
    }
}