import { Injectable } from "@angular/core";
import { AngularFireStorage } from '@angular/fire/compat/storage'

@Injectable({
    providedIn: 'root'
})

export class UploadService {

    location = 'uploads/'

    constructor( private angularFireStorage : AngularFireStorage) {}

    imgName() {
        const newTime = Math.floor(Date.now() / 1000);
        return Math.floor(Math.random() * 20) + newTime;
    }

    guardarImg (imageData : any){
        const imageName = this.imgName();
        return new Promise((resolve, reject) => {
            const imgRef = this.angularFireStorage.ref(this.location+imageName);

            imgRef.put(imageData).then (function(){
                imgRef.getDownloadURL().subscribe((url:any) => {
                    resolve(url);
                })
            }). catch((error) => {
                reject(error);
            })
        })
    }
}