<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    protected $table = "comments";

    public function book() {
        return $this->belongsTo(Book::class);
    }

    public function customer() {
        return $this->belongsTo(Customer::class);
    }
  
}
