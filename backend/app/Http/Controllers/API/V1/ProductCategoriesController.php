<?php

namespace App\Http\Controllers\API\V1;

use App\Filters\V1\CategoriesFilter;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProduct_categoriesRequest;
use App\Http\Requests\UpdateProduct_categoriesRequest;
use App\Http\Resources\V1\ProductCategoriesCollection;
use App\Http\Resources\V1\ProductCategoriesResource;
use App\Models\Product_categories;

class ProductCategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new CategoriesFilter();
        $filterItems = $filter->transform($request);

        if (count($filterItems) === 0){
            return new ProductCategoriesCollection(Product_categories::paginate());
        } else {
            $categories = Product_categories::where($filterItems)->paginate();

            return new ProductCategoriesCollection($categories->appends($request->query()));
        }
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
    public function store(StoreProduct_categoriesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Product_categories $category)
    {
        return new ProductCategoriesResource($category);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product_categories $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProduct_categoriesRequest $request, Product_categories $category)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product_categories $category)
    {
        //
    }
}
