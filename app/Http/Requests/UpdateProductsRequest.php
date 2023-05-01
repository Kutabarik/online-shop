<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductsRequest extends FormRequest
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
                'category_id' => ['required', 'exists:product_categories,id'],
                'name' => ['required', 'string', 'max:100'],
                'description' => ['required', 'string'],
                'price' => ['required', 'numeric', 'min:0'],
                'img' => ['required', 'url'],
            ];
        } else {
            return [
                'category_id' => ['sometimes', 'required', 'exists:product_categories,id'],
                'name' => ['sometimes', 'required', 'string', 'max:100'],
                'description' => ['sometimes', 'required', 'string'],
                'price' => ['sometimes', 'required', 'numeric', 'min:0'],
                'img' => ['sometimes', 'required', 'url'],
            ];
        }
    }
}
