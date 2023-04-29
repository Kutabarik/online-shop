<?php

namespace App\Filters\V1;

use App\Filters\ApiFilter;
use Illuminate\Http\Request;

class OrdersFilter extends ApiFilter
{
    protected $safeParms = [
        'userId' => ['eq'],
        'city' => ['eq'],
        'street' => ['eq'],
        'total' => ['eq', 'gt', 'gte', 'lt', 'lte'],
        'status' => ['eq', 'ne'],
        'billedDate' => ['eq', 'gt', 'gte', 'lt', 'lte'],
        'paidDate' => ['eq', 'gt', 'gte', 'lt', 'lte']
    ];

    protected $columnMap = [
            'userId' => 'user_id',
            'billedDate' => 'billed_date',
            'paidDate' => 'paid_date',
        ];

    protected $operatorMap = [
        'eq' => '=',
        'lt' => '<',
        'lte' => '<=',
        'gt' => '>',
        'gte' => '>=',
        'ne' => '!=',
        ];
}
