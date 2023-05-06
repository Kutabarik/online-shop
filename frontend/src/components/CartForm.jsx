import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {Button, Form} from "react-bootstrap";
import * as yup from 'yup';

const schema = yup.object({
    address: yup.string()
        .required("This field is required")
        .min(3, "Min. length of field: 3")
        .max(20, "Max. length of field: 20"),
})

const CartForm = () => {
    const {
        register,
        handleSubmit,
        setError,
        getValues,
        watch,
        formState: {errors, isValid},
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            address: ""
        },
        resolver: yupResolver(schema)
    })

    const watchIsMyAddress = watch("myAddress", false);
    const onSubmit = (data) => {
        const suc = (pos) => {
            console.log(pos)
        }
        const order = {
            "user_id": 1,
            "city": "Test",
            "street":  data.address,
        }
    }
    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        {...register('address', {
                            required: true,
                            minLength: 5,
                            maxLength: 20
                        })}
                        type="text"
                        disabled={watchIsMyAddress}
                        placeholder="Enter your address..."/>
                    <Form.Text className="text-danger">
                        {errors?.address?.message && (
                            <p className="mt-2">* {errors.address.message}</p>
                        )}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        {...register('myAddress', {
                            required: false,
                        })}
                        type="checkbox"
                        label="Use my location address"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default CartForm;