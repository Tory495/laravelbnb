<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Bookable;
use Illuminate\Http\Request;

class CheckoutController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $validated = $request->validate([
            'bookings' => 'required|array|min:1',
            'bookings.*.bookable_id' => 'required|exists:bookables,id',
            'bookings.*.from' => 'required|date|after_or_equal:today',
            'bookings.*.to' => 'required|date|after_or_equal:bookings.*.from',
            'customer.first-name' => 'string|required|min:2',
            'customer.last-name' => 'string|required|min:2',
            'customer.street' => 'string|required|min:3',
            'customer.city' => 'string|required|min:3',
            'customer.email' => 'string|required|email',
            'customer.country' => 'string|required|min:2',
            'customer.state' => 'string|required|min:2',
            'customer.zip' => 'string|required|min:2',
        ]);

        $validated = array_merge($validated, $request->validate([
            'bookings.*' => [
                'required',
                function ($attribute, $value, $fail) {
                    $bookable = Bookable::findOrFail($value['bookable_id']);

                    if (!$bookable->availableFor($value['from'], $value['to'])) {
                        $fail("The object is not available in given dates");
                    }
                }
            ],
        ]));
    }
}
