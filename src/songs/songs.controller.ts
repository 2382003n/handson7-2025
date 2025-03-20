import { Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './create.song.dto';
import { ExecutionTime } from 'src/ExecutionTime.interceptor';

@Controller('songs')
export class SongsController {
    constructor (private readonly songsService : SongsService) {}
    
    @Get()
    FindAll() {
        return this.songsService.findAll() ;

    }

    @Post()
    create(@Body() createSongDTO : CreateSongDTO) {
        return this.songsService.create(createSongDTO);    
    }   

    @Get(':id')
    FindOne(@Param('id') id: number) {
        return this.songsService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() createSongDTO : CreateSongDTO) {
        return this.songsService.updateOne(id,createSongDTO);
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.songsService.delete(id);
    }

   



}
