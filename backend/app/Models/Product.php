<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'name',
        'description',
        'price',
        'img',
    ];

    public function orders(){
        return $this->belongsToMany(Order::class);
    }

    public function category()
    {
        return $this->belongsTo(Product_categories::class);
    }
}
