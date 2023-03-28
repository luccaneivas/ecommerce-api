import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { CompanyEntity } from './entities/company.entity';

@Controller('companies')
@ApiTags('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  @ApiCreatedResponse({ type: CompanyEntity })
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companiesService.create(createCompanyDto);
  }

  @Get()
  @ApiOkResponse({ type: CompanyEntity, isArray: true })
  findAll() {
    return this.companiesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: CompanyEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const company = await this.companiesService.findOne(id);

    if (!company) {
      throw new NotFoundException(`Company ${id} doesn't exist.`);
    }

    return company;
  }

  @Patch(':id')
  @ApiOkResponse({ type: CompanyEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCompanyDto: UpdateCompanyDto,
  ) {
    return this.companiesService.update(id, updateCompanyDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: CompanyEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.companiesService.remove(id);
  }
}
