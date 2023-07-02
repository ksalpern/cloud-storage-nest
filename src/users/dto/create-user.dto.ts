import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'test@test.co',
  })
  email: string;

  @ApiProperty({
    default: 'John Martinez',
  })
  fullName: string;

  @ApiProperty({
    default: '12345',
  })
  password: string;
}