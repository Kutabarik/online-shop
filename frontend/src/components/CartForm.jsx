import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {Button, Form} from "react-bootstrap";
import * as yup from 'yup';

const schema = yup.object({
    name: yup.string()
        .required("This field is required")
        .min(3, "Min. length of field: 3")
        .max(20, "Max. length of field: 20"),
})

const CartForm = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: {errors, isValid},
    } = useForm({
        mode: 'onSubmit',
        defaultValues: {
            name: ""
        },
        resolver: yupResolver(schema)
    })
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        {...register('name', {
                            required: true,
                            minLength: 5,
                            maxLength: 20
                        })}
                        type="text"
                        placeholder="Enter your name..."/>
                    <Form.Text className="text-danger">
                        {errors?.name?.message && (
                            <p className="mt-2">* {errors.name.message}</p>
                        )}
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default CartForm;