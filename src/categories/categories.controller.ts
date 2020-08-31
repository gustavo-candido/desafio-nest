import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import CategoriesService  from './categories.service';
import { Category } from './typeorm/entities/Category.entities';

@Controller('categories')
export class CategoriesController {
    constructor(private  categoriesService: CategoriesService) {}

    @Post()
    async create(@Body() category: Category): Promise<Category>{
        return this.categoriesService.create(category);
    }

    @Get()
    async index():  Promise<Category[]>{
        return this.categoriesService.findAll();
    }

    @Get(':id')
    async show(@Param('id') id): Promise<Category>{
        return this.categoriesService.findById(id);
    }
}
