<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreOrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'user_id' => ['required', 'integer', 'exists:users,id'],
            'street' => ['required', 'string', 'max:100'],
            'total' => ['required', 'numeric', 'min:0'],
            'status' => ['required', 'string', Rule::in(['billed', 'paid', 'void'])],
            'billed_date' => ['required', 'date'],
            'paid_date' => ['nullable', 'date'],
        ];
    }
}
