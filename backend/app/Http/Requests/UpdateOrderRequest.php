<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateOrderRequest extends FormRequest
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
        $method = $this->method();

        if ($method === 'PUT') {
            return [
                'name' => ['required', 'string', 'min:3', 'max:100'],
                'street' => ['required', 'string', 'max:100'],
                'status' => ['required', 'string', Rule::in(['billed', 'paid', 'void'])],
                'billed_date' => ['required', 'date'],
                'paid_date' => ['nullable', 'date'],
            ];
        } else {
            return [
                'name' => ['required', 'string', 'min:3', 'max:100'],
                'street' => ['sometimes', 'required', 'string', 'max:100'],
                'status' => ['sometimes', 'required', 'string', Rule::in(['billed', 'paid', 'void'])],
                'billed_date' => ['sometimes', 'required', 'date'],
                'paid_date' => ['sometimes', 'nullable', 'date'],
            ];
        }
    }
}
