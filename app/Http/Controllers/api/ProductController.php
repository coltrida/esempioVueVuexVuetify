<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Services\ProductService;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function products(ProductService $productService)
    {
        return $productService->products();
    }

    public function inserisci(ProductRequest $request, ProductService $productService)
    {
        return $productService->inserisci($request);
    }
}
