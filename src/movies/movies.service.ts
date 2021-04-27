import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movies.entity';

@Injectable()
export class MoviesService {
    // create database
    private movies : Movie[] = [];

    getAll():Movie[]{
        return this.movies;
    }

    getOne(id: string):Movie{
        const movie= this.movies.find(movie => movie.id === parseInt(id));
        if(!movie){
            throw new NotFoundException(`Movie with Id ${id} not found.`);
        }
        return movie;
    }
 
    deleteOne(id: string):boolean{
        this.getOne(id) // getOne에서 오류가 난다는건 해당 id를 가진 movie가 없다는 말이므로 delete도 불가능함.
        this.movies.filter(movie => movie.id !== parseInt(id))
        return true;
    }

    createMovie(movidata){
        this.movies.push({
            id: this.movies.length + 1,
            ...movidata
        })
    }
}
