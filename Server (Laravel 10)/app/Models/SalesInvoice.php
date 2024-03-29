<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SalesInvoice extends Model
{
    use HasFactory;
    protected $table = "sales_invoices";

    public function customer() {
        return $this->belongsTo(Customer::class);
    }
    public function admin() {
        return $this->belongsTo(Admin::class);
    }
    public function sales_invoice_details() {
        return $this->hasMany(SalesInvoiceDetail::class);
    }
}
