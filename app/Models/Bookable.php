<?php

namespace App\Models;

use Illuminate\Support\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Bookable extends Model
{
    use HasFactory;

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function availableFor($from, $to): bool
    {
        return $this->bookings()->betweenDates($from, $to)->count() === 0;
    }

    public function priceFor($from, $to): array
    {

        $days = (new Carbon($from))->diffInDays(new Carbon($to)) + 1;
        $total = $days * $this->price;
        return [
            'total' => $total,
            'breakdown' => [
                $this->price => $days
            ]
        ];
    }
}
