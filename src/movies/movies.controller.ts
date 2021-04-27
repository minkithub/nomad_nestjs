import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req } from '@nestjs/common';
import { Res } from '@nestjs/common/decorators/http/route-params.decorator';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
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
    getOne(@Param("id") movieId:number): Movie {
        return this.moviesService.getOne(movieId);
    }

    // post는 create로 데이터를 생성하는 것이다.
    @Post()
    create(@Body() movieData: CreateMovieDto){
        return this.moviesService.createMovie(movieData);
    }

    @Delete("/:id")
    remove(@Param('id') movieId:number){
        return this.moviesService.deleteOne(movieId);
    }

    @Patch("/:id")
    path(@Param('id') movieId:number, @Body() updateData: UpdateMovieDto){
       this.moviesService.update(movieId, updateData);
    }

}
