<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Carbon\Carbon;

class BookingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $from = Carbon::instance($this->faker->dateTimeBetween('-1 months', '+1 months'));
        $to = (clone $from)->addDays(random_int(0, 14));
        return [
            'from' => $from,
            'to' => $to,
            'price' => random_int(200, 5000),
        ];
    }
}
