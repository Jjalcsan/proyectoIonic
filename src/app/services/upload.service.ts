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

    async guardarImg (imageData : any){
        try {
            const imgName = this.imgName();
            return new Promise((resolve, reject) => {
            const pictureRef = this.angularFireStorage.ref(this.location + imgName);
            pictureRef
            .put(imageData)
            .then(function () {
            pictureRef.getDownloadURL().subscribe((url: any) => {
            resolve(url);
            });
        })
        .catch((error) => {
            reject(error);
        });
        });
        } catch (e) {}
    }
}