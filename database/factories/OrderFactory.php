<?php

namespace Database\Factories;

use App\Models\Products;
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
            'user_id' => User::factory(),
            'product_id' => Products::factory(),
            'city' => fake()->city(),
            'street' => fake()->streetAddress(),
            'total' => fake()->numberBetween(10, 100000),
            'status' => $status,
            'billed_date' => fake()->dateTimeThisDecade(),
            'paid_date' => $status === 'paid' ? fake()->dateTimeThisDecade() : NULL,
        ];
    }
}
