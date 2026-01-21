import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsNumber,
} from 'class-validator';

export class CreateSongDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(20)
  readonly title: string;

  @IsString({ each: true })
  @IsNotEmpty()
  @IsArray()
  readonly artist: string[];

  @IsDateString()
  readonly releaseDate: Date;

  @IsMilitaryTime()
  readonly duration: Date;

  @IsString({ each: true })
  @IsNotEmpty()
  @IsArray()
  readonly genre: string[];

  @IsNumber()
  readonly year: number;

  @IsString()
  readonly album: string;
}
