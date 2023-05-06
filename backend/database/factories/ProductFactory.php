<?php

namespace Database\Factories;

use App\Models\Product_categories;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categories = DB::table('product_categories')->inRandomOrder()->first();

        return [
            'category_id' => $categories->id,
            'name' => fake()->sentence(2),
            'description' => fake()->paragraph(3),
            'price' => fake()->randomFloat(2, 10, 500),
            'img' => fake()->imageUrl(),
        ];
    }
}
