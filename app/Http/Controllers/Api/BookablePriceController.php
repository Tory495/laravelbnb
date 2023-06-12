<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Bookable;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class BookablePriceController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke($bookable_id, Request $request)
    {
        $validated = $request->validate([
            'from' => 'required|date_format:Y-m-d|after_or_equal:now',
            'to' => 'required|date_format:Y-m-d|after_or_equal:from'
        ]);

        $bookable = Bookable::findOrFail($bookable_id);
        $days = (new Carbon($validated['from']))->diffInDays(new Carbon($validated['to'])) + 1;
        
        $total = $days * $bookable->price;
        return response()->json([
            'data' => [
                'total' => $total,
                'breakdown' => [
                    $bookable->price => $days
                ]
            ]
        ]);
    }
}
