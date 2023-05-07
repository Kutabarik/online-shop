<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $status = fake()->randomElement(['billed', 'paid', 'void']);

        return [
            'name' => fake()->name(),
            'street' => fake()->streetAddress(),
            'status' => $status,
            'billed_date' => fake()->dateTimeThisDecade(),
            'paid_date' => $status === 'paid' ? fake()->dateTimeThisDecade() : NULL,
            'products' => json_encode([])
        ];
    }
}
