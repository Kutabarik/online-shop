<?php

namespace App\Filters\V1;

use App\Filters\ApiFilter;
use Illuminate\Http\Request;

class CategoriesFilter extends ApiFilter
{
    protected $safeParms = [
        'name' => ['eq'],
    ];

    protected $operatorMap = [
        'eq' => '=',
        ];
}
