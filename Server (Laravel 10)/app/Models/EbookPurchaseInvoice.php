<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EbookPurchaseInvoice extends Model
{
    use HasFactory;
    protected $table = "ebook_purchase_invoices";

    public function supplier() {
        return $this->belongsTo(Supplier::class);
    }
    public function admin() {
        return $this->belongsTo(Admin::class);
    }
    public function book() {
        return $this->belongsTo(Book::class);
    }
}
