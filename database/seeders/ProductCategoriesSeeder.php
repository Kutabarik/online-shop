<?php

namespace Database\Seeders;

use App\Models\Product_categories;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductCategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product_categories::factory()
            ->count(10)
            ->create();
    }
}
