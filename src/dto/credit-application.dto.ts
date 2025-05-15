import { IsString, IsNumber, Min, IsDateString } from 'class-validator';

export class CreditApplicationDto {
  @IsString()
  name: string;

  @IsDateString()
  birthDate: string;

  @IsString()
  document: string;

  @IsNumber()
  @Min(0)
  income: number;

  @IsNumber()
  @Min(0)
  creditScore: number;
}
