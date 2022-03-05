<?php


namespace App\Services;


use App\Models\Product;

class ProductService
{
    public function products()
    {
        return Product::latest()->get();
    }

    public function inserisci($request)
    {
        $prodotto = new Product();
        $prodotto->nome = $request->nome;
        $prodotto->tipologia = $request->tipologia;
        $prodotto->save();

        return $prodotto;
    }
}
