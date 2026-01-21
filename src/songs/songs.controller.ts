import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song-dito';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}
  @Get()
  getSongs(): CreateSongDto[] {
    return this.songsService.getSongs();
  }

  @Get(':id')
  getSongById(@Param('id') id: string): string {
    return `Song ${id}`;
  }

  @Post()
  createSong(@Body() createSongDto: CreateSongDto): CreateSongDto[] {
    return this.songsService.createSong(createSongDto);
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
    return this.songsService.deleteSong(id);
  }
}
