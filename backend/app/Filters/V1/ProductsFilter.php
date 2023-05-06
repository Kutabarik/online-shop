<?php

namespace App\Filters\V1;

use App\Filters\ApiFilter;
use Illuminate\Http\Request;

class ProductsFilter extends ApiFilter
{
    protected $safeParms = [
        'name' => ['eq'],
        'categoryId' => ['eq'],
        'price' => ['eq', 'gt', 'lt']
    ];

    protected $columnMap = [
            'categoryId' => 'category_id',
        ];

    protected $operatorMap = [
        'eq' => '=',
        'lt' => '<',
        'lte' => '<=',
        'gt' => '>',
        'gte' => '>=',
        ];
}
