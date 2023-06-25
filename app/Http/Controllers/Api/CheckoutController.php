<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
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
            'customer.first-name' => 'string|required|min:2',
            'customer.last-name' => 'string|required|min:2',
            'customer.street' => 'string|required|min:3',
            'customer.city' => 'string|required|min:3',
            'customer.email' => 'string|required|email',
            'customer.country' => 'string|required|min:2',
            'customer.state' => 'string|required|min:2',
            'customer.zip' => 'string|required|min:2',
        ]);
        
    }
}
