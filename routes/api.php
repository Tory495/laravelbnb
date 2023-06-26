<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ReviewController;
use App\Http\Controllers\Api\BookableController;
use App\Http\Controllers\Api\CheckoutController;
use App\Http\Controllers\Api\BookablePriceController;
use App\Http\Controllers\Api\BookableReviewController;
use App\Http\Controllers\Api\BookingByReviewController;
use App\Http\Controllers\Api\BookableAvailabilityController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::apiResource('bookables', BookableController::class)->only('index', 'show');
Route::get('bookables/{id}/availability', BookableAvailabilityController::class)->name('bookable.availability.show');
Route::get('bookables/{id}/reviews', BookableReviewController::class)->name('bookable.reviews.index');
Route::get('bookable/{id}/price', BookablePriceController::class)->name('bookable.price.show');
Route::get('/booking-by-review/{reviewKey}', BookingByReviewController::class)->name('booking.by-review.show');
Route::apiResource('reviews', ReviewController::class)->only('show', 'store');
Route::post('checkout', CheckoutController::class)->name('checkout');
Route::post('/auth/register', [AuthController::class, 'createUser']);
Route::post('/auth/login', [AuthController::class, 'loginUser']);
Route::post('/auth/logout', [AuthController::class, 'logoutUser']);