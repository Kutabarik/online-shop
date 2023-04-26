<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;

    public function order(){
        return $this->belongsTo(Order::class);
    }
    public function productCategories(){
        return $this->hasMany(Product_categories::class);
    }
}
