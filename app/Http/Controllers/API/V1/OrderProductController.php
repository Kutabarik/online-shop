<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOrder_productRequest;
use App\Http\Requests\UpdateOrder_productRequest;
use App\Models\Order_product;

class OrderProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOrder_productRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Order_product $order_product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order_product $order_product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrder_productRequest $request, Order_product $order_product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order_product $order_product)
    {
        //
    }
}
