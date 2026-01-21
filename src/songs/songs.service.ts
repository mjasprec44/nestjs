import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song-dito';

@Injectable()
export class SongsService {
  private readonly songs: CreateSongDto[] = [];

  getSongs(): CreateSongDto[] {
    return this.songs;
  }

  createSong(createSongDto: CreateSongDto): CreateSongDto[] {
    this.songs.push(createSongDto);
    return this.songs;
  }

  updateSong(id: string, createSongDto: CreateSongDto): CreateSongDto {
    this.songs[id] = createSongDto;
    return createSongDto;
  }

  deleteSong(id: string): CreateSongDto[] {
    this.songs.splice(Number(id), 1);
    return this.songs;
  }
}
