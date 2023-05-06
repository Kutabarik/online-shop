<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
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
                'name' => ['required', 'string', 'max:100'],
                'email' => ['required', 'email'],
                'phone' => ['required', 'string', 'max:100'],
                'password' => ['required', 'string', 'min:8'],
            ];
        } else {
            return [
                'name' => ['sometimes', 'required', 'string', 'max:100'],
                'email' => ['sometimes', 'required', 'email'],
                'phone' => ['sometimes', 'required', 'string', 'max:100'],
                'password' => ['sometimes', 'required', 'string', 'min:8'],
            ];
        }
    }
}
