import { Favorite } from './models/favorites';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class FavoritesService{
    private restaurantsListRef = this.db.list<Favorite>('restaurants');

    constructor(http: Http, private db: AngularFireDatabase){
        
    }
        GetAllFavoritesAF(){
            return this.restaurantsListRef;
        }

        AddFavoriteAF(restaurant: Favorite){
            return this.restaurantsListRef.push(restaurant);
        }

        DeleteFavoriteAF(key:string){
            return this.restaurantsListRef.remove(key);
        }

        UpdateFavoriteAF(key: string, restaurant: Favorite){
            return this.restaurantsListRef.update(key, restaurant);
        }
    }
