import { IsString, IsNotEmpty, MinLength, MaxLength, IsArray } from 'class-validator';

export class CreateSongDto {
  
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(20)
  readonly title: string;

 @IsString()
  @IsNotEmpty()
   @IsArray()
  readonly artist: string;
  readonly releaseDate: Date;
  readonly duration: Date;
  readonly genre: string;
  readonly year: number;
  readonly album: string;
}
