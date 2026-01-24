import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
  HttpException,
  HttpStatus,
  ParseIntPipe,
  Inject,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song-dito';
import type { Connection } from 'src/common/constants/connection';

@Controller('songs')
export class SongsController {
  constructor(
    private readonly songsService: SongsService,
    @Inject('CONNECTION')
    private connection: Connection,
  ) {
    console.log(`
      CONNECTION_STRING: ${this.connection.CONNECTION_STRING}
      DB: ${this.connection.DB}
      DBN_NAME: ${this.connection.DBN_NAME}
    `);
  }

  @Get()
  getSongs(): CreateSongDto[] {
    try {
      return this.songsService.getSongs();
    } catch (error) {
      throw new HttpException(
        'error in DB while fetching songs',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }

  @Get(':id')
  getSongById(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ): string {
    try {
      return `Song ${typeof id}`;
    } catch (error) {
      throw new HttpException(
        'error in DB while fetching song by id',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
    return `Song ${id}`;
  }

  @Post()
  createSong(@Body() createSongDto: CreateSongDto): CreateSongDto[] {
    try {
      return this.songsService.createSong(createSongDto);
    } catch (error) {
      throw new HttpException(
        'error in DB while creating song',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }

  @Put(':id')
  updateSong(
    @Param('id') id: string,
    @Body() createSongDto: CreateSongDto,
  ): CreateSongDto {
    return this.songsService.updateSong(id, createSongDto);
  }

  @Delete(':id')
  deleteSong(@Param('id') id: string): CreateSongDto[] {
    try {
      return this.songsService.deleteSong(id);
    } catch (error) {
      throw new HttpException(
        'error in DB while deleting song',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }
}
