import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  private readonly songs: string[] = ['Song 1', 'Song 2', 'Song 3'];

  getSongs(): string[] {
    return this.songs;
  }

  createSong(name: string): string[] {
    this.songs.push(name);
    return this.songs;
  }

  updateSong(id: string, name: string): string[] {
    this.songs[id] = name;
    return this.songs;
  }

  deleteSong(id: string): string[] {
    this.songs.splice(Number(id), 1);
    return this.songs;
  }
}
