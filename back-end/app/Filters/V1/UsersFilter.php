<?php

namespace App\Filters\V1;

use App\Filters\ApiFilter;
use Illuminate\Http\Request;

class UsersFilter extends ApiFilter
{
    protected $safeParms = [
        'name' => ['eq'],
        'email' => ['eq'],
        'phone' => ['eq']
    ];

    protected $operatorMap = [
        'eq' => '=',
        ];
}
