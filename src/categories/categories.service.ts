import { Injectable } from '@nestjs/common';
import { Category } from './typeorm/entities/Category.entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
class CategoriesService {

    constructor(
        @InjectRepository(Category)
        private categoriesRepository: Repository<Category>
    ) {}

    async create(category: Category): Promise<Category> {
        return await this.categoriesRepository.save(category);
    }

    async findAll(): Promise<Category[]> {
        return await this.categoriesRepository.find();
    }

    async findById(id : string): Promise<Category> {
        return await this.categoriesRepository.findOne(id);
    }
}

export default CategoriesService;