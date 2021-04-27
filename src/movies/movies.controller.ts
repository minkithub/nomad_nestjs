import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Movie } from './entities/movies.entity';
import { MoviesService } from './movies.service';

// http://localhost:3000/movie 에서 해당 정보를 확인할 수 있음.
@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) {

    }

    @Get()
    getAll(): Movie[]{
        return this.moviesService.getAll();
    }

    // search가 id보다 밑에 있으면 이를 search가 아닌 id로 인식한다.
    // http://localhost:3000/movies/search?year=2000
    // @Get("/search")
    // search(@Query("year") searchingYear: string){
    //     return `We are searching for a movie made after : ${searchingYear}`;
    // }

    // http://localhost:3000/movies/1
    @Get("/:id")
    getOne(@Param("id") movieId:string): Movie {
        return this.moviesService.getOne(movieId);
    }

    // post는 create로 데이터를 생성하는 것이다.
    @Post()
    create(@Body() movieData){
        return this.moviesService.createMovie(movieData);
    }

    @Delete("/:id")
    remove(@Param('id') movieId:string){
        return this.moviesService.deleteOne(movieId);
    }

    @Patch("/:id")
    path(@Param('id') movieId:string, @Body() updateData){

        // 위의 Post generator를 통해 body에 movidata가 담겼고, 이를 새로운 param으로 사용해 patch에 적욕, 부분적으로 업데이트한다.
        return {
            updatedMovieId:movieId,
            name:updateData['name'],
            director:updateData['director'],
            // ...updateData,
        }
    }

}
