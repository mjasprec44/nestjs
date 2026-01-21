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

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}
  @Get()
  getSongs(): string[] {
    return this.songsService.getSongs();
  }

  @Get(':id')
  getSongById(@Param('id') id: string): string {
    return `Song ${id}`;
  }

  @Post()
  createSong(@Body() body: { name: string }): string[] {
    return this.songsService.createSong(body.name);
  }

  @Put(':id')
  updateSong(
    @Param('id') id: string,
    @Body() body: { name: string },
  ): string[] {
    return this.songsService.updateSong(id, body.name);
  }

  @Delete(':id')
  deleteSong(@Param('id') id: string): string[] {
    return this.songsService.deleteSong(id);
  }
}
